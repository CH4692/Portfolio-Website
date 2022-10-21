import { Button, styled, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import ProjectsSection from '../Layout/ProjectsSection'
import Skills from '../Layout/Skills'
import './Home.css'

export const StyledButton = styled(Button)({
  width: '300px',
  height: '50px',
  borderRadius: '5px',
  color: 'primary.dark'

})
const Home = () => {
  return (
    <>
      <Box className='landing-page'>
        {/* typography theme erstellen und mobile responsive machen */}
        {/* theme für die farben (paletten) benutzen */}
        {/* theme für fonts verwenden */}
        {/* theme für breakpoints */}
        {/* theme für transitions */}
        <Box className='textbox'>
          <Typography variant='h6' color={'primary.dark'} fontWeight={'bold'}>Hi, my name is</Typography>
          <Typography variant='h2' color='primary.light' fontWeight={'bold'}>Charles Heller</Typography>
          <Typography variant='h2' color={'primary.dark'} mb='20px' fontWeight={'bold'}>Frontend-Backend Developer</Typography>
          <Typography variant='p' color={'primary.dark'} sx={{ whiteSpace: 'normal' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br />
            eiusmod tempor incididunt ut labore et dolore magna aliqua. <br />
            ad minim veniam, quis nostrud exercitation ullamco laboris <br />
          </Typography>
          <Box className='call-to-action' display={'flex'} >
            <StyledButton size='large' variant="outlined" >Check out my Projects!</StyledButton>
          </Box>
        </Box>
      </Box>
      <Box display={'flex'} flexDirection={'column'} justifyContent={'center'}>
        <Skills />
      </Box>
      <Box >
        <ProjectsSection />
      </Box>
    </>
  )
}

export default Home