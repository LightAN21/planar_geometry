function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect(), // abs. size of element
      scaleX = canvas.width / rect.width,    // relationship bitmap vs. element for X
      scaleY = canvas.height / rect.height;  // relationship bitmap vs. element for Y

  return {
    x: (evt.clientX - rect.left) * scaleX,   // scale mouse coordinates after they have
    y: (evt.clientY - rect.top) * scaleY     // been adjusted to be relative to element
  }
}

function mouse_pos(obj, mouseEvent){
  var obj_left = 0, obj_top = 0;
  var s = {}, e = mouseEvent;

  while (obj.offsetParent)
  {
      obj_left += obj.offsetLeft;
      obj_top += obj.offsetTop;
      obj = obj.offsetParent;
  }
  //          Firefox : IE
  s.x = (e) ? e.pageX : window.event.x + document.body.scrollLeft - 2;
  s.y = (e) ? e.pageY : window.event.y + document.body.scrollTop - 2;
  s.x -= obj_left;
  s.y -= obj_top;
  return s;
}