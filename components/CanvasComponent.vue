<!-- eslint-disable -->
<script setup>
const defViewer = {
  lefData: {
    cells: {
      FILL: { w: 1.6, h: 20.0 },
      AND2X1: { w: 6.4, h: 20.0 },
      AND2X2: { w: 6.4, h: 20.0 },
      AOI21X1: { w: 6.4, h: 20.0 },
      AOI22X1: { w: 8.0, h: 20.0 },
      BUFX2: { w: 4.8, h: 20.0 },
      BUFX4: { w: 6.4, h: 20.0 },
      DFFNEGX1: { w: 19.2, h: 20.0 },
      NOR3X1: { w: 12.8, h: 20.0 },
      DFFPOSX1: { w: 19.2, h: 20.0 },
      FAX1: { w: 24.0, h: 20.0 },
      HAX1: { w: 16.0, h: 20.0 },
      INVX1: { w: 3.2, h: 20.0 },
      INVX2: { w: 3.2, h: 20.0 },
      INVX4: { w: 4.8, h: 20.0 },
      INVX8: { w: 8.0, h: 20.0 },
      NAND2X1: { w: 4.8, h: 20.0 },
      NAND3X1: { w: 6.4, h: 20.0 },
      NOR2X1: { w: 4.8, h: 20.0 },
      OAI21X1: { w: 6.4, h: 20.0 },
      OAI22X1: { w: 8.0, h: 20.0 },
      OR2X1: { w: 6.4, h: 20.0 },
      OR2X2: { w: 6.4, h: 20.0 },
      TBUFX1: { w: 8.0, h: 20.0 },
      TBUFX2: { w: 11.2, h: 20.0 },
      XOR2X1: { w: 11.2, h: 20.0 },
      MUX2X1: { w: 9.6, h: 20.0 },
      XNOR2X1: { w: 11.2, h: 20.0 },
      LATCH: { w: 11.2, h: 20.0 },
      DFFSR: { w: 35.2, h: 20.0 },
      CLKBUF1: { w: 14.4, h: 20.0 },
      CLKBUF2: { w: 20.8, h: 20.0 },
      CLKBUF3: { w: 27.2, h: 20.0 },
      PADFC: { w: 300.0, h: 300.0 },
      PADGND: { w: 90.0, h: 300.0 },
      PADVDD: { w: 90.0, h: 300.0 },
      PADINC: { w: 90.0, h: 300.0 },
      PADINOUT: { w: 90.0, h: 300.0 },
      PADNC: { w: 90.0, h: 300.0 },
      PADOUT: { w: 90.0, h: 300.0 },
    },
  },
  defData: {
    die: {
      x1: -480,
      y1: 0,
      x2: 7360,
      y2: 2400,
    },
    cells: [
      [
        {
          name: "BUFX2_2",
          type: "BUFX2",
          x: 80,
          y: 100,
        },
        {
          name: "DFFPOSX1_2",
          type: "DFFPOSX1",
          x: 560,
          y: 100,
        },
        {
          name: "AOI21X1_1",
          type: "AOI21X1",
          x: 2480,
          y: 100,
        },
        {
          name: "OAI21X1_1",
          type: "OAI21X1",
          x: 3120,
          y: 100,
        },
        {
          name: "INVX1_1",
          type: "INVX1",
          x: 3760,
          y: 100,
        },
        {
          name: "NOR2X1_1",
          type: "NOR2X1",
          x: 4080,
          y: 100,
        },
        {
          name: "DFFPOSX1_1",
          type: "DFFPOSX1",
          x: 4560,
          y: 100,
        },
        {
          name: "BUFX2_1",
          type: "BUFX2",
          x: 6480,
          y: 100,
        },
      ],
    ],
    pins: [
      {
        name: "clk",
        layer: "metal2",
        x1: 0,
        y1: 0,
        x2: 1,
        y2: 1,
        x: 2080,
        y: 2400,
        ori: "N",
      },
      {
        name: "reset",
        layer: "metal2",
        x1: 0,
        y1: 0,
        x2: 1,
        y2: 1,
        x: 4160,
        y: 2400,
        ori: "N",
      },
      {
        name: "dout<0>",
        layer: "metal3",
        x1: 0,
        y1: 0,
        x2: 1,
        y2: 1,
        x: 7200,
        y: 1200,
        ori: "N",
      },
      {
        name: "dout<1>",
        layer: "metal3",
        x1: 0,
        y1: 0,
        x2: 1,
        y2: 1,
        x: -160,
        y: 1200,
        ori: "N",
      },
    ],
    nets: [
      {
        name: "$auto$iopadmap.cc:164:execute$47<0>",
        connections: [
          {
            name: "DFFPOSX1_1",
            pin: "Q",
          },
          {
            name: "NOR2X1_1",
            pin: "B",
          },
          {
            name: "AOI21X1_1",
            pin: "A",
          },
          {
            name: "OAI21X1_1",
            pin: "A",
          },
          {
            name: "BUFX2_1",
            pin: "A",
          },
          {
            name: "6400",
            pin: "1170",
          },
          {
            name: "4480",
            pin: "1200",
          },
          {
            name: "4480",
            pin: "1200",
          },
          {
            name: "4480",
            pin: "1200",
          },
          {
            name: "6080",
            pin: "1200",
          },
          {
            name: "6080",
            pin: "1400",
          },
          {
            name: "3040",
            pin: "1200",
          },
          {
            name: "3040",
            pin: "1200",
          },
          {
            name: "3040",
            pin: "1200",
          },
          {
            name: "3200",
            pin: "1400",
          },
          {
            name: "3040",
            pin: "1400",
          },
        ],
        routes: [
          {
            layer: "metal1",
            coords: [
              {
                x: 6400,
                y: 1170,
              },
              {
                x: 6400,
                y: 1200,
              },
              {
                x: 6560,
                y: 1200,
              },
            ],
          },
          {
            layer: "metal1",
            coords: [
              {
                x: 4480,
                y: 1200,
              },
            ],
            via: "M2_M1",
          },
          {
            layer: "metal2",
            coords: [
              {
                x: 4480,
                y: 1200,
              },
            ],
            via: "M3_M2",
          },
          {
            layer: "metal3",
            coords: [
              {
                x: 4480,
                y: 1200,
              },
              {
                x: 6080,
                y: 1200,
              },
            ],
            via: "M3_M2",
          },
          {
            layer: "metal2",
            coords: [
              {
                x: 6080,
                y: 1200,
              },
              {
                x: 6080,
                y: 1400,
              },
            ],
            via: "M2_M1",
          },
          {
            layer: "metal1",
            coords: [
              {
                x: 6080,
                y: 1400,
              },
              {
                x: 6080,
                y: 1510,
              },
            ],
          },
          {
            layer: "metal1",
            coords: [
              {
                x: 3040,
                y: 1200,
              },
            ],
            via: "M2_M1",
          },
          {
            layer: "metal2",
            coords: [
              {
                x: 3040,
                y: 1200,
              },
            ],
            via: "M3_M2",
          },
          {
            layer: "metal3",
            coords: [
              {
                x: 3040,
                y: 1200,
              },
              {
                x: 4480,
                y: 1200,
              },
            ],
          },
          {
            layer: "metal1",
            coords: [
              {
                x: 3200,
                y: 1400,
              },
              {
                x: 3040,
                y: 1400,
              },
            ],
            via: "M2_M1",
          },
          {
            layer: "metal2",
            coords: [
              {
                x: 3040,
                y: 1400,
              },
              {
                x: 3040,
                y: 1200,
              },
            ],
          },
        ],
      },
      {
        name: "dout<0>",
        connections: [
          {
            name: "PIN",
            pin: "dout<0>",
          },
          {
            name: "BUFX2_1",
            pin: "Y",
          },
          {
            name: "7200",
            pin: "1200",
          },
          {
            name: "7040",
            pin: "1200",
          },
          {
            name: "7040",
            pin: "1400",
          },
        ],
        routes: [
          {
            layer: "metal3",
            coords: [
              {
                x: 7200,
                y: 1200,
              },
              {
                x: 7040,
                y: 1200,
              },
            ],
            via: "M3_M2",
          },
          {
            layer: "metal2",
            coords: [
              {
                x: 7040,
                y: 1200,
              },
              {
                x: 7040,
                y: 1400,
              },
            ],
            via: "M2_M1",
          },
          {
            layer: "metal1",
            coords: [
              {
                x: 7040,
                y: 1400,
              },
              {
                x: 6880,
                y: 1400,
              },
            ],
          },
        ],
      },
      {
        name: "$auto$iopadmap.cc:164:execute$47<1>",
        connections: [
          {
            name: "DFFPOSX1_2",
            pin: "Q",
          },
          {
            name: "AOI21X1_1",
            pin: "B",
          },
          {
            name: "OAI21X1_1",
            pin: "B",
          },
          {
            name: "BUFX2_2",
            pin: "A",
          },
          {
            name: "640",
            pin: "1170",
          },
          {
            name: "2880",
            pin: "1400",
          },
          {
            name: "2880",
            pin: "1400",
          },
          {
            name: "2880",
            pin: "1400",
          },
          {
            name: "960",
            pin: "1400",
          },
          {
            name: "960",
            pin: "1400",
          },
          {
            name: "3360",
            pin: "1200",
          },
          {
            name: "3360",
            pin: "1200",
          },
          {
            name: "3360",
            pin: "1400",
          },
        ],
        routes: [
          {
            layer: "metal1",
            coords: [
              {
                x: 640,
                y: 1170,
              },
              {
                x: 640,
                y: 1200,
              },
              {
                x: 480,
                y: 1200,
              },
            ],
          },
          {
            layer: "metal1",
            coords: [
              {
                x: 2880,
                y: 1400,
              },
            ],
            via: "M2_M1",
          },
          {
            layer: "metal2",
            coords: [
              {
                x: 2880,
                y: 1400,
              },
            ],
            via: "M3_M2",
          },
          {
            layer: "metal3",
            coords: [
              {
                x: 2880,
                y: 1400,
              },
              {
                x: 960,
                y: 1400,
              },
            ],
            via: "M3_M2",
          },
          {
            layer: "metal1",
            coords: [
              {
                x: 960,
                y: 1400,
              },
            ],
            via: "M2_M1",
          },
          {
            layer: "metal1",
            coords: [
              {
                x: 960,
                y: 1400,
              },
              {
                x: 960,
                y: 1510,
              },
            ],
          },
          {
            layer: "metal1",
            coords: [
              {
                x: 3360,
                y: 1200,
              },
            ],
            via: "M2_M1",
          },
          {
            layer: "metal2",
            coords: [
              {
                x: 3360,
                y: 1200,
              },
              {
                x: 3360,
                y: 1400,
              },
            ],
            via: "M3_M2",
          },
          {
            layer: "metal3",
            coords: [
              {
                x: 3360,
                y: 1400,
              },
              {
                x: 2880,
                y: 1400,
              },
            ],
          },
        ],
      },
      {
        name: "dout<1>",
        connections: [
          {
            name: "PIN",
            pin: "dout<1>",
          },
          {
            name: "BUFX2_2",
            pin: "Y",
          },
          {
            name: "-160",
            pin: "1200",
          },
          {
            name: "160",
            pin: "1200",
          },
        ],
        routes: [
          {
            layer: "metal3",
            coords: [
              {
                x: -160,
                y: 1200,
              },
              {
                x: 160,
                y: 1200,
              },
            ],
            via: "M3_M2",
          },
          {
            layer: "metal2",
            coords: [
              {
                x: 160,
                y: 1200,
              },
              {
                x: 160,
                y: 1400,
              },
            ],
            via: "M2_M1",
          },
        ],
      },
      {
        name: "reset",
        connections: [
          {
            name: "PIN",
            pin: "reset",
          },
          {
            name: "NOR2X1_1",
            pin: "A",
          },
          {
            name: "INVX1_1",
            pin: "A",
          },
          {
            name: "4160",
            pin: "1600",
          },
          {
            name: "4160",
            pin: "2400",
          },
        ],
        routes: [
          {
            layer: "metal1",
            coords: [
              {
                x: 4160,
                y: 1600,
              },
              {
                x: 4000,
                y: 1600,
              },
            ],
          },
          {
            layer: "metal2",
            coords: [
              {
                x: 4160,
                y: 2400,
              },
              {
                x: 4160,
                y: 1600,
              },
            ],
            via: "M2_M1",
          },
        ],
      },
      {
        name: "_1_",
        connections: [
          {
            name: "OAI21X1_1",
            pin: "C",
          },
          {
            name: "INVX1_1",
            pin: "Y",
          },
          {
            name: "3670",
            pin: "800",
          },
        ],
        routes: [
          {
            layer: "metal1",
            coords: [
              {
                x: 3670,
                y: 800,
              },
              {
                x: 3680,
                y: 800,
              },
              {
                x: 3840,
                y: 800,
              },
            ],
          },
        ],
      },
      {
        name: "_2_",
        connections: [
          {
            name: "AOI21X1_1",
            pin: "C",
          },
          {
            name: "OAI21X1_1",
            pin: "Y",
          },
          {
            name: "2560",
            pin: "1600",
          },
          {
            name: "2560",
            pin: "1600",
          },
          {
            name: "2560",
            pin: "1200",
          },
          {
            name: "2880",
            pin: "1200",
          },
          {
            name: "3360",
            pin: "1000",
          },
          {
            name: "3520",
            pin: "1000",
          },
          {
            name: "3360",
            pin: "1000",
          },
        ],
        routes: [
          {
            layer: "metal1",
            coords: [
              {
                x: 2560,
                y: 1600,
              },
            ],
            via: "M2_M1",
          },
          {
            layer: "metal2",
            coords: [
              {
                x: 2560,
                y: 1600,
              },
              {
                x: 2560,
                y: 1200,
              },
            ],
            via: "M3_M2",
          },
          {
            layer: "metal3",
            coords: [
              {
                x: 2560,
                y: 1200,
              },
              {
                x: 2880,
                y: 1200,
              },
            ],
            via: "M4_M3",
          },
          {
            layer: "metal4",
            coords: [
              {
                x: 2880,
                y: 1200,
              },
              {
                x: 3360,
                y: 1200,
              },
              {
                x: 3360,
                y: 1000,
              },
            ],
            via: "M4_M3",
          },
          {
            layer: "metal3",
            coords: [
              {
                x: 3360,
                y: 1000,
              },
              {
                x: 3520,
                y: 1000,
              },
            ],
            via: "M3_M2",
          },
          {
            layer: "metal2",
            coords: [
              {
                x: 3520,
                y: 1000,
              },
              {
                x: 3360,
                y: 1000,
              },
            ],
            via: "M2_M1",
          },
          {
            layer: "metal1",
            coords: [
              {
                x: 3360,
                y: 1000,
              },
              {
                x: 3450,
                y: 1000,
              },
            ],
          },
        ],
      },
      {
        name: "_0_<1>",
        connections: [
          {
            name: "DFFPOSX1_2",
            pin: "D",
          },
          {
            name: "AOI21X1_1",
            pin: "Y",
          },
          {
            name: "1920",
            pin: "1220",
          },
          {
            name: "1920",
            pin: "1200",
          },
          {
            name: "1920",
            pin: "1800",
          },
          {
            name: "2720",
            pin: "1800",
          },
        ],
        routes: [
          {
            layer: "metal1",
            coords: [
              {
                x: 1920,
                y: 1220,
              },
            ],
            via: "M2_M1",
          },
          {
            layer: "metal2",
            coords: [
              {
                x: 1920,
                y: 1200,
              },
              {
                x: 1920,
                y: 1800,
              },
            ],
            via: "M3_M2",
          },
          {
            layer: "metal3",
            coords: [
              {
                x: 1920,
                y: 1800,
              },
              {
                x: 2720,
                y: 1800,
              },
            ],
            via: "M3_M2",
          },
          {
            layer: "metal1",
            coords: [
              {
                x: 2720,
                y: 1800,
              },
            ],
            via: "M2_M1",
          },
        ],
      },
      {
        name: "_0_<0>",
        connections: [
          {
            name: "DFFPOSX1_1",
            pin: "D",
          },
          {
            name: "NOR2X1_1",
            pin: "Y",
          },
          {
            name: "4800",
            pin: "1220",
          },
          {
            name: "4800",
            pin: "1200",
          },
          {
            name: "4800",
            pin: "1400",
          },
          {
            name: "4320",
            pin: "1400",
          },
        ],
        routes: [
          {
            layer: "metal1",
            coords: [
              {
                x: 4800,
                y: 1220,
              },
            ],
            via: "M2_M1",
          },
          {
            layer: "metal2",
            coords: [
              {
                x: 4800,
                y: 1200,
              },
              {
                x: 4800,
                y: 1400,
              },
            ],
            via: "M3_M2",
          },
          {
            layer: "metal3",
            coords: [
              {
                x: 4800,
                y: 1400,
              },
              {
                x: 4320,
                y: 1400,
              },
            ],
            via: "M3_M2",
          },
          {
            layer: "metal1",
            coords: [
              {
                x: 4320,
                y: 1400,
              },
            ],
            via: "M2_M1",
          },
        ],
      },
      {
        name: "clk",
        connections: [
          {
            name: "PIN",
            pin: "clk",
          },
          {
            name: "DFFPOSX1_2",
            pin: "CLK",
          },
          {
            name: "DFFPOSX1_1",
            pin: "CLK",
          },
          {
            name: "2240",
            pin: "1400",
          },
          {
            name: "2240",
            pin: "1400",
          },
          {
            name: "2240",
            pin: "1600",
          },
          {
            name: "4480",
            pin: "1600",
          },
          {
            name: "4480",
            pin: "1400",
          },
          {
            name: "2080",
            pin: "2400",
          },
        ],
        routes: [
          {
            layer: "metal1",
            coords: [
              {
                x: 2240,
                y: 1400,
              },
            ],
            via: "M2_M1",
          },
          {
            layer: "metal2",
            coords: [
              {
                x: 2240,
                y: 1400,
              },
              {
                x: 2240,
                y: 1600,
              },
            ],
            via: "M3_M2",
          },
          {
            layer: "metal3",
            coords: [
              {
                x: 2240,
                y: 1600,
              },
              {
                x: 4480,
                y: 1600,
              },
            ],
            via: "M3_M2",
          },
          {
            layer: "metal2",
            coords: [
              {
                x: 4480,
                y: 1600,
              },
              {
                x: 4480,
                y: 1400,
              },
            ],
            via: "M2_M1",
          },
          {
            layer: "metal1",
            coords: [
              {
                x: 4480,
                y: 1400,
              },
              {
                x: 4640,
                y: 1400,
              },
              {
                x: 4650,
                y: 1400,
              },
            ],
          },
          {
            layer: "metal2",
            coords: [
              {
                x: 2080,
                y: 2400,
              },
              {
                x: 2240,
                y: 2400,
              },
              {
                x: 2240,
                y: 1600,
              },
            ],
          },
        ],
        CLOCK: true,
      },
    ],
  },
};
import $ from 'jquery'


