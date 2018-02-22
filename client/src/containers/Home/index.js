import React, { Component } from 'react'
import ImageLoader from 'react-load-image';
import './style.css'
import CircularProgress from 'material-ui/CircularProgress'
import profilePic from '../../images/profile_pic.jpg'
import ShortcutsBlock from '../ShortcutsBlock'
import SuccessBlock from '../SuccessBlock'
import { connect } from "react-redux"
import ReactTooltip from 'react-tooltip'
import { fetchWelcomeShortcuts } from "../../redux/actions"

function Preloader(props) {
  return <CircularProgress size={100} thickness={10} />
}

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      welcomeShortcuts: [],
      successContent: []
    }
  }

  componentWillMount() {
    this.props.dispatch(fetchWelcomeShortcuts())
  }

  render() {
    return (
      <div className="main-content">
        <ReactTooltip />
        <div className="page-content">
          <div className="welcome-block">
            <SuccessBlock content={this.props.successContent}/>
            <h1 className="section-heading larger">
              Welcome to The Locus
            </h1>
            <span className="helper"/>
            <div className="welcome">
              <figure className="photo-small">
              <ImageLoader
                  src={profilePic}
                >
                  <img alt="Profile Pic" />
                  <div>Error!</div>
                  <Preloader />
                </ImageLoader>
              </figure>
              <p>The name is Louis Alridge. I am a developer of many paths, but my current focus is creating wonders with Elixir, React, Ruby, and Chef. I am currently based in Santa Clara but can and will travel to any Tech hub in North America or Japan. Please take a look around.</p>
            </div>
          </div>
          {this.props.welcomeShortcuts.length > 0 &&
            <ShortcutsBlock content={this.props.welcomeShortcuts} />
          }
          <div className="social-media-block">
            <h2 className="centered">Like What You See? Contact This Way</h2>
            <ul className="social-media">
              <li>
                <a data-tip="Gmail" href="mailto:loualrid@gmail.com">
                  <i className="icon-mail" />
                </a>
              </li>
              <li>
                <a data-tip="Github" href="https://github.com/loualrid">
                  <i className="icon-github" />
                </a>
              </li>
              <li>
                <a data-tip="LinkedIn" href="http://www.linkedin.com/pub/louis-alridge/38/b23/545">
                  <i className="icon-linkedin" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  welcomeShortcuts: state.welcomeShortcuts.items,
  successContent: state.successMessages.items
})

export default connect(mapStateToProps)(Home)
