import {connect} from 'react-redux'
import EventDashboard from '../../components/EventDashboard'
import {incrementRenderCount} from '../../redux/actions'
import {getHover, getSaturatedColors} from '../../redux/selectors'

const mapStateToProps = (state, ownProps) => ({
  hover: getHover(state),
  colors: getSaturatedColors(state)
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  incrementRenderCount (mode) {
    dispatch(incrementRenderCount('dashboard', mode))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(EventDashboard)
