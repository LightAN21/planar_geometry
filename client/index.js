var canvas_div;
var canvas_box;
var canvas;
var curr_tool = 'select';
var layer = [0];
var mouse_down = 0;
var curr_detected_obj = 0;

console.log('Planar Geometry');

$(document).ready(function () {
    canvas_div = document.getElementById('canvas_div');
    canvas_box = document.getElementById('main_canvas');
    canvas = canvas_box.getContext("2d");

    canvas_div.style.width = '500px';
    canvas_div.style.height = '500px';
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
    canvas_div.onmousemove = objects_in_canvas;
});

function draw_on_canvas(event) {
    var pos = mouse_pos(canvas_div, event);

    console.log('mouse down: (' + pos.x + ', ' + pos.y + ')');
    if (curr_tool == 'point') {
        var new_canvas_box = add_new_point_layer(layer.length);
        var new_canvas = new_canvas_box.getContext("2d")
        canvas_div.appendChild(new_canvas_box);
        layer.push({
            type: 'point',
            canvas_box: new_canvas_box,
            canvas: new_canvas,
            x: pos.x,
            y: pos.y,
            layer: layer.length,
        });
        draw_point(new_canvas, pos.x, pos.y);
    }
}


function add_new_point_layer(layer_num) {
    var new_canvas = document.createElement('canvas');

    new_canvas.id = 'layer' + layer.length;
    new_canvas.width = setting.canvas_width;
    new_canvas.height = setting.canvas_height;
    new_canvas.style = 'position: absolute; z-index: ' + layer_num;
    return new_canvas;
}

function draw_point(ctx, x, y, color = setting.point_color) {
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.arc(x, y, setting.point_radius, 0, 2 * Math.PI, 0);
    ctx.fill();
    ctx.lineWidth = setting.point_lineWidth;
    ctx.strokeStyle = setting.point_border_color;
    ctx.stroke();
}

function clear_point(ctx, x, y) {
    var len = setting.clear_point_square_width;
    ctx.clearRect(x - len, y - len, 2 * len, 2 * len);
}

function objects_in_canvas(event) {
    var pos = mouse_pos(canvas_div, event);

    if (mouse_down == 0) {
        var top_index = 0;
        if (document.getElementById('layer1') == undefined)
            return;
        for (var i = 1; i < layer.length; i++) {
            var imgData = layer[i].canvas.getImageData(pos.x, pos.y, 1, 1).data;
            if (imgData[0] != 0)
                top_index = i;
        }
        var obj = curr_detected_obj;
        if (obj) {
            if (obj.type == 'point') {
                clear_point(obj.canvas, obj.x, obj.y);
                draw_point(obj.canvas, obj.x, obj.y);
            }
            curr_detected_pbj = 0;
        }
        if (top_index && layer[top_index].type == 'point') {

            var pt = layer[top_index];
            clear_point(pt.canvas, pt.x, pt.y);
            draw_point(pt.canvas, pt.x, pt.y, setting.mouse_on_point_color);
            curr_detected_obj = pt;
        }
    }
}