import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Footer from '../../Layout/Footer'
import ContactSection from './Contact/ContactSection'
import ProjectSection from './Projects/ProjectSection'
import Skills from './Skills/Skills'
import { StyledHomeContainerOne, StyledHomeContainerTwo, StyledButton, StyledHomeButtonContainer, StyledUpperText, StyledLowerText } from './HomeStyles'
import { Link } from 'react-router-dom'
import illustration from '../../../images/pic-2.png'


const Home = () => {
  return (
    <>
      <Box sx={StyledHomeContainerOne}>
        {/* typography theme erstellen und mobile responsive machen */}
        {/* theme für die farben (paletten) benutzen */}
        {/* theme für fonts verwenden */}
        {/* theme für breakpoints */}
        {/* theme für transitions */}
        <Box sx={StyledHomeContainerTwo}>
          <Typography variant='h6' color={'primary.dark'} fontWeight={'bold'}>Hi, my name is</Typography>
          <Typography sx={StyledUpperText} variant='h2' color='primary.light' fontWeight={'bold'}>Charles Heller</Typography>
          <Typography sx={StyledLowerText} variant='h2' color={'primary.dark'} mb='20px' fontWeight={'bold'}>Frontend-Backend Developer</Typography>
          <Typography variant='p' color={'primary.dark'}>
            I build modern Websites with popular technologys like React JS  <br />
          </Typography>
          <Box sx={StyledHomeButtonContainer} display={'flex'} >
            <Link to={'/projects'} style={{ textDecoration: 'none' }}>
              <StyledButton size='large' variant="outlined" >Check out my Projects!</StyledButton>
            </Link>
            <Box sx={{display: {xs: 'none', lg: 'flex'}, width: '300px', marginLeft: '5rem'}}>
              <img src={illustration} alt="illustration" />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box display={'flex'} flexDirection={'column'} justifyContent={'center'}>
        <Skills />
      </Box>
      <Box >
        <ProjectSection />
      </Box>
      <Box display={'flex'} justifyContent={'center'} flexDirection={'column'}>
        <ContactSection />
      </Box>
      <Box mt={'5em'}>
        <Footer />
      </Box>
    </>
  )
}

export default Home