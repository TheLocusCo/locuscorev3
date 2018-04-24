
const initialState = {
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
  }
}

export default initialState
