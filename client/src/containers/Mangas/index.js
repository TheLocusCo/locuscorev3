import React, { Component } from 'react'
import './style.css'
import { connect } from "react-redux"
import { Link } from 'react-router-dom'
import AuthedIndexTable from '../AuthedIndexTable'
//import ReactCSSTransitionReplace from 'react-css-transition-replace'
//import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import SuccessBlock from '../SuccessBlock'
import ErrorBlock from '../ErrorBlock'
import PaginationContainer from '../PaginationContainer'
import { fetchMangas } from "../../redux/actions"

const headers = {
  name: "string",
  total_chapters: "string"
}

class Mangas extends Component {
  componentWillMount() {
    this.props.dispatch(fetchMangas("paginated", this.props.currentPage.mangas))
  }

  render() {
    const { mangas, isFetching } = this.props
    return (
      <div className="main-content">
        <div className="page-content">
          <div>
            <h1 className="section-heading larger">
              Manga
            </h1>
            <div className="box-dark centered">
              <Link className="button" to="/manga_gallery">
                <i className="icon-window"></i>
                Manga Gallery
              </Link>
            </div>
            <SuccessBlock content={this.props.successContent}/>
            <ErrorBlock content={this.props.errorContent}/>
            <span className="helper"/>
            {isFetching && mangas.items.length === 0 && <h1 className="section-heading larger">Loading...</h1>}
            {mangas.items.length === 0 && <h1 className="section-heading larger">No manga found!</h1>}
            {mangas.items.length > 0 &&
              <AuthedIndexTable items={mangas.items} headers={headers} itemIndex="mangas" />
            }
            {mangas.items.length > 0 && mangas.totalPages > 1 &&
              <PaginationContainer items={mangas} itemIndex="mangas" />
            }
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  mangas: state.mangas,
  isFetching: state.posts.isFetching,
  successContent: state.successMessages.items,
  errorContent: state.errorMessages.items,
  currentPage: state.currentPage
})

export default connect(mapStateToProps)(Mangas)
