import Vector2D from './grid/vector_2d';
import ForceGrid from './grid/force_grid';
import Mass from './grid/mass';
import Spring from './grid/spring';

function init() {
    const frameRate = 1;
    const millisBetweenUpdate = 1000 / frameRate;

    //canvas.addEventListener("mousemove", mouseMove, false);
    //canvas.addEventListener("mousedown", mouseDown, true);
    //canvas.addEventListener("mouseup", mouseUp, false);
    setInterval(update, millisBetweenUpdate);

    context = canvas.getContext("2d");
}

function hasCanvasChanged() {
    return canvas.width !== prevCanvasWidth || canvas.height !== prevCanvasHeight;
}

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    if (hasCanvasChanged()) {
        forceGrid = new ForceGrid(canvas.width, canvas.height, 10);
    }
}

function update() {
    context.clearRect(0, 0, window.innerWidth, window.innerHeight);

    resize();

    if (forceGrid !== undefined) {
        forceGrid.update();
        forceGrid.draw(context);
    }

    prevCanvasWidth = canvas.width;
    prevCanvasHeight = canvas.height;
}

var canvas = document.getElementById('canvas');
var context;
var forceGrid;
var canvasWidth = 0;
var canvasHeight = 0;
var prevCanvasWidth = 0;
var prevCanvasHeight = 0;

if (canvas && canvas.getContext) {
    init();
}
