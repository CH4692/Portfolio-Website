import { Button, styled, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Skills from './Layout/Skills'

const StyledButton = styled(Button)({
  width: '300px',
  height: '50px',
  borderRadius: '5px',
  color: 'primary.dark'

})
const Home = () => {
  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', height: '80%', width: '100%', pl: '8em', pt: '7em' }}>
        <Typography variant='h6' color={'primary.dark'} fontWeight={'bold'}>Hi, my name is</Typography>
        <Typography variant='h2' color='primary.light' fontWeight={'bold'}>Charles Heller</Typography>
        <Typography variant='h2' color={'primary.dark'} mb='20px' fontWeight={'bold'}>Frontend-Backend Developer</Typography>
        <Typography variant='p' mb='50px' color={'primary.dark'}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do elit, sed do<br />
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim Ut enim<br />
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut  nisi ut<br />
          aliquip ex ea commodo consequat.
        </Typography>
        <StyledButton size='large' variant="outlined" >Check out my Projects!</StyledButton>
      </Box>
      <Box>
        <Skills />
      </Box>
    </>
  )
}

export default Home