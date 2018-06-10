import React, { Component } from 'react'
import { connect } from 'react-redux'

import ShortcutsBlock from 'containers/iterators/ShortcutsBlock'
import PaginationContainer from 'containers/iterators/PaginationContainer'
import { fetchResources } from 'redux/actions'

class Graphics extends Component {
  componentWillMount() {
    this.props.dispatch(fetchResources('graphics', this.props.currentPage.graphics))
  }

  render() {
    const { graphics, isFetching } = this.props
    return (
      <div className="main-content">
        <div className="page-content">
          <div>
            <h1 className="section-heading larger">
              Web Graphics
            </h1>
            <span className="helper"/>
            {isFetching && graphics.items.length === 0 && <h1 className="section-heading larger">Loading...</h1>}
            {graphics.items.length === 0 && <h1 className="section-heading larger">No web graphics found!</h1>}
            {graphics.items.length > 0 &&
              <ShortcutsBlock content={graphics.items}/>
            }
            {graphics.items.length > 0 && graphics.totalPages > 1 &&
              <PaginationContainer items={graphics} itemIndex="graphics" />
            }
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  graphics: state.graphics,
  isFetching: state.posts.isFetching,
  currentPage: state.currentPage
})

export default connect(mapStateToProps)(Graphics)
