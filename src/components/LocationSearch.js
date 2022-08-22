import React from 'react'
import { Paper, Box, Typography, Divider, Button, Stack } from '@mui/material'

import { IoSearchCircleSharp } from 'react-icons/io5'
import { pink } from '@mui/material/colors'

const choices = [
  { id: 1, text: 'Anywhere' },
  { id: 2, text: 'Anyweek' },
  { id: 3, text: 'Add guest', withIcon: true },
]

const LocationSearch = () => {
  return (
    <Paper
      sx={{
        borderRadius: 20,
        ml: 15,
      }}
      elevation={3}
    >
      <Stack
        sx={{
          borderRadius: 20,
          pl: 2,
        }}
        divider={<Divider orientation='vertical' flexItem />}
      >
        {choices.map((choice) => {
          return (
            <Button key={choice.id}>
              <Typography
                sx={{
                  color: (theme) => theme.palette.text.primary,
                  fontWeight: 'bold',
                }}
              >
                {choice.text}
              </Typography>
              {choice.withIcon && (
                <Box sx={{ ml: 1, mt: 1, mr: 1 }}>
                  <IoSearchCircleSharp size={32} color={pink[500]} />
                </Box>
              )}
            </Button>
          )
        })}
      </Stack>
    </Paper>
  )
}

export default LocationSearch
