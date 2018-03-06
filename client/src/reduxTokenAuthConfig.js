import { generateAuthActions } from 'redux-token-auth'

function fetchAPIAuthURL() {
  if (process.env.NODE_ENV === 'production') {
    return "https://thelocus.co/auth"
  } else {
    return `${process.env.REACT_APP_BASE_ENDPOINT}:${process.env.REACT_APP_API_PORT}/auth`
  }
}

const config = {
  authUrl: `${process.env.REACT_APP_BASE_ENDPOINT}:${process.env.REACT_APP_API_PORT}/auth`,
  userAttributes: {
    username: 'username',
    email: 'email',
    name: 'name',
    id: 'id',
    role: 'role'
  }//,
  //userRegistrationAttributes: {
  //  firstName: 'first_name',
  //},
}

const {
  signInUser,
  signOutUser,
  verifyCredentials
} = generateAuthActions(config)

export {
  signInUser,
  signOutUser,
  verifyCredentials
}
