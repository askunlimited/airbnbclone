import React from 'react'

import { Paper, Stack, Box, Button, Link, Typography } from '@mui/material'

import { BsGlobe } from 'react-icons/bs'
import { justifyCenter } from 'themes/commonStyles'

const footerLinks = [
  { id: 1, text: 'Privacy', url: '#' },
  { id: 2, text: 'Privacy', url: '#' },
  { id: 3, text: 'Privacy', url: '#' },
  { id: 4, text: 'Privacy', url: '#' },
]

const MobileMenu = () => {
  return (
    <Box sx={{ borderTop: '1px solid #ccc', mt: 3, pt: 2, width: '100%' }}>
      <Paper>
        <Button>
          <Box sx={{ ...justifyCenter, mr: 1 }}>
            <BsGlobe size={24} />
          </Box>
          <Typography>English (CA)</Typography>
        </Button>
      </Paper>
      <Stack sx={{ mt: 2 }}>
        <Paper>
          <Link href='#'> 2022 AIrBnB copyright </Link>
        </Paper>
      </Stack>
      <Stack sx={{ mt: 2 }}>
        {footerLinks.map((link) => {
          return (
            <Paper key={link.id}>
              <Link href={link.url}>{link.text}</Link>
            </Paper>
          )
        })}
      </Stack>
    </Box>
  )
}

export default MobileMenu
