import {fromJS} from 'immutable'

const initialState = fromJS({
  reduxTokenAuth: {
    currentUser: {
      isLoading: false,
      isSignedIn: false,
      attributes: {
        username: null, // <-- Just an example. Attributes are whatever you specify in your cofig (below).
        email: null,
        name: null,
        id: null,
        role: {}
      }
    }
  },
  eventDashboard: {
    text: {},
    colors: {
      user1: 'blue',
      user2: 'orange'
    },
    hover: null,
    tick: 0,
    renderCount: {},
    theme: 'dark'
  }
})

export default initialState
