import React, { Component } from 'react'
import './style.css'
import { connect } from "react-redux"
import Loadable from 'react-loadable'

import ShortcutsBlock from '../ShortcutsBlock'
import GalleryBlock from '../GalleryBlock'
import GalleryCategoryButtonsBlock from '../GalleryCategoryButtonsBlock'
import SuccessBlock from '../SuccessBlock'
import ErrorBlock from '../ErrorBlock'
import PaginationContainer from '../PaginationContainer'
import EmptyPage from "../../components/EmptyPage"

const AuthedIndexTable = Loadable({
  loader: () => import("../AuthedIndexTable"),
  loading: EmptyPage
})

class SearchResults extends Component {
  humanize(text) {
    return (text.charAt(0).toUpperCase() + text.slice(1).replace(/_/gi, ' '))
  }

  renderFancyContainer(searchResults) {
    switch (searchResults.model) {
      case "posts": case "graphics":
        return (
          <div>
            <ShortcutsBlock content={searchResults.items}/>
            {searchResults.totalPages > 1 &&
              <PaginationContainer items={searchResults} itemIndex={searchResults.model} />
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
            <AuthedIndexTable items={searchResults.items} headers={headers} itemIndex={searchResults.model} />
            {searchResults.totalPages > 1 &&
              <PaginationContainer items={searchResults} itemIndex={searchResults.model} />
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
              Search Results For {this.humanize(searchResults.model)}
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
  headers: state.tableHeaders,
  isFetching: state.currentSearchResults.isFetching,
  successContent: state.successMessages.items,
  errorContent: state.errorMessages.items,
  activeCategory: state.activeCategory
})

export default connect(mapStateToProps)(SearchResults)
