import React from 'react'
import {connect} from 'react-redux'
import {createSelector} from 'reselect'
import WrappedPieChart from '../../components/WrappedPieChart'
import {countLetters} from '../../utils/stringStats'
import {incrementRenderCount} from '../../redux/actions'
import toJS from '../../hocs/toJS'
import _ from 'lodash'
import {getText, getHover} from '../../redux/selectors'
import {createSelectorWithDependencies, registerSelectors} from 'reselect-tools'
import configureStore from "../../redux/store/configureStore"

const getFilterEnabled = (state, ownProps) => ownProps.filter

const getAutoHover = (state, filter) => {
  return filter ? state.hover : null
}

const getData = createSelectorWithDependencies([getText, getAutoHover], (text, hover) => {
  return _.reduce(text, (result, userText, user) => {
    const nbOfLetters = countLetters(userText, hover ? hover : null)
    result.push({
      name: user,
      value: nbOfLetters
    })
    return result
  }, [])
})

registerSelectors({ getText, getAutoHover, getData })
/*

const getAutoHover = (state, filter) => {
  return filter ? state.hover : null
}

const getData = (state, hover) => {
  return _.reduce(state.text, (result, userText, user) => {
    const nbOfLetters = countLetters(userText, hover ? hover : null)
    result.push({
      name: user,
      value: nbOfLetters
    })
    return result
  }, [])
}
*/

const mapStateToProps = (state, ownProps) => ({
  data: getData(state, ownProps),
  hover: getAutoHover(state, ownProps)
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  incrementRenderCount(mode) {
    dispatch(incrementRenderCount('piechart', mode))
  }
})

const ConnectedPie = connect(mapStateToProps, mapDispatchToProps)(
  WrappedPieChart
)

class AutoFilterPieChart extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      filterEnabled: true
    }
  }

  toggleFilter = () => {
    this.setState(state => ({
      filterEnabled: !state.filterEnabled
    }))
  }

  render() {
    return (
      <ConnectedPie
        filter={this.state.filterEnabled}
        toggleFilter={this.toggleFilter}
        {...this.props}
      />
    )
  }
}

export default AutoFilterPieChart
