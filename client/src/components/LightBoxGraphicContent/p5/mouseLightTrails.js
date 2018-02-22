export default function sketch(processing) {
  let fullscreen = false
  let tracing = false
  let fourTrails = false
  let num = (fullscreen ? 120 : 60)
  let width = 855
  let height = 700
  let mx = [num]
  let my = [num]
  let currentFrame = 0
  let lastTime = 0
  let frames = []
  let framesMaxLength = ((num / 6) - 1)


  processing.setup = function () {
    processing.createCanvas(width, height)
    processing.background(0)
    processing.fill(255, 153)
  }

  processing.myCustomRedrawAccordingToNewPropsHandler = function (props) {
    tracing = props.tracing
    fourTrails = props.fourTrails
    fullscreen = props.fullscreen

    if(tracing) {
      for(var i = 0; i < framesMaxLength; i++) {
        frames[i] = processing.get() // Create a blank frame
      }
    }
  }

  processing.draw = function() {
    for(var i=1; i<num; i++) {
      mx[i-1] = mx[i] || 0
      my[i-1] = my[i] || 0
    }

    if(tracing) {
      var currentTime = processing.millis()
      if (currentTime > lastTime+100) {
        nextFrame()
        lastTime = currentTime
      }
    } else {
      processing.background(0)
    }
    // Add the new values to the end of the array

    if(tracing) {
      if(processing.mouseIsPressed === true) {
        traceMouseAndDrawEllipse(mx, my)
      }
      if(processing.keyIsPressed === true) {
        processing.background(0)
        for(var i2 = 0; i2 < framesMaxLength; i2++) {
          frames[i2] = processing.get() // Create a blank frame
        }
      }
    } else {
      traceMouseAndDrawEllipse(mx, my)
    }
  }



  function nextFrame() {
    frames[currentFrame] = processing.get() // Get the display window
    currentFrame++ // Increment to next frame

    if (currentFrame >= framesMaxLength) {
      currentFrame = 0
    }

    processing.image(frames[currentFrame], 0, 0)
  }



  function traceMouseAndDrawEllipse(mx, my) {
    mx[num-1] = processing.mouseX || 0
    my[num-1] = processing.mouseY || 0

    for(var i=0; i<num; i++) {
      processing.ellipse(mx[i], my[i], i/2, i/2)
      processing.ellipse(width-mx[i], height-my[i], i/2, i/2)

      if(fourTrails) {
        processing.ellipse(mx[i], height-my[i], i/2, i/2)
        processing.ellipse(width-mx[i], my[i], i/2, i/2)
      }
    }
  }
}
