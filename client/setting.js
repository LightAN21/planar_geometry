var setting = {
    canvas_box_background_color: "#424242",
    canvas_width: 500,
    canvas_height: 500,
    point_radius: 8,
    point_lineWidth: 2,
    clear_point_square_width: 10,
    point_color: "#CCCCCC",
    point_border_color: '#000000',
    mouse_on_point_color: "#3498DB",
    mouse_click_point_color: "#F5B041",
};

function reset() {
    canvas_div.style.width = setting.canvas_width + 'px';
    canvas_div.style.height = setting.canvas_height + 'px';
    canvas_div.style.backgroundColor = setting.canvas_box_background_color;
    canvas_box.width = setting.canvas_width;
    canvas_box.height = setting.canvas_height;
    curr_tool = 'select';
}
