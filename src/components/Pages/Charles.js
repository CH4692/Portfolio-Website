import { Box, Typography } from '@mui/material'
import PsychologyIcon from '@mui/icons-material/Psychology';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import React from 'react'

const iconRightTop = {
  position: 'absolute',
  right:'100px',
  top: '100px',
  fontSize: '72px',
  color: 'primary.contrastText'
}

const iconLeftDown = {
  position: 'absolute',
  left:'100px',
  bottom: '100px',
  fontSize: '72px',
  color: 'primary.contrastText'
}

const comingSoon = {
    background: 'radial-gradient(circle, rgba(33, 150, 243, 1) 20%, rgba(13, 71, 161, 1) 80%)',
    borderRadius: '40px',
    height: '90vh',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    display: 'flex'
}



const Charles = () => {
  return (
    <Box sx={comingSoon}>
      <PsychologyIcon sx={iconRightTop}/>
      <EmojiObjectsIcon sx={iconLeftDown}/>
      <Typography sx={{fontSize: {xs: '16px' ,md: '36px'}}} color={'primary.contrastText'} fontWeight={'bold'}  variant='h4'>About Page coming Soon!</Typography>
    </Box>
  )
}

export default Charles