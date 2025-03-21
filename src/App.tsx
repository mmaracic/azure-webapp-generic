import "@radix-ui/themes/styles.css";
import { Box, Theme } from '@radix-ui/themes'
import Header from './pages/Header'
import Content from './pages/Content'

function App() {

  return (
    <Theme accentColor='blue'>
      <Box>
        <Box>
          <Header />
        </Box>
        <Box>
          <Content />
        </Box>
      </Box>
    </Theme>
  )
}

export default App