if (process.client) {

  function PathArguments(...coords) {
    let args = [];

    this.clear = function () {
        args.length = 0;
    };

    this.addPoint = function (x, y) {
        args.push(args.length === 0 ? 'M' : 'L');
        args.push(x);
        args.push(',');
        args.push(y);
    };

    this.path = function(paper) {
        var ret = $(paper.path(this.toString()).node);
        this.clear();
        console.log('ret', ret)

        return ret;
    };

    this.toString = function () {
        return args.join("");
    };

    for (let i = 0; i < coords.length - 1; i += 2) {
        this.addPoint(coords[i], coords[i + 1]);
    } 
}

    const Raphael = require("raphael");
    defViewer.canvas = Raphael("canvas_container", 500, 500);

    var outer = 20;
    var inner = 10;

    // the Raphael canvas variable
    var paper = defViewer.canvas;
    paper.canvas.style.overflow = "inherit";
    // var zpd = new RaphaelZPD(paper, { zoom: true, pan: true, drag: false });
    var defData = defViewer.defData;
    var lefData = defViewer.lefData;
    // the width and height of the die
    var dieWidth = defData.die.x2 - defData.die.x1;
    var dieHeight = defData.die.y2 - defData.die.y1;
    // width and height scale
    var wS = 800 / dieWidth;
    var hS = wS;
    // scaling
    defData.die.x1 *= wS;
    defData.die.x2 *= wS;
    defData.die.y1 *= wS;
    defData.die.y2 *= wS;
    dieWidth *= wS;
    dieHeight *= wS;
    // scaling
    // Check out this sexy mathematical trick
    var xOff = 0 + Math.abs(defData.die.x1);
    var yOff = 0 * 0 + dieHeight + defData.die.y1;

    // let node = paper.rect(1, 1, dieWidth + ((outer + inner) * 2), dieHeight + ((outer + inner) * 2)).node;
    // node.classList.add('pdn', 'lmetal1');
    let node = paper.rect(1, 1, dieWidth + ((outer + inner) * 2), dieHeight + ((outer + inner) * 2)).node;
    node.classList.add('pdn', 'lmetal1'); 
    xOff += outer + 1;
    yOff += outer + 1;

    const rectangle = paper.rect(outer, outer, dieWidth + (inner * 2), dieHeight + (inner * 2)).node;
    rectangle.classList.add('pdn', 'lmetal2');
    xOff += inner;
    yOff += inner;

    const die = paper.rect(xOff + defData.die.x1, yOff - (dieHeight + defData.die.y1), dieWidth, dieHeight).node;
    die.classList.add('die');

    var pinTypes = {};
    var cellTypes = {};
    var netsTypes = {};

    defData.pins.forEach(function (pin, i) {
        // add the pins as well as one of the selectable types
        pinTypes[pin.layer] = void 0;

        // pins' data
        var px = xOff + (pin.x *= wS);
        var py = yOff - (pin.y *= hS);
        var pw = ((pin.x2 *= wS) - (pin.x1 *= wS)) * 100;
        var ph = ((pin.y2 *= hS) - (pin.y1 *= hS)) * 100;

        var node = paper.rect(px + pin.x1, py - pin.y1, pw, ph).node;
        // some classes to identify the pin
        node.classList.add(pin.layer);
        node.classList.add("pins");
        // if the pin is a clk, CLK, clock, or some other variation, we add it to the clock tree
        if (/clk|clock/i.test(pin.name)) {
        node.classList.toggle('clkTree') 
        };
        // attributes related to the popover. 
        node.setAttribute("type", "button"); 
        node.setAttribute("tabindex", "0");  
        node.setAttribute("data-toggle", "popover"); 
        node.setAttribute("data-trigger", "hover"); 
        node.setAttribute("data-content", pin.name); 
        node.setAttribute("data-content", "Layer: " + pin.layer + "<br/>Name: " + pin .name);   

        // on click, we want to toggle it to highlight  
        node .addEventListener('click', function() {
            node.classList.toggle('highlight ');           
        });    
        paper.text(xOff+4+pin.x , yOff-5 - pin.y , pin.name );
    });

     defData.cells.forEach(function () {
        var cells = defData.cells;
        var args = new PathArguments();
        console.log(args)
        netsTypes['lmetal1'] = void 0;
        netsTypes['lmetal2'] = void 0;

        return function (row, rowIndex) {
            row.forEach(function (cell, i) {
                // type and name of the cell
                var type = cell.type;
                var name = cell.name;

                // we keep track of the unique types this way
                cellTypes[type] = void 0;

                // coords of the cell
                var x = (cell.x *= wS);
                var y = (cell.y *= wS);
                var w = lefData.cells[type].w * wS;
                var h = lefData.cells[type].h * wS;

                var cellHeight = h * 100;
                var cellWidth = w * 100;

                var startX = xOff + x;
                var startY = yOff - (y + h * 100);
                // coords of the cell

                // get the jQuery node.
                const $node = paper.rect(startX, startY, cellWidth, cellHeight).node;


                // this is the top line (metal1), it is only displayed when
                // we have an even row number. (the outer connection).
                if (rowIndex % 2 === 0) {
                    if (i === 0) {
                        args.addPoint(0, startY);
                        args.addPoint(startX, startY);
                        args.path(paper).addClass('pdn lmetal1');
                    }
                    else if (i === row.length - 1) {
                        var endX = (xOff + defData.die.x1 + dieWidth);

                        args.addPoint((startX + cellWidth), startY);
                        args.addPoint((endX + inner + outer), startY);
                        args.path(paper).addClass('pdn lmetal1');
                    }
                }

                // if we are drawing the last row, we would like to add that extra bottom line
                // otherwise, we just display the top line for that row (the inner connection).
                if (rowIndex === (cells.length - 1) || rowIndex % 2 !== 0) {
                    var curY = startY + ((rowIndex === (cells.length - 1)) ? cellHeight : 0);

                    if (i === 0) {
                        args.addPoint(outer, curY);
                        args.addPoint(startX, curY);
                        args.path(paper).addClass('pdn lmetal2');
                    }
                    else if (i === row.length - 1) {
                        var endX = (xOff + defData.die.x1 + dieWidth);

                        args.addPoint(startX + cellWidth, curY);
                        args.addPoint(endX + inner, curY);
                        args.path(paper).addClass('pdn lmetal2');
                    }
                }

                // for each cell, we add its type as its class, so we can then
                // select it later easily. For example, if several cells have a type
                // of "INVX1", we can simply select all 1-input inverters with
                // a css selector like ".INVX1".

                $node.classList.add(type);
                $node.classList.add('cells');
                $node.setAttribute('type', 'button');
                $node.setAttribute('tabindex', '0')
                $node.setAttribute('data-toggle', 'popover');
                $node.setAttribute('data-trigger', 'hover');
                // $node.setAttribute('data-content', Type: ${type}<br/>Name: ${name}); 

                let isHighlighted = false; 
                $node.addEventListener('click', function () { 

                if (isHighlighted){ 
                    this.classList.remove("highlight"); 
                    isHighlighted = false; 

                } else { 

                    this.classList.add("highlight"); 
                    isHighlighted = true;  

                }  
                })
            });
        }
    }());

////////////////////////////////


   // // draw the nets
    defData.nets.forEach(function () {
        var args = new PathArguments();

        return function (net) {
            net.routes.forEach(function (route) {
                var layer = route.layer;
                netsTypes['l' + layer] = void 0;

                route.coords.forEach(function (coord) {
                    args.addPoint((xOff + coord.x * wS), (yOff - coord.y * hS));
                });

                // draw the lines
                args.path(paper)
                    .addClass("l" + layer)
                    .toggleClass('clkTree', !!net.CLOCK);
            });
        };
    }());

    // // for each array which contains the names of the pins and cells,
    // // we need to add them to the accordion. So we do that now.
    // (function handleAccordionData() {
    //     function addCheckboxesToAccordion(arr, containerName, colorType, fn) {
    //         var keys = Object
    //             .keys(arr)
    //             .sort();

    //         if (keys.length == 0) {
    //             $('#' + containerName).parents('.panel').addClass('hidden');
    //             return;
    //         }

    //         var names = keys;
    //         if (!colorType) colorType = 'fill';
    //         if (fn) names = names.map(fn);

    //         keys.forEach(function (key, index) {
    //             // we instantiate a new entry for each item, so when
    //             // they are hightlighted, they would have their own color.
    //             $.rule('.highlight.' + key + ' {}').appendTo("#customStyle");

    //             // we set the default color
    //             // var color = getDefaultColorFor(key);
    //             var color = rainbow(keys.length, index);

    //             // template for the following jQuery disaster
    //             //<div>
    //             //    <label><input type="checkbox" value="{key}"><span> {key}</span></label>
    //             //    <span class="picker" data-color="{color}" data-name="{key}">
    //             //        <span class="add-on"><i></i></span>
    //             //    </span>
    //             //</div>
    //             $("#types #" + containerName)
    //                 .append($("<div />")
    //                 .append(
    //                     // <label><input type="checkbox" value="{key}"></label>
    //                     $("<label />")
    //                     .append($('<input />', {
    //                         type: "checkbox",
    //                         value: key
    //                     })

    //                     // when the value of the checkbox changes, we want to highlight
    //                     // or unhighlight the appropriate cells.
    //                     .change(function () {
    //                         var $this = $(this);
    //                         $("." + $this.val()).toggleClass("highlight", $this.is(":checked"));
    //                     }))

    //                     // <span> {key}</span>
    //                     .append("<span> " + names[index] + "</span>")
    //                 )

    //                 //    <span class="picker" data-color="{color}" data-name="{key}">
    //                 //        <span class="add-on"><i></i></span>
    //                 //    </span>
    //                 .append(
    //                     $('<span class="picker" />')
    //                         .attr("data-color", color)
    //                         .attr("data-name", key)
    //                         .attr("data-ctype", colorType)
    //                         .append('<span class="add-on"><i></i></span>')
    //                 )
    //             );
    //         });
    //     }

    //     // We add the checkboxes in different accordions
    //     addCheckboxesToAccordion(cellTypes, "cellsContainer");
    //     addCheckboxesToAccordion(pinTypes, "pinsContainer");

    //     // the nets have different wire names than their class names.
    //     addCheckboxesToAccordion(netsTypes, "netsContainer", 'stroke', function (a) {
    //         return a.substring(1, a.length);
    //     });
    // })();

    // $('[data-toggle="popover"]').popover({
    //     container: "body",
    //     placement: "auto",
    //     html: true
    // });

    // instantiate the color pickers with their default values
    $('.picker').each(function (index, element) {
        var $this = $(this);

        $this
            .colorpicker()
            // event to change CSS on color change.
            .on("changeColor", function (e) {
                $.rule('.highlight.' + $this.data("name"), '#customStyle').css($this.data("ctype"), e.color);
            })
            // we set the default value of the colorpicker after creating it
            // to trigger the "changeColor" event. This sets the correct CSS
            // fill color, so we can succesfully highlight the items afterwards.
            .colorpicker('setValue', $this.data("color"));
    });

    // we register the event handler of the clear button
    $(document).on("click", "#clearBtn", function () {
        $('#types input[type="checkbox"]:checked').prop("checked", false);
        $("#canvas_container .hidden:not('.pdn')").toggleClass("hidden", false);
        $("#canvas_container .highlight").toggleClass("highlight", false);
    });

    $(document).on('click', "#clkTreeBtn", function () {
        var flag = false;

        return function () {
            flag = !flag;
            $(this).children('span').html(flag ? 'Hide' : 'Show');
            $('.clkTree').toggleClass('highlight', flag);
        };
    }());

    $(document).on('click', '#pdnBtn', function () {
        var flag = false;

        return function () {
            flag = !flag;
            $('.pdn').toggleClass('hidden', flag);
        };
    }());

    $('#clkTreeBtn').toggleClass('hidden', !$('.clkTree').length);
}

