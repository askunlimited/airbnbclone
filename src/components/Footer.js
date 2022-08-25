import React from 'react'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import  Stack  from '@mui/material/Stack'
import  Link from '@mui/material/Link'
import Button  from '@mui/material/Button'
import Container from '@mui/material/Container'

// react icons
import { BsGlobe } from 'react-icons/bs'
import { IoChevronUpOutline } from 'react-icons/io5'

import {
 flexBetweenCenter,
 justifyCenter,
 fullWidthFlex
} from 'theme/commonStyles'

const footerLinks = [
{id: 1, text: 'Privacy', url: '#'},
{id: 2, text: 'Privacy', url: '#'},
{id: 3, text: 'Privacy', url: '#'},
{id: 4, text: 'Privacy', url: '#'}
]

const Footer = () => {
  return (
    <Box sx={{
     ...fullWidthFlex,
     borderTop: '1px solid #ddd'

    }}>
     

    </Box>
  )
}

export default Footer