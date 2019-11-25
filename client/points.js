

function draw_point(ctx, x, y, 
    color = setting.point_color,
    border_color = setting.point_border_color) {
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.arc(x, y, setting.point_radius, 0, 2 * Math.PI, 0);
    ctx.fill();
    ctx.lineWidth = setting.point_lineWidth;
    ctx.strokeStyle = border_color;
    ctx.stroke();
}

function clear_point(ctx, x, y, len = setting.clear_point_square_width) {
    ctx.clearRect(x - len, y - len, 2 * len, 2 * len);
}

function point_mouse_move(pos) {

}

function point_mouse_down(pos) {

}

function point_mouse_down_move(pos) {

}

function point_mouse_up(pos) {
    
}
