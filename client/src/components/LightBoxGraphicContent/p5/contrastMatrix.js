export default function sketch(processing) {
  let max_distance = 0
  let fullscreen = false
  let width = 855
  let height = 700

  processing.setup = function () {
    processing.createCanvas(width, height)
    processing.background(0)
  }

  processing.myCustomRedrawAccordingToNewPropsHandler = function (props) {
    fullscreen = props.fullscreen
  }

  processing.draw = function() {
    processing.background(255)
    max_distance = processing.dist(0, 0, processing.width, processing.height)
    for(var i = 0; i <= processing.width; i += ((fullscreen) ? 20: (processing.width/10)) ) {
      for(var j = 0; j <= processing.width; j += ((fullscreen) ? 20 : (processing.width/10)) ) {
        var size = processing.dist(processing.mouseX, processing.mouseY, i, j)
        size = size/max_distance * ((fullscreen) ? 66 : (processing.width/3))
        processing.fill(0)
        processing.ellipse(i, j, size, size);
      }
    }
  }
}
