import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import Container from '@mui/material/Container'
import Header from 'components/Header'
import LocationCards from 'components/LocationCards'
import OptionsTab from 'components/OptionsTab'

import './App.css'
import Footer from 'components/Footer'
import { displayOnDesktop } from 'themes/commonStyles'
import MobileFooter from 'components/MobileFooter'
import MobileMenu from 'components/MobileMenu'

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
          <OptionsTab />
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            flexGrow: 1,
            height: 100,
            overflowY: 'scroll',
          }}
        >
          <Container maxWidth='xl' sx={{ mb: 3 }}>
            <LocationCards />
            <Box
              sx={{
                display: {
                  xs: 'flex',
                  md: 'none',
                },
              }}
            >
              <MobileMenu />
            </Box>
          </Container>
        </Box>
        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <MobileFooter />
        </Box>
        <Box sx={displayOnDesktop}>
          <Footer />
        </Box>
      </Box>
    </>
  )
}

export default App
