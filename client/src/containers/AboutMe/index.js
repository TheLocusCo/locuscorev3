import React, { Component } from 'react'
import './style.css'
import ButtonSliderBlock from '../ButtonSliderBlock'
import { connect } from "react-redux"
import { fetchWelcomeButtonSliders } from "../../redux/actions"

class AboutMe extends Component {
  componentWillMount() {
    this.props.dispatch(fetchWelcomeButtonSliders(window.innerWidth > 980 ? '' : 'contactAbout'))
  }

  render() {
    return (
      <div className="main-content">
        <div className="page-content">
          <h1 className="section-heading larger">
            About Louis Alridge
          </h1>
          <span className="helper"/>
          <div className={window.innerWidth > 980 ? 'row section' : ''}>
            <div className={window.innerWidth > 980 ? 'span4' : ''}>
              <figure className="photo">
                <img style={{marginBottom: "-2px"}} src="/images/profile_pic.jpg" alt="Profile pic" />
                <span className="helper" />
              </figure>
            </div>
            <div className={window.innerWidth > 980 ? 'span8' : ''}>
              <p>Canadian. Programmer. Artist. College Graduate. Professional. Japanese Enthusiast. Gamer. INTJ. These ten words describe my world to its fullest. They are my hopes, my reality, my drive. The picture to the left of this text is the man behind those ten words. Those that wish to know more can click on the details for my actual “biography”. Otherwise, this site is dedicated to what interests me. Welcome and take a look around the locus.</p>
              <br />
              <blockquote className="plain">
                <p>There is no shortcut to true knowledge, its something you have to strive for, struggle for, live for.</p>
              </blockquote>
            </div>
          </div>
          {this.props.welcomeButtonSliders.length > 0 &&
            <ButtonSliderBlock content={this.props.welcomeButtonSliders} mode="welcome" />
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  welcomeButtonSliders: state.welcomeButtonSliders.items
})

export default connect(mapStateToProps)(AboutMe)
