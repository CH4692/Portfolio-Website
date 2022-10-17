import { GitHub, Instagram, LinkedIn, YouTube } from '@mui/icons-material'
import { Box, IconButton, Stack } from '@mui/material'
import React from 'react'

const Leftbar = () => {
  return (
    <Box 
      flex={0.25} 
      p={2} 
      sx={{ display: { xs: 'none', sm: 'flex' }, height: '88vh', justifyContent: 'center', alignItems: 'center'}}>
      <Stack spacing={2} >
        <IconButton>
          <GitHub color='primary' fontSize='large' />
        </IconButton>
        <IconButton>
          <LinkedIn color='primary' fontSize='large' />
        </IconButton>
        <IconButton>
          <Instagram color='primary' fontSize='large'/>
        </IconButton>
        <IconButton>
          <YouTube color='primary' fontSize='large'/>
        </IconButton>
      </Stack>
    </Box>
  )
}

export default Leftbar