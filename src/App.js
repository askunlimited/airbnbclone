import { Box, CssBaseline } from '@mui/material'
// import {  } from '@mui/material/CssBaseline'
import Header from 'components/Header'

import './App.css'

function App() {
  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100vh',
        }}
      >
        <Box>
          <Header />
        </Box>
      </Box>
    </>
  )
}

export default App
