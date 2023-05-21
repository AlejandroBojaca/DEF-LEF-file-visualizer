<script setup>
  import $ from 'jquery'
  import { computed, onMounted } from 'vue'
  import { storeToRefs } from 'pinia';
  import { useMainStore } from '~/store/store'

  const mainStore = useMainStore();
  const { defLefFiles } = storeToRefs(mainStore); 
  const defViewer = computed(() => JSON.parse(JSON.stringify(defLefFiles.value))).value;

  if (process.client && defViewer?.defData && defViewer?.lefData !== null) {
    const Raphael = require("raphael");
    
    class PathArguments {
      constructor(...coords) {
        const args = [];

        this.clear = function () {
        args.length = 0;
        };

        this.addPoint = function (x, y) {
          args.push(args.length === 0 ? 'M' : 'L');
          args.push(x);
          args.push(',');
          args.push(y);
        };

        this.path = function (paper) {
          const ret = $(paper.path(this.toString()).node);
          this.clear();

          return ret;
        };

        this.toString = function () {
          return args.join("");
        };

        for (let i = 0; i < coords.length - 1; i += 2) {
          this.addPoint(coords[i], coords[i + 1]);
        }
      }
    }

    onMounted(() => {
      defViewer.canvas = Raphael("canvas_container", 500, 500);
      const outer = 20;
      const inner = 10;

      const paper = defViewer.canvas;
      paper.canvas.style.overflow = "inherit";

      const defData = defViewer.defData;
      const lefData = defViewer.lefData;

      let dieWidth = defData.die.x2 - defData.die.x1;
      let dieHeight = defData.die.y2 - defData.die.y1;

      const wS = 800 / dieWidth;
      const hS = wS;

      defData.die.x1 *= wS;
      defData.die.x2 *= wS;
      defData.die.y1 *= wS;
      defData.die.y2 *= wS;

      dieWidth *= wS;
      dieHeight *= wS;

      let xOff = 0 + Math.abs(defData.die.x1);
      let yOff = 0 * 0 + dieHeight + defData.die.y1;

      const node = paper.rect(1, 1, dieWidth + ((outer + inner) * 2), dieHeight + ((outer + inner) * 2)).node;

      node.classList.add('pdn', 'lmetal1'); 
      xOff += outer + 1;
      yOff += outer + 1;

      const rectangle = paper.rect(outer, outer, dieWidth + (inner * 2), dieHeight + (inner * 2)).node;
      rectangle.classList.add('pdn', 'lmetal2');
      xOff += inner;
      yOff += inner;

      const die = paper.rect(xOff + defData.die.x1, yOff - (dieHeight + defData.die.y1), dieWidth, dieHeight).node;
      die.classList.add('die');

      const pinTypes = {};
      const cellTypes = {};
      const netsTypes = {};

      defData.pins.forEach(function (pin, i) {          
        pinTypes[pin.layer] = void 0;
        
        const px = xOff + (pin.x *= wS);
        const py = yOff - (pin.y *= hS);
        const pw = ((pin.x2 *= wS) - (pin.x1 *= wS)) * 100;
        const ph = ((pin.y2 *= hS) - (pin.y1 *= hS)) * 100;

        const node = paper.rect(px + pin.x1, py - pin.y1, pw, ph).node;
        node.classList.add(pin.layer);
        node.classList.add("pins");
        if (/clk|clock/i.test(pin.name)) {
            node.classList.toggle('clkTree') 
        };
        node.setAttribute("type", "button"); 
        node.setAttribute("tabindex", "0");  
        node.setAttribute("data-toggle", "popover"); 
        node.setAttribute("data-trigger", "hover"); 
        node.setAttribute("data-content", pin.name); 
        node.setAttribute("data-content", "Layer: " + pin.layer + "<br/>Name: " + pin.name);   

        node.addEventListener('click', function() {
            node.classList.toggle('highlight2');           
        });    
        paper.text(xOff+4+pin.x , yOff-5 - pin.y , pin.name );
      });

      defData.cells.forEach(function () {
        const cells = defData.cells;
        const args = new PathArguments();
        netsTypes.lmetal1 = void 0;
        netsTypes.lmetal2 = void 0;

        return function (row, rowIndex) {
          row.forEach(function (cell, i) {
              const type = cell.type;
              const name = cell.name;

              cellTypes[type] = void 0;

              const x = (cell.x *= wS);
              const y = (cell.y *= wS);
              const w = lefData.cells[type].w * wS;
              const h = lefData.cells[type].h * wS;

              const cellHeight = h * 100;
              const cellWidth = w * 100;

              const startX = xOff + x;
              const startY = yOff - (y + h * 100);

              const $node = paper.rect(startX, startY, cellWidth, cellHeight).node;

              if (rowIndex % 2 === 0) {
                  if (i === 0) {
                      args.addPoint(0, startY);
                      args.addPoint(startX, startY);
                      args.path(paper).addClass('pdn lmetal1');
                  }
                  else if (i === row.length - 1) {
                      const endX = (xOff + defData.die.x1 + dieWidth);

                      args.addPoint((startX + cellWidth), startY);
                      args.addPoint((endX + inner + outer), startY);
                      args.path(paper).addClass('pdn lmetal1');
                  }
              }

              if (rowIndex === (cells.length - 1) || rowIndex % 2 !== 0) {
                  const curY = startY + ((rowIndex === (cells.length - 1)) ? cellHeight : 0);

                  if (i === 0) {
                      args.addPoint(outer, curY);
                      args.addPoint(startX, curY);
                      args.path(paper).addClass('pdn lmetal2');
                  }
                  else if (i === row.length - 1) {
                      const endX = (xOff + defData.die.x1 + dieWidth);

                      args.addPoint(startX + cellWidth, curY);
                      args.addPoint(endX + inner, curY);
                      args.path(paper).addClass('pdn lmetal2');
                  }
              }

              $node.classList.add(type);
              $node.classList.add('cells');
              $node.setAttribute('type', 'button');
              $node.setAttribute('tabindex', '0');
              $node.setAttribute('data-toggle', 'popover');
              $node.setAttribute('data-trigger', 'hover');
              $node.setAttribute("data-content", cell.name); 
              $node.setAttribute("data-content", "Type: " + cell.type + "<br/>Name: " + cell.name);

              let isHighlighted = false; 
              $node.addEventListener('click', function () { 

                  if (isHighlighted){ 
                      this.classList.remove("highlight"); 
                      isHighlighted = false; 
                  } else { 
                      this.classList.add("highlight"); 
                      isHighlighted = true;  
                  }  
              });
          });
        };
      }());

      defData.nets.forEach(function () {
        const args = new PathArguments();

        return function (net) {
            net.routes.forEach(function (route) {
                const layer = route.layer;
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

      $('[data-toggle="popover"]').popover({
        container: "body",
        placement: "auto",
        html: true
      });
  });
}
</script>


<template>
  <div id="mainContainer" class="m-10 main-container">
    <h1 class="text-xl font-bold px-10 my-10">
    CANVAS {{defViewer.defData.cellName[0]}}
    </h1>
    <div class="container">
      <div id="canvas_container" class="col-md-10"></div>
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

  .container {
      margin-left: 15vw;
  }

  .main-container {
    height: 125vh;
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

  .lmetal1 {
      stroke-width: 1;
      stroke: transparent;
  }

  .lmetal2 {
      stroke-width: 1;
      stroke: darkgreen;
      stroke-dasharray: 4;
  }

  .lmetal3 {
      stroke-width: 1;
      stroke: orangered;
  }

  .lmetal4 {
      stroke-width: 1;
      stroke: darkblue;
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

  .highlight {
    fill: antiquewhite;
  }

  .highlight2 {
    fill: aquamarine;
  }
</style>
