export const readFile = async (filePath = null) => {
    const fileReader = new FileReader();

    return new Promise((resolve, reject) => {
    fileReader.onload = () => {
        resolve(fileReader.result);
    };

    fileReader.onerror = () => {
        reject(fileReader.error);
    };

    fileReader.readAsText(filePath);
    });
};

export const parseLEF = (lefFile) => {
    const retValue = {
        cells: {},
    };

    const regex = /MACRO\s+(\S+)((?:.|\r?\n)+)END \1/g;
    try {
        while (parseRegex(regex, lefFile, function (value) {
        const cell = (retValue.cells[value[0]] = {});

        parseRegex(/SIZE\s+(\S+)\s+BY\s+(\S+)/g, value[1], function (value) {
            cell.w = +value[0];
            cell.h = +value[1];
        });
        })) { }
    } catch (e) {
        return null;
    }
    return retValue;
};

export const parseDEF = (content) => {
    const retValue = {
        die: { x1: 0, y1: 0, x2: 0, y2: 0 },
        cells: [],
        pins: [],
        nets: [],
    };

    // DIEAREA
    parseRegex(/DIEAREA\s+\(\s+(\S+)\s+(\S+)\s+\)\s+\(\s+(\S+)\s+(\S+)\s+\)\s+;/g, content, function (m) {
        retValue.die = { x1: +m[0], y1: +m[1], x2: +m[2], y2: +m[3] };
    });
    // DIEAREA

    // COMPONENTS
    parseRegex(/COMPONENTS.+;((?:\r?\n|.)+)END COMPONENTS/gm, content, function (matches) {
        const cells = retValue.cells;
        let data = {};

        let stop = false;
        const component = /\-\s+(\S+)\s+(\S+)[^\(]+\(\s+(\S+)\s+(\S+)/g;
        for (; !stop;) {
        stop = !parseRegex(component, matches[0], function (m) {
            const cell = { name: m[0], type: m[1], x: +m[2], y: +m[3] };

            (data[cell.y] = data[cell.y] || []).push(cell);
        });
        }

        // sort descendingly; biggest y value is actually smallest
        // on drawing. (mirrored).
        Object.keys(data)
        .sort(function (a, b) {
            return +b - +a;
        })
        .forEach(function (val) {
            cells.push(data[val]);
        });
    });
    // COMPONENTS

    // PINS
    parseRegex(/PINS.+;((?:\r?\n|.)+)END PINS/g, content, function (matches) {
    const pins = retValue.pins;

    const component = /- .+ NET (\S+)\r?\n  \+ LAYER (\S+) \( (\S+) (\S+) \) \( (\S+) (\S+) \)\r?\n  \+ (?:PLACED|FIXED) \( (\S+) (\S+) \) (\w)/g;
    while (parseRegex(component, matches[0], function (m) {
    pins.push({ name: m[0], layer: m[1], x1: +m[2], y1: +m[3], x2: +m[4], y2: +m[5], x: +m[6], y: +m[7], ori: m[8] });
    }));
    });
    // PINS
    
    // NETS
    parseRegex(/^NETS.+;((?:.|\r?\n)+)END NETS$/gm, content, function (matches) {
    matches = matches[0].split(/\r?\n/);

    const nets = retValue.nets;
    for (let i = 0; i < matches.length; ++i) {
        parseRegex(/-\s+(\S+)/g, matches[i], function (n) {
        const net = { name: n[0], connections: [], routes: [] };
        const connections = net.connections;
        const routes = net.routes;
    
        for (; i < matches.length; ++i) {
            parseRegex(/(metal\d)/, matches[i], function (m) {
            const route = { layer: m[0], coords: [] };
    
            const coords = route.coords;
    
            const parser = /\(\s+(-?(?:\*|\d+))\s+(-?(?:\*|\d+))\s+\)\s+(\w+)?/g;
            while (parseRegex(parser, matches[i], function (m) {
                let x = +m[0], y = +m[1];
    
                if (m[0] === '*') {
                x = coords[coords.length - 1].x;
                }
                if (m[1] === '*') {
                y = coords[coords.length - 1].y;
                }
    
                coords.push({ x: x, y: y });
                route.via = m[2];
            }));
    
            routes.push(route);
            });
    
            parseRegex(/\(\s+(\S+)\s+(\S+)\s+\)/g, matches[i], function (m) {
            if (m[1] === 'CLK') {
                net.CLOCK = true;
            }
    
            connections.push({ name: m[0], pin: m[1] });
            });
    
            if (/\;/.test(matches[i])) {
            break;
            }
        }
    
        if (/clk/i.test(net.name)) {
            net.CLOCK = true;
        }
        nets.push(net);
        });
    }

    });
    // NETS
    return retValue;
};
    
function parseRegex(regex, content, fn) {
    const ret = regex.exec(content);
    if (ret) {
        fn(Array.prototype.slice.call(ret, 1));
        return true;
    }
}