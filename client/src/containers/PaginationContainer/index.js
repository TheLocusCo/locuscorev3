import React, { Component } from 'react'
import './style.css'
import { connect } from "react-redux"
import ReactTooltip from 'react-tooltip'
import { updateCurrentPage } from "../../redux/actions"

class PaginationContainer extends Component {
  paginationClass(currentPage, itemIndex, currentIndex) {
    return ("pagination-tooltip button" + (currentPage[itemIndex] === currentIndex ? " current-page" : ""))
  }

  setCurrentPageFor(props, currentIndex) {
    props.dispatch(updateCurrentPage(props.itemIndex, currentIndex, this.props.params))
  }

  renderPaginationButtons(props) {
    let objs = []
    for(var i=1; i <= props.items.totalPages; i++) {
      objs.push(i)
    }

    return objs.map(i => {
      return (
        <div key={i}
             className={this.paginationClass(props.currentPage, props.itemIndex, i)}
             onClick={() => {this.setCurrentPageFor(props, i)}}
             data-tip={props.items.paginationMeta[i]}>
          {i}
        </div>
      )
    })
  }

  render() {
    return (
      <div className="pagination-container">
        <ReactTooltip />
        <div className="pagination box-dark">
          {this.renderPaginationButtons(this.props)}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  currentPage: state.currentPage
})

export default connect(mapStateToProps)(PaginationContainer)