</script>

<template>
  <div id="mainContainer" class="m-10">
    <div class="container">
      <div id="canvas_container" class="col-md-10"></div>
      <!-- <div class="accordion-container">
        <AccordionComponent />
        <AccordionComponent />
        <AccordionComponent />
      </div> -->
     
    </div>
  </div>
</template>

<style>
.accordion-container {
  position: absolute;
  right: 3rem;
  top: 6rem;
}

#svg-canvas{
    overflow: inherit;
}






#types {
    float: right;
    position: relative;
    border: 1px dashed;
}

    #types div label span {
        vertical-align: text-bottom;
    }


#buttons {
    text-align: center;
    width: 100%;
    border: none;
}

.panel-title > a:hover {
    text-decoration: none;
}

.cells, .pins {
    fill: lightgray;
}

.picker {
    float: right;
}

.hidden {
    visibility: hidden;
}

.die {
    stroke-width: 1;
    stroke: blue;
    stroke-dasharray: 3,1;
}

.pdn {
    stroke-width: 2;
}

.modal {
    text-align: center;
    padding: 0 !important;
}

    

.modal-dialog {
    display: inline-block;
    text-align: left;
    vertical-align: middle;
}

.btn-file {
    position: relative;
    overflow: hidden;
}

    .btn-file input[type=file] {
        position: absolute;
        top: 0;
        right: 0;
        min-width: 100%;
        min-height: 100%;
        font-size: 100px;
        text-align: right;

        /*
        filter: alpha(opacity=0);
        */

        opacity: 0;
        outline: none;
        background: white;
        cursor: inherit;
        display: block;
    }



</style>
