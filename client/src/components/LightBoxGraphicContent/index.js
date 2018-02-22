import React, { Component } from 'react'
import './style.css'
import Script from 'react-load-script'
import P5Wrapper from 'react-p5-wrapper'
import JsxParser from 'react-jsx-parser'
import mouseDrawingSpheres from './p5/mouseDrawingSpheres'
import mouseLightTrails from './p5/mouseLightTrails'
import contrastMatrix from './p5/contrastMatrix'
import AuthedContentFooter from '../../containers/AuthedContentFooter'

class LightBoxGraphicContent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      scriptLoaded: false,
      rainbow: false,
      fullscreen: false,
      fourTrails: false,
      tracing: false,
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

  parseScriptContent(fileName) {
    return (<JsxParser component={fileName} />)
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

  renderGraphicBinding() {
    var { width, height, fullscreen, fourTrails, tracing, rainbow } = this.state
    switch (this.props.library) {
      case "scenejs":
        return (<canvas height="700" id="theCanvas" width="855" tabIndex="0" style={{ imageRendering: "-webkit-optimize-contrast !important"}}></canvas>)
      case "processing":
        switch (this.props.load_from_file) {
          case "mouseDrawingSpheres":
            return (<P5Wrapper width={width} height={height} sketch={mouseDrawingSpheres} fullscreen={fullscreen} rainbow={rainbow} />)
          case "mouseLightTrails":
            return (<P5Wrapper width={width} height={height} sketch={mouseLightTrails} fullscreen={fullscreen} tracing={tracing} fourTrails={fourTrails} />)
          case "contrastMatrix":
            return (<P5Wrapper width={width} height={height} sketch={contrastMatrix} fullscreen={fullscreen} />)
          default:
            return null
        }
      default:
        return null
    }
  }

  renderParamsButtons(params) {
    var processingParams = []//["Fullscreen"]
    processingParams.push(params.split(","))
    var finalParams = [].concat.apply([], processingParams)
    var count = 0
    return finalParams.map(item => {
      count++
      return(
        <div className="button" onClick={(e) => this.toggleParam(item.replace(/_/gi, ''), e)} key={count}>
          {this.renderButtonIcon(item)}
          {item.charAt(0).toUpperCase() + item.slice(1).replace(/_/gi, ' ')}
        </div>
      )
    })
  }

  toggleParam(param, e) {
    var miniState = {}
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
        {this.renderGraphicBinding(this.props.library)}
        <div dangerouslySetInnerHTML={{ __html: props.content_description}} />
        {this.state.scriptLoaded &&
          <script type="text/javascript" dangerouslySetInnerHTML={{ __html: props.script_content }} />
        }
        {this.props.extra_params !== "" &&
          this.renderParamsButtons(this.props.extra_params)
        }
        <AuthedContentFooter location={props.location} />
      </article>
    )
  }
}

export default LightBoxGraphicContent
