import React, { Component } from 'react'

import './style.css'
import TabsBlock from 'containers/TabsBlock'
import NextSlideButton from 'components/NextSlideButton'

class ButtonSliderItemContent extends Component {
  renderContent(props) {
    switch (props.mode) {
      case "interests":
        return (
          <div className={window.innerWidth > 980 ? 'row' : ''}>
            <div className={window.innerWidth > 980 ? 'span4' : ''}>
              <div className="box-light box-details">
                <h2>Basic Personal Information</h2>
                <dl className="details">
                  <dt>Name</dt>
                  <dd>Louis Alridge</dd>
                  <dt>Date Of Birth</dt>
                  <dd>December 14th, 1989</dd>
                  <dt>Nationality</dt>
                  <dd>Canadian</dd>
                </dl>
              </div>
            </div>
            <div className={window.innerWidth > 980 ? 'span4' : ''}>
              <h2 className="section-heading">
                What Interests Me
                <span className="helper" />
              </h2>
              <ul>
                <li>Programming</li>
                <li>Japanese Culture (Especially manga, anime, and music)</li>
                <li>Biking (Road or Mountain)</li>
                <li>Gaming (Any genre, though JRPGs are my favorite)</li>
                <li>Fantasy Novels (Redwall series, Harry Potter and more)</li>
                <li>World Conceptualization (Think Dungeon's &amp; Dragons)</li>
                <li>Art (Modern, though I can definitely appreciate classics)</li>
              </ul>
            </div>
            <div className={window.innerWidth > 980 ? 'span4' : ''}>
              <h2 className="section-heading">
                Tools I live by
                <span className="helper" />
              </h2>
              <ul>
                <li>A computer with at least 3 monitors</li>
                <li><a href="https://atom.io/">Atom</a></li>
                <li><a href="http://www.debian.org/">Debian Linux Distro</a></li>
                <li>A locked down Firefox / Chromium browser</li>
                <li>At least 8 hours of music</li>
                <li>A mechanical keyboard</li>
              </ul>
              <div className={window.innerWidth > 980 ? 'right' : 'centered'}>
                <NextSlideButton {...props}>
                  What I can do
                </NextSlideButton>
              </div>
            </div>
          </div>
        )
      case "contact_about":
        return (
          <div>
            <h2 className="section-heading">
              What You Should Contact Me About
              <span className="helper" />
            </h2>
            {this.props.welcomeTabs.length > 0 &&
              <TabsBlock content={this.props.welcomeTabs} mode="welcome" />
            }
            <div className="right">
              <NextSlideButton {...props}>
                What I like to talk about
              </NextSlideButton>
            </div>
          </div>
        )
      case "talk_topics":
        return (
          <div className="box-dark">
            <div className={window.innerWidth > 980 ? 'cols' : ''}>
              <div className={window.innerWidth > 980 ? 'col1of2' : ''}>
                <h2 className="section-heading">
                  What I like to talk about
                  <span className="helper" />
                </h2>
                <ul className="extended">
                  <li>Solutions to big problems<span className="helper" /></li>
                  <li>Insightful discussion<span className="helper" /></li>
                  <li>Astronomy<span className="helper"/></li>
                  <li>Any Videogame that is not an fps<span className="helper" /></li>
                  <li>Japanese Culture (Anime, manga, music)<span className="helper"/></li>
                </ul>
              </div>
              <div className={window.innerWidth > 980 ? 'col1of2' : ''}>
                <h2 className="section-heading">
                  What I like to think about
                  <span className="helper" />
                </h2>
                <ul className="extended">
                  <li>Solutions to big problems<span className="helper" /></li>
                  <li>What would happen to X if Y<span className="helper" /></li>
                  <li>Solutions to specific problems<span className="helper" /></li>
                  <li>Code/Logic Based Systems<span className="helper" /></li>
                </ul>
              </div>
            </div>
            <div className={window.innerWidth > 980 ? 'right' : 'centered'}>
              <NextSlideButton {...props}>
                What I follow
              </NextSlideButton>
            </div>
          </div>
        )
      case "follow":
        return (
          <div className="box-dark">
            <h2 className="section-heading larger">
              What I follow
              <span className="helper"/>
            </h2>
            <div className="extended centered">
              <div className="section-heading"><a href="https://news.ycombinator.com/news">Hacker News</a><span className="helper" /></div>
              <div className="section-heading"><a href="https://arstechnica.com/">Ars Technica</a><span className="helper" /></div>
              <div className="section-heading"><a href="http://slashdot.org/">Slashdot</a><span className="helper" /></div>
              <div className="section-heading"><a href="http://theleanstartup.com/">The Lean Startup</a><span className="helper"/></div>
              <div className="section-heading"><a href="https://www.schneier.com/">Schneier on Security</a><span className="helper" /></div>
              <div className="section-heading"><a href="http://krebsonsecurity.com/">Krebs On Security</a><span className="helper" /></div>
              <div className="section-heading"><a href="http://www.codinghorror.com/blog/">Coding Horror</a><span className="helper" /></div>
              <div className="section-heading"><a href="https://www.eff.org/">Electronic Frontier Foundation</a><span className="helper" /></div>
              <div className="section-heading"><a href="http://www.ribbonfarm.com/">Ribbonfarm</a><span className="helper" /></div>
              <div className="section-heading"><a href="http://breakingsmart.com/">BreakingSmart</a><span className="helper" /></div>
              <div className="section-heading"><a href="http://www.tempobook.com/blog/">Tempo</a><span className="helper" /></div>
            </div>
          </div>
        )
      default: return null
    }
  }

  render() {
    return (
      this.renderContent(this.props)
    )
  }
}

export default ButtonSliderItemContent
