//https://github.com/callemall/material-ui/blob/v1-beta/examples/create-react-app/src/styles/createContext.js

import { createMuiTheme } from 'material-ui/styles'

const theme = createMuiTheme({
  palette: {
    type: 'dark'
  }
})

export default function createContext() {
  return {
    theme
  }
}
