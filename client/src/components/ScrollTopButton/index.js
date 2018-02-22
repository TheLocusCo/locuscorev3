import React, { Component } from 'react'
import './style.css'
//import ReactDOM from 'react-dom';

class ScrollTopButton extends Component {
  constructor(props) {
    super(props)
    this.state = {
      intervalId: 0
    }
  }

  scrollStep() {
    if (window.pageYOffset === 0) {
      clearInterval(this.state.intervalId)
    }
    console.log("IN SCROLL STEP " + window.pageYOffset + " : " + this.props.scrollStepInPx)
    //var rect = ReactDOM.findDOMNode(this).getBoundingClientRect()
    //console.log("RECT::" + JSON.stringify(rect))
    window.scroll(0, -1000)
  }

  scrollToTop() {
    let intervalId = setInterval(this.scrollStep.bind(this), this.props.delayInMs)
    this.setState({ intervalId: intervalId })
  }

  render () {
    return (
      <button title='Back to top' className='button' onClick={ () => { this.scrollToTop(); }}>
        <i className="icon-up-thin" />
        Top
      </button>
    )
  }
}

// This doesn't work because the app is preventing scrolls in lightboxes
//          <ScrollTopButton scrollStepInPx="50" delayInMs="16.66"/>
export default ScrollTopButton
