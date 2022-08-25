import React from 'react'
import { Button, Stack, Box, Typography } from '@mui/material'
import { FaSearch, FaRegHeart, FaRegUserCircle } from 'react-icons/fa'

const footerMenu = [
  { id: 1, text: 'Explore', icon: <FaSearch size={18} /> },
  { id: 1, text: 'Wishlist', icon: <FaRegHeart size={18} /> },
  { id: 1, text: 'Login', icon: <FaRegUserCircle size={18} /> },
]

const MobileFooter = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexGrow: 1,
      }}
    >
      <Stack>
        {footerMenu.map((item) => {
          return (
            <Button key={item.id}>
              <Stack
                sx={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                direction='column'
                spacing={1}
              >
                {item.icon}
                <Typography>{item.text}</Typography>
              </Stack>
            </Button>
          )
        })}
      </Stack>
    </Box>
  )
}

export default MobileFooter
