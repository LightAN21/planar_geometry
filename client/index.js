console.log('Planar Geometry');

var setting = {
    canvas_background_color: '#424242',
    canvas_width: 900,
    canvas_height: 900,
    point_radius: 5,
    point_lineWidth: 1,
};

var curr_tool = 'select';

var canvas_div;
var canvas_box;
var canvas;

$(document).ready(function () {
    canvas_div = document.getElementById('canvas_div');
    canvas_box = document.getElementById('main_canvas');
    canvas = canvas_box.getContext("2d");

    canvas_div.style.width = '1000px';
    canvas_div.style.height = '1000px';
    canvas_div.style.backgroundColor = "#424242";
    canvas_box.width = 1000;
    canvas_box.height = 1000;
    canvas_box.onmousedown = draw;
    canvas.fillStyle = "#222222";
    canvas.fillRect(0, 0, 1000, 1000);

    $('#select').click(() => {
        curr_tool = 'select';
    });
    $('#point').click(() => {
        curr_tool = 'point';
    });
    $('#line').click(() => {
        curr_tool = 'line';
    });
    $('#circle').click(() => {
        curr_tool = 'circle';
    });
});

function setting() {
    canvas_div.style.width = setting.canvas_width + 'px';
    canvas_div.style.height = setting.canvas_height + 'px';
    canvas_div.style.backgroundColor = setting.canvas_background_color;
    canvas_box.width = setting.canvas_width;
    canvas_box.height = setting.canvas_height;

    curr_tool = 'select';
}

function draw(evt) {
    var pos = getMousePos(canvas_box, evt);

    if (curr_tool == 'point') {
        canvas.beginPath();
        canvas.fillStyle = "#CCCCCC";
        canvas.arc(pos.x, pos.y, setting.point_radius, 0, 2 * Math.PI, 0);
        canvas.fill();
        canvas.lineWidth = setting.point_lineWidth;
        canvas.strokeStyle = '#000000';
        canvas.stroke();
    }
}