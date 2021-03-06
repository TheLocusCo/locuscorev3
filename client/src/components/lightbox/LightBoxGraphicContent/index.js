import React, { Component } from 'react'
import P5Wrapper from 'react-p5-wrapper'

import SolarSystem from 'components/SolarSystem'
import AuthedContentFooter from 'containers/AuthedContentFooter'

import { Markdown } from 'react-showdown'

class LightBoxGraphicContent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      scriptLoaded: false,
      fullscreen: false,
      paramOne: false,
      paramTwo: false,
      paramThree: false,
      paramFour: false,
      paramFive: false,
      paramSix: false,
      width: "855",
      height: "700"
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.fullscreen !== this.props.fullscreen) {
      if(nextProps.fullscreen) {
        this.setState({width: (window.innerWidth * 0.9), height: (window.innerHeight * 0.86), fullscreen: true})
      } else {
        this.setState({width: "855", height: "700", fullscreen: false})
      }
    }
  }

  buildUrl() {
    switch (this.props.library) {
      case "scenejs":
        return (process.env.PUBLIC_URL + "/scripts/scenejs.min.js")
      default:
        return null
    }
  }

  parseScriptContent(content) {
    return (<script type="text/javascript" dangerouslySetInnerHTML={{ __html: content }} />)
  }

  handleScriptCreate() {
    this.setState({ scriptLoaded: false })
  }

  handleScriptError() {
    this.setState({ scriptError: true })
  }

  handleScriptLoad() {
    this.setState({ scriptLoaded: true })
  }

  renderGraphicBinding(library, scriptContent, title) {
    var { width, height, fullscreen, paramOne, paramTwo, paramThree, paramFour, paramFive, paramSix } = this.state
    switch (library) {
      case "scenejs":
        switch (title) {
          case "Solar System":
            let fixedWidth = window.innerWidth * 0.9
            let fixedHeight = window.innerHeight * 0.86
            return(<SolarSystem width={fixedWidth} height={fixedHeight}/>)
          default:
            return null
        }
      case "processing":
        let sketch = this.parsedSketch(scriptContent)
        return (<P5Wrapper width={width} height={height} sketch={sketch} fullscreen={fullscreen} paramOne={paramOne} paramTwo={paramTwo} paramThree={paramThree} paramFour={paramFour} paramFive={paramFive} paramSix={paramSix} />)
      default:
        return null
    }
  }

  parsedSketch(scriptContent) {
    return Function("processing", scriptContent)
  }

  renderParamsButtons(params) {
    let count = 0
    return Object.entries(params).map(param => {
      count++
      return(
        <div className="button" onClick={(e) => this.toggleParam(param[0], e)} key={count}>
          <i className="icon-cog"></i>
          {param[1].charAt(0).toUpperCase() + param[1].slice(1).replace(/_/gi, ' ')}
        </div>
      )
    })
  }

  toggleParam(param, e) {
    let miniState = {}
    if(this.state[param]) {
      miniState[param] = false
      this.setState(miniState)
    } else {
      miniState[param] = true
      this.setState(miniState)
    }
  }

  render() {
    const { title, library, script_content, content_description, extra_params, location } = this.props
    return (
      <article className='portfolio-item' style={{textAlign: 'center'}}>
        <h1 className="section-heading larger">{title}</h1>
        {this.renderGraphicBinding(library, script_content, title)}
        <Markdown markup={ content_description } />
        {this.renderParamsButtons(extra_params)}
        <AuthedContentFooter location={location} />
      </article>
    )
  }
}

export default LightBoxGraphicContent
