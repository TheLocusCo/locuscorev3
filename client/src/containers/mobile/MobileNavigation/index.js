import { connect } from 'react-redux'

import MobileNavigation from 'components/mobile/MobileNavigation'
import { getNavigation } from 'redux/selectors'

const mapStateToProps = (state, ownProps) => ({
  navigation: getNavigation(state),
  location: ownProps.location
})

export default connect(mapStateToProps)(MobileNavigation)
