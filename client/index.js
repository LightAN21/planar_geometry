var canvas_div;
var canvas_box;
var canvas;
var curr_tool = 'select';
var point = [0];

console.log('Planar Geometry');

$(document).ready(function () {
    canvas_div = document.getElementById('canvas_div');
    canvas_box = document.getElementById('main_canvas');
    canvas = canvas_box.getContext("2d");

    canvas_div.style.width = '1000px';
    canvas_div.style.height = '1000px';
    canvas_div.style.backgroundColor = "#424242";
    canvas_box.width = 500;
    canvas_box.height = 500;
    canvas_box.style = 'position: absolute; z-index: 0';

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

    canvas_div.onmousedown = draw_on_canvas;
});

function draw_on_canvas(event) {
    var pos = mouse_pos(canvas_div, event);

    console.log('mouse down: (' + pos.x + ', ' + pos.y + ')');
    if (curr_tool == 'point') {
        // canvas.beginPath();
        // canvas.fillStyle = "#CCCCCC";
        // canvas.arc(pos.x, pos.y, setting.point_radius, 0, 2 * Math.PI, 0);
        // canvas.fill();
        // canvas.lineWidth = setting.point_lineWidth;
        // canvas.strokeStyle = '#000000';
        // canvas.stroke();
        var new_canvas = add_new_point_layer(point.length);
        canvas_div.appendChild(new_canvas);
        point.push({
            canvas: new_canvas.getContext("2d"),
            x: pos.x,
            y: pos.y,
            layer: point.length,
        });
        draw_point(pos.x, pos.y, new_canvas.getContext("2d"));
    }
}


function add_new_point_layer(layer_num) {
    var new_canvas = document.createElement('canvas');

    new_canvas.id = 'point' + point.length;
    new_canvas.width = setting.canvas_width;
    new_canvas.height = setting.canvas_height;
    new_canvas.style = 'position: absolute; z-index: ' + layer_num;
    return new_canvas;
}

function draw_point(x, y, c) {
    c.beginPath();
    c.fillStyle = "#CCCCCC";
    c.arc(x, y, setting.point_radius, 0, 2 * Math.PI, 0);
    c.fill();
    c.lineWidth = setting.point_lineWidth;
    c.strokeStyle = '#000000';
    c.stroke();
}