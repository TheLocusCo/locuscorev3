import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Transition, animated } from 'react-spring'

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

  renderRowItem(item, headers, itemIndex, styles) {
    return (
      <tr key={item.id}>
        {this.renderItemFromHeader(item, headers, styles)}
        <td>
          <animated.div className='table-transition-button-override' style={styles}>
            <Link className={this.linkClass("r", item, itemIndex)} to={item.href}>
              <i className="icon-eye"></i>
              Show
            </Link>
          </animated.div>
        </td>
        {this.props.currentUser.role["pf_" + itemIndex].includes('u') &&
          <td>
            <animated.div className='table-transition-button-override' style={styles}>
              <Link className={this.linkClass("u", item, itemIndex)} to={item.href + "/edit"}>
                <i className="icon-pencil"></i>
                Edit
              </Link>
            </animated.div>
          </td>
        }
        {this.props.currentUser.role["pf_" + itemIndex].includes('d') &&
          <td>
            <animated.div className='table-transition-button-override' style={styles}>
              <DestroyButton item={item} disabled={this.isDisabled(item, itemIndex)}>
                Destroy
              </DestroyButton>
            </animated.div>
          </td>
        }
      </tr>
    )
  }

  renderItemFromHeader(item, headers, styles) {
    var count = 0
    return Object.keys(headers).map(header => {
      count++
      switch (headers[header]) {
        case "string": case "custom":
          return (
            <td key={count}>
              <animated.div style={styles}>
                { item[header] }
              </animated.div>
            </td>
          )
        case "array":
          return (
            <td key={count}>
              <animated.div style={styles}>
                { item[header].filter(word => word !== "All Categories").join(", ") }
              </animated.div>
            </td>
          )
        case "categories":
          return (
            <td key={count}>
              <animated.div style={styles}>
                { item[header].filter(
                    object => object.name !== "All Categories"
                  ).map(function(elem) { return elem.name }).join(", ")
                }
              </animated.div>
            </td>
          )
        case "boolean": case "custom_boolean":
          if (item[header]) {
            return (
              <td className="centered" key={count}>
                <animated.div style={styles}>
                  <i className="icon-check"/>
                </animated.div>
              </td>
            )
          } else {
            return (
              <td className="centered" key={count}>
                <animated.div style={styles}>
                  <i className="icon-cancel"/>
                </animated.div>
              </td>
            )
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
          <tbody>
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
            <Transition
              native
              keys={this.props.items.map((item, index) => item.id)}
              from={{ opacity: 0, paddingTop: 0, paddingLeft: 0, paddingRight: 0, margin: 0 }}
              enter={{ opacity: 1, paddingTop: 3, paddingLeft: 8, paddingRight: 8, margin: 2 }}
              leave={{ opacity: 0, height: 0, paddingTop: 0, paddingLeft: 0, paddingRight: 0, margin: 0 }}>
              {this.props.items.map((item, index) =>
                styles => this.renderRowItem(item, this.props.headers, this.props.itemIndex, styles)
              )}
            </Transition>
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  currentUser: state.currentUser
})

export default connect(mapStateToProps)(AuthedIndexTableBlock)
