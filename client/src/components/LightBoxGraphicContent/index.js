import React, { Component } from 'react'
import './style.css'
import Script from 'react-load-script'
import P5Wrapper from 'react-p5-wrapper'
import AuthedContentFooter from '../../containers/AuthedContentFooter'

import { Markdown } from 'react-showdown'

class LightBoxGraphicContent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      scriptLoaded: false,
      paramZero: false,
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

  renderButtonIcon(item) {
    if(item === "fullscreen") {
      return (<i className="icon-window"></i>)
    } else {
      return (<i className="icon-cog"></i>)
    }
  }

  renderGraphicBinding(library, scriptContent) {
    var { width, height, paramZero, paramOne, paramTwo, paramThree, paramFour, paramFive, paramSix } = this.state
    switch (library) {
      case "scenejs":
        return (<canvas height="700" id="theCanvas" width="855" tabIndex="0" style={{ imageRendering: "-webkit-optimize-contrast !important"}}></canvas>)
      case "processing":
        let sketch = this.parsedSketch(scriptContent)
        return (<P5Wrapper width={width} height={height} sketch={sketch} paramZero={paramZero} paramOne={paramOne} paramTwo={paramTwo} paramThree={paramThree} paramFour={paramFour} paramFive={paramFive} paramSix={paramSix} />)
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
          {this.renderButtonIcon(param[1])}
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
    var props = this.props
    return (
      <article className="webgl-display">
        {this.props.library === "scenejs" &&
          <Script
            url={this.buildUrl()}
            onCreate={this.handleScriptCreate.bind(this)}
            onError={this.handleScriptError.bind(this)}
            onLoad={this.handleScriptLoad.bind(this)}
          />
        }
        <h1 className="section-heading larger">{props.title}</h1>
        {this.renderGraphicBinding(props.library, props.script_content)}
        <Markdown markup={ props.content_description } />
        {this.state.scriptLoaded &&
          <script type="text/javascript" dangerouslySetInnerHTML={{ __html: props.script_content }} />
        }
        {this.renderParamsButtons(this.props.extra_params)}
        <AuthedContentFooter location={props.location} />
      </article>
    )
  }
}

export default LightBoxGraphicContent
