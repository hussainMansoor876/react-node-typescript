import { createTheme, ThemeProvider } from '@mui/material/styles'
import Routes from './Config/routes'
import 'react-phone-input-2/lib/style.css'
import './App.css'
import 'react-phone-input-2/lib/style.css'

const theme = createTheme({
  palette: {
    primary: {
      main: `#67ECD0`
    }
  }
})

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  )
}

export default App
