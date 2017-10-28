import Vector2D from './grid/vector_2d';
import ForceGrid from './grid/force_grid';
import Mass from './grid/mass';
import Spring from './grid/spring';

function init() {
    const frameRate = 60;
    const millisBetweenUpdate = 1000 / frameRate;

    //canvas.addEventListener("mousemove", mouseMove, false);
    //canvas.addEventListener("mousedown", mouseDown, true);
    //canvas.addEventListener("mouseup", mouseUp, false);
    setInterval(update, millisBetweenUpdate);
    resize();

    context = canvas.getContext("2d");
}

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

function update() {
    context.clearRect(0, 0, window.innerWidth, window.innerHeight);
    resize();
    forceGrid.update();
    forceGrid.draw(context);
}
var forceGrid = new ForceGrid(100, 500, 10);

var canvas = document.getElementById('canvas');
var context;

if (canvas && canvas.getContext) {
    init();
}
