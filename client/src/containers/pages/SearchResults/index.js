import React, { Component } from 'react'
import { connect } from 'react-redux'
import Loadable from 'react-loadable'

import { humanize } from 'utils/string'
import ShortcutsBlock from 'containers/iterators/ShortcutsBlock'
import GalleryBlock from 'containers/iterators/GalleryBlock'
import GalleryCategoryButtonsBlock from 'containers/iterators/GalleryCategoryButtonsBlock'
import SuccessBlock from 'containers/iterators/SuccessBlock'
import ErrorBlock from 'containers/iterators/ErrorBlock'
import PaginationContainer from 'containers/iterators/PaginationContainer'
import EmptyPage from 'components/pages/EmptyPage'

import { fetchSearchResults } from 'redux/actions'

const AuthedIndexTable = Loadable({
  loader: () => import('containers/iterators/AuthedIndexTable'),
  loading: EmptyPage
})

class SearchResults extends Component {
  componentWillMount() {
    if (this.props.searchResults.model === "") {
      this.props.dispatch(fetchSearchResults(this.props.location.search))
    }
  }

  renderFancyContainer(searchResults) {
    switch (searchResults.model) {
      case "posts": case "graphics":
        return (
          <div>
            <ShortcutsBlock content={searchResults.items}/>
            {searchResults.totalPages > 1 &&
              <PaginationContainer items={searchResults} itemIndex="search_results" params={this.props.location.search}/>
            }
          </div>
        )
      case "mangas": case "projects":
        return (
          <div>
            <GalleryCategoryButtonsBlock mode={searchResults.model} activeCategory={this.props.activeCategory}/>
            <GalleryBlock content={searchResults.items} activeCategory={this.props.activeCategory} type={searchResults.model}/>
          </div>
        )
      default:
        return null
    }
  }

  renderContainer(email, searchResults, headers) {
    if (email) {
      if (searchResults.params.fancyDisplay === true) {
        return (this.renderFancyContainer(searchResults))
      } else {
        return (
          <div>
            <AuthedIndexTable items={searchResults.items} headers={headers[searchResults.model]} itemIndex={searchResults.model} />
            {searchResults.totalPages > 1 &&
              <PaginationContainer items={searchResults} itemIndex="search_results" params={this.props.location.search}/>
            }
          </div>
        )
      }
    } else {
      return (this.renderFancyContainer(searchResults))
    }
  }

  render() {
    const { searchResults, successContent, errorContent, isFetching, headers, currentUser } = this.props
    return (
      <div className="main-content">
        <div className="page-content">
          <div>
            <h1 className="section-heading larger">
              Search Results For {humanize(searchResults.model)}
            </h1>
            <SuccessBlock content={successContent}/>
            <ErrorBlock content={errorContent}/>
            <span className="helper"/>
            {isFetching && searchResults.items.length === 0 && <h1 className="section-heading larger">Loading...</h1>}
            {searchResults.items.length === 0 && <h1 className="section-heading larger">No search results found!</h1>}
            {searchResults.items.length > 0 &&
              this.renderContainer(currentUser.email, searchResults, headers)
            }
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  searchResults: state.currentSearchResults,
  currentUser: state.currentUser,
  headers: state.tableHeaders.tree,
  isFetching: state.currentSearchResults.isFetching,
  successContent: state.successMessages.items,
  errorContent: state.errorMessages.items,
  activeCategory: state.activeCategory
})

export default connect(mapStateToProps)(SearchResults)
