import React, { Component } from 'react'
import './style.css'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import SliderMediaImage from '../../components/SliderMediaImage'
import ButtonSliderPagerButton from '../../components/ButtonSliderPagerButton'

import largePlaceholder from '../../images/large_placeholder.jpg'

class SliderMediaContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeMedia: (this.props.media.length > 0 ? this.props.media[0].name : ""),
      width: "470px",
      height: "285px"
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.media.length > 0 && nextProps.media.length > 0 && this.props.media[0].name !== nextProps.media[0].name ) {
      this.setState({activeMedia: nextProps.media[0].name})
    }
  }

  componentWillMount() {
    switch(this.props.type) {
      case "slider_show":
        this.setState({width: "470px"})
        this.setState({height: "285px"})
        break
      case "slider_big":
        this.setState({width: "640px"})
        this.setState({height: "390px"})
        break
      default:
        this.setState({width: "470px"})
        this.setState({height: "285px"})
    }
  }

  setToActive(name) {
    this.setState({activeMedia: name})
  }

  renderSliderMediaButtons(media) {
    return media.map(indivProps => {
      return (
        <ButtonSliderPagerButton {...indivProps} key={indivProps.id} active={this.state.activeMedia === indivProps.name} onClick={(e) => this.setToActive(indivProps.name)} />
      )
    })
  }

  renderContent(media) {
    return media.map(indivProps => {
      if (this.state.activeMedia === indivProps.name) {
        return (
          <SliderMediaImage {...indivProps} key={indivProps.id} sliderSize={this.props.type} />
        )
      } else {
        return null
      }
    })
  }

  figureClassName(type) {
    switch(type) {
      case "slider_show":
        return ""
      case "slider_big":
        return "centered-box"
      default:
        return ""
    }
  }

  renderMedia(media, hideOnNoMedia, type) {
    if (media.length > 0) {
      return (
        <figure style={{width: this.state.width, height: this.state.height}} className={this.figureClassName(type)}>
          <div className="media-slider">
            <ReactCSSTransitionGroup component="div" transitionName="group-fade-wait" transitionAppearTimeout={500} transitionEnterTimeout={500} transitionLeaveTimeout={500} transitionAppear={true}>
              {this.renderContent(media)}
            </ReactCSSTransitionGroup>
            <div className="pager" style={{bottom: "5px"}}>
              <div>
                { this.renderSliderMediaButtons(media) }
              </div>
            </div>
          </div>
        </figure>
      )
    } else if (media.length === 0 && hideOnNoMedia) {
      return null
    } else {
      return (
        <figure style={{width: this.state.width, height: this.state.height}}>
          <img src={largePlaceholder} alt="large placeholder"/>
        </figure>
      )
    }
  }

  render() {
    return this.renderMedia(this.props.media, this.props.hideOnNoMedia, this.props.type)
  }
}

export default SliderMediaContainer
