import { Box, Typography } from '@mui/material'
import PsychologyIcon from '@mui/icons-material/Psychology';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import React from 'react'

const iconRightTop = {
  position: 'absolute',
  right:'100px',
  top: '100px',
  fontSize: '72px',
  color: 'whitesmoke'
}

const iconLeftDown = {
  position: 'absolute',
  left:'100px',
  bottom: '100px',
  fontSize: '72px',
  color: 'whitesmoke'
}

const Projects = () => {
  return (
    <Box position={'relative'} className='coming-soon' display={'flex'} height={'90vh'} justifyContent={'center'} alignItems={'center'}>
      <PsychologyIcon sx={iconRightTop}/>
      <EmojiObjectsIcon sx={iconLeftDown}/>
      <Typography sx={{fontSize: {xs: '16px' ,md: '36px'}}} color={'white'} fontWeight={'bold'}  variant='h4'>Project Page coming Soon!</Typography>
    </Box>
  )
}

export default Projects