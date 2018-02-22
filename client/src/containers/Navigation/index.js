import React, { Component } from 'react'
import { connect } from "react-redux"
import { Link } from 'react-router-dom'
import './style.css'
import NavigationButton from '../../components/NavigationButton'
import { fetchNavigation } from "../../redux/actions"

class Navigation extends Component {
  componentDidMount() {
    this.props.dispatch(fetchNavigation())
  }

  renderList(props) {
    return props.navigation.map(buttonInfo => {
      return (
        <NavigationButton {...buttonInfo} key={buttonInfo.id} location={this.props.location} />
      )
    })
  }

  render() {
    return (
      <div className="main-navigation">
        <ul className="not-standard">
          { this.renderList(this.props) }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  navigation: state.navigation.items
})

export default connect(mapStateToProps)(Navigation)
