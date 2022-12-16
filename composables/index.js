export const readFile = async (filePath=null) => {
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
        cells: {}
    };

    const regex = /MACRO\s+(\S+)((?:.|\r?\n)+)END \1/g;
    while (parseRegex(regex, lefFile, function (value) {
        const cell = retValue.cells[value[0]] = {};

        parseRegex(/SIZE\s+(\S+)\s+BY\s+(\S+)/g, value[1], function (value) {
            cell.w =+ value[0];
            cell.h =+ value[1];
    });
    })) { }

    return retValue;
}

function parseRegex(regex, content, fn) {
    const ret = regex.exec(content);
    if (ret) {
        fn(Array.prototype.slice.call(ret, 1));
        return true;
    }
}