export default function sketch(processing) {
  let rainbow = false
  let fullscreen = false
  let c1 = 0
  let c2 = 0
  let c3 = 0

  processing.setup = function () {
    processing.createCanvas(855, 700)
    processing.background(0)
  }

  processing.myCustomRedrawAccordingToNewPropsHandler = function (props) {
    rainbow = props.rainbow
    fullscreen = props.fullscreen
  }

  function variableEllipse(x, y, px, py) {
    var speed = processing.abs(x-px) + processing.abs(y-py)
    if(!rainbow) {
      processing.stroke(speed)
    }

    processing.ellipse(x, y, speed, speed)
  }

  processing.mouseClicked = function() {
    if(fullscreen) {
      processing.resizeCanvas(processing.windowWidth, processing.windowHeight)
    }
  }

  processing.mouseMoved = function() {
    if(rainbow) {
      processing.fill(c1,c2,c3)

      if(c1 === 0 && c2 === 0 && c3 === 0) {
        c1 = c1+2
      }

      if( c1 <= 254 && c1 > 0 && c2 === 0 && c3 === 0) {
        c1 = c1+2
      }

      if(c1 === 254 && c2 === 0 && c3 === 0) {
        c1= 0
        c2= 2
        c3=0
      }

      if( c1 === 0 && c2 <= 254 && c2 > 0 && c3 === 0) {
        c1=0
        c2=c2+2
        c3=0
      }

      if( c1 === 0 && c2 === 254 && c3 === 0) {
        c1=0
        c2=0
        c3=c3+2
      }

      if (c1 === 0 && c2 === 0 && c3 <= 254 && c3 > 0) {
        c1=0
        c2=0
        c3=c3+2
      }

      if(c1 === 0 && c2 === 0 && c3 === 254) {
       c3=0
       c1=c1+2
       c2=c1
      }

      if (c1 <= 254 && c1 > 0 && c2 <= 254 && c2 > 0 && c3 === 0) {
       c1=c1+2
       c2=c1
       c3=0
      }

      if(c1 === 254 && c2 === 254 && c3 === 0) {
        c1=0
        c2=0
        c3 = c3+2
        c1 = c3
      }

      if(c1 <= 254 && c1 > 0 && c2 === 0 && c3 <= 254 && c3 > 0) {
        c1=c1+2
        c2=0
        c3=c1
      }

      if(c1 === 254 && c2 === 0 && c3 === 254) {
        c1=0
        c3=0
        c3 = c3+2
        c2 = c3
      }

      if(c1 === 0 && c2 <= 254 && c2 > 0 && c3 <= 254 && c3 > 0) {
        c1=0
        c2=c2+2
        c3=c2
      }

      if(c1 === 0 && c2 === 254 && c3 === 254) {
        c2=0
        c3=0
        c1=c1+2
        c2=c1
        c3=c1
      }

      if(c1 <= 254 && c1 > 0 && c2 <= 254 && c2 > 0 && c3 <= 254 && c3 > 0) {
        c1=c1+2
        c2=c1
        c3=c1
      }

      if(c1 === 254 && c2 === 254 && c3 === 254) {
        c1=0
        c2=0
        c3=0
      }
    }
  }

  processing.draw = function () {
    variableEllipse(processing.mouseX, processing.mouseY, processing.pmouseX, processing.pmouseY)
  }
}
