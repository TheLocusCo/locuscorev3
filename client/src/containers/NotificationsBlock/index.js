import React, { Component } from 'react'
import './style.css'
import { connect } from "react-redux"
import NotificationsItem from '../../components/NotificationsItem'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { Route } from 'react-router-dom'
import { fetchUserNotifications, dismissUserNotification } from "../../redux/actions"

class NotificationsBlock extends Component {
  componentWillMount() {
    this.props.dispatch(fetchUserNotifications(this.props.currentUser.id))
  }

  dismissNotification(e, indivItem, currentUser) {
    this.props.dispatch(dismissUserNotification(indivItem, currentUser.id))
  }

  renderNotificationItems(items, history, currentUser) {
    return items.map(indivItem => {
      return (
        <NotificationsItem
          {...indivItem}
          key={indivItem.id}
          onDismiss={(e) => {this.dismissNotification(e, indivItem, currentUser)}}
          onClick={() => {history.push("/notifications/" + indivItem.id)}}
        />
      )
    })
  }

  render() {
    const { userNotifications, currentUser } = this.props
    return (
      <Route render={({history}) => (
        <div className="notifications-container">
          <ReactCSSTransitionGroup transitionName="group-fade-wait" transitionAppearTimeout={500} transitionEnterTimeout={500} transitionLeaveTimeout={500} transitionAppear={true}>
            {this.renderNotificationItems(userNotifications, history, currentUser)}
          </ReactCSSTransitionGroup>
        </div>
      )}/>
    )
  }
}

const mapStateToProps = state => ({
  userNotifications: state.userNotifications.items
})

export default connect(mapStateToProps)(NotificationsBlock)
