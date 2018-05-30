import { connect } from "react-redux"

import MobileNavigation from '../../../components/mobile/MobileNavigation'
// import NavigationButton from '../../components/NavigationButton'
import { getNavigation } from "../../../redux/selectors"

const mapStateToProps = (state, ownProps) => ({
  navigation: getNavigation(state),
  apiUrl: '',
  location: ownProps.location
})

export default connect(mapStateToProps)(MobileNavigation)
