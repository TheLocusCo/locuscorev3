import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import DestroyButton from 'components/buttons/DestroyButton'

class AuthedIndexTableBlock extends Component {
  linkClass(type, item, itemIndex) {
    if (itemIndex === "posts") {
      if (item.author_id === this.props.currentUser.id) {
        return("button")
      } else if (this.props.currentUser.role["pf_" + itemIndex].includes(type)) {
        return("button")
      } else {
        return("button disabled")
      }
    } else if (itemIndex === "media") {
      if (item.user_id === this.props.currentUser.id) {
        return("button")
      } else if (this.props.currentUser.role["pf_" + itemIndex].includes(type)) {
        return("button")
      } else {
        return("button disabled")
      }
    } else {
      return("button" + (this.props.currentUser.role["pf_" + itemIndex].includes(type) ? "" : " disabled"))
    }
  }

  isDisabled(item, itemIndex) {
    if (itemIndex === "posts") {
      if (item.author_id === this.props.currentUser.id) {
        return(false)
      } else if (this.props.currentUser.role["pf_" + itemIndex].includes("d")) {
        return(false)
      } else {
        return(true)
      }
    } else if (itemIndex === "media") {
      if (item.user_id === this.props.currentUser.id) {
        return(false)
      } else if (this.props.currentUser.role["pf_" + itemIndex].includes("d")) {
        return(false)
      } else {
        return(true)
      }
    } else {
      return(!this.props.currentUser.role["pf_" + itemIndex].includes("d"))
    }
  }

  renderRows(items, headers, itemIndex) {
    return items.map(item => {
      return (
        <tr key={item.id}>
          {this.renderItemFromHeader(item, headers)}
          <td>
            <Link className={this.linkClass("r", item, itemIndex)} to={this.renderLink(itemIndex, item.id)}>
              <i className="icon-eye"></i>
              Show
            </Link>
          </td>
          {this.props.currentUser.role["pf_" + itemIndex].includes('u') &&
            <td>
              <Link className={this.linkClass("u", item, itemIndex)} to={this.renderLink(itemIndex, item.id) + "/edit"}>
                <i className="icon-pencil"></i>
                Edit
              </Link>
            </td>
          }
          {this.props.currentUser.role["pf_" + itemIndex].includes('d') &&
            <td>
              <DestroyButton item={item} disabled={this.isDisabled(item, itemIndex)}>
                Destroy
              </DestroyButton>
            </td>
          }
        </tr>
      )}
    )
  }

  renderLink(itemIndex, itemId) {
    return ("/" + itemIndex + "/" + itemId)
  }

  renderItemFromHeader(item, headers) {
    var count = 0
    return Object.keys(headers).map(header => {
      count++
      switch (headers[header]) {
        case "string": case "custom":
          return (<td key={count}>{ item[header] }</td>)
        case "array":
          return (<td key={count}>{ item[header].filter(word => word !== "All Categories").join(", ") }</td>)
        case "categories":
          return (<td key={count}>{ item[header].filter(object => object.name !== "All Categories").map(function(elem) { return elem.name }).join(", ") }</td>)
        case "boolean": case "custom_boolean":
          if (item[header]) {
            return (<td className="centered" key={count}><i className="icon-check"/></td>)
          } else {
            return (<td className="centered" key={count}><i className="icon-cancel"/></td>)
          }
        default:
          return null
      }
    })
  }

  renderHeaders(headersObject) {
    var count = 0
    return Object.entries(headersObject).map(header => {
      count++
      switch(header[1]) {
        case "custom": case "custom_boolean":
          return (
            <th key={count}>{headersObject.display[header[0]]}</th>
          )
        case "string": case "boolean": case "array": case "categories":
          let newHeader = header[0].replace(/pf_/gi, '')
          return (
            <th key={count}>{newHeader.charAt(0).toUpperCase() + newHeader.slice(1)}</th>
          )
        default:
          return null
      }
    })
  }

  render() {
    return (
      <div className="box-dark">
        <table>
          <ReactCSSTransitionGroup component="tbody" transitionName="group-fade-wait" transitionAppearTimeout={500} transitionEnterTimeout={500} transitionLeaveTimeout={500} transitionAppear={true}>
            <tr>
              {this.renderHeaders(this.props.headers)}
              <th>
                <i className="icon-eye"></i>
              </th>
              {this.props.currentUser.role["pf_" + this.props.itemIndex].includes('u') &&
                <th>
                  <i className="icon-pencil"></i>
                </th>
              }
              {this.props.currentUser.role["pf_" + this.props.itemIndex].includes('d') &&
                <th>
                  <i className="icon-trash"></i>
                </th>
              }
            </tr>
            {this.renderRows(this.props.items, this.props.headers, this.props.itemIndex)}
          </ReactCSSTransitionGroup>
        </table>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  currentUser: state.currentUser
})

export default connect(mapStateToProps)(AuthedIndexTableBlock)
