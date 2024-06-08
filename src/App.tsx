import { createTheme, ThemeProvider } from '@mui/material/styles';
import './App.css'
import Header from './components/Header';
import { Paper } from '@mui/material';

function App() {
  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Paper />
      {/* <Game /> */}
    </ThemeProvider>
  )
}

export default App
