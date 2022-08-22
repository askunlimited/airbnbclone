import React from 'react'
import { Box, Container } from '@mui/material'
// import { Container } from '@mui/material/Container'

import Logo from './Logo'
import { flexBetweenCenter, dFlex } from 'themes/commonStyles'
import LocationSearch from './LocationSearch'
import ProfileSetiings from './ProfileSetiings'

const Header = () => {
  return (
    <Box
      sx={{
        ...dFlex,
        minHeight: 70,
        borderBottom: '1px solid #ddd',
      }}
    >
      <Container maxWidth='xl'>
        <Box
          sx={{
            ...flexBetweenCenter,
            minHeight: 70,
            px: 4,
          }}
        >
          <Logo />
          <LocationSearch />
          <ProfileSetiings />
        </Box>
      </Container>
    </Box>
  )
}

export default Header
