import { GitHub, Instagram, LinkedIn, YouTube } from '@mui/icons-material'
import { Box, IconButton, Stack, Tooltip, styled, tooltipClasses, Fade, Link } from '@mui/material'
import './Leftbar.css'
import React from 'react'

const hoverIcons = {
  "&:hover": {
    backgroundColor: '#fff',
  }
}

const hoverIconsChangeColor = {
  transition: '0.25s ease-in-out',
  "&:hover": {
    color: 'skyblue',
    transform: 'translateY(-5px)',
  }
  // ,
  // "&:focus": {
  //   color: 'skyblue',
  //   transform: 'translateY(-5px)',
  // },
  // "&:focus": {
  //   color: 'skyblue',
  //   transform: 'translateY(-5px)',
  // }
}

const StyledTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#e3f2fd',
    color: 'black'
  },
}));


const Leftbar = () => {

  return (
    <Box
      flex={0.25}
      p={2}
      sx={{ display: { xs: 'none', sm: 'flex' }, height: '88vh', justifyContent: 'center', alignItems: 'flex-end' }}>
      <Stack spacing={2} mb={'50px'} sx={{ position: 'fixed' }}>
        <IconButton sx={hoverIcons}>
          <StyledTooltip title='Github' placement='right-end' disableFocusListener TransitionComponent={Fade} TransitionProps={{ timeout: 600 }}>
            <Link href='https://github.com/CH4692' target={'_blank'}>
              <GitHub sx={hoverIconsChangeColor} color='primary' fontSize='large' />
            </Link>
          </StyledTooltip>
        </IconButton >
        <IconButton sx={hoverIcons}>
          <StyledTooltip title='LinkedIn' placement='right-end' disableFocusListener TransitionComponent={Fade} TransitionProps={{ timeout: 600 }}>
            <Link href='https://de.linkedin.com/in/charles-heller-068b53233' target={'_blank'}>
              <LinkedIn sx={hoverIconsChangeColor} color='primary' fontSize='large' />
            </Link>
          </StyledTooltip>
        </IconButton>
        <IconButton sx={hoverIcons}>
          <StyledTooltip title='Instagram' placement='right-end' disableFocusListener TransitionComponent={Fade} TransitionProps={{ timeout: 600 }}>
            <Link href='https://www.instagram.com/ch_46/' target={'_blank'}>
              <Instagram sx={hoverIconsChangeColor} color='primary' fontSize='large' />
            </Link>
          </StyledTooltip>
        </IconButton>
        <IconButton sx={hoverIcons}>
          <StyledTooltip title='Youtube' placement='right-end' disableFocusListener TransitionComponent={Fade} TransitionProps={{ timeout: 600 }}>
            <Link href='https://www.youtube.com' target={'_blank'}>
              <YouTube sx={hoverIconsChangeColor} color='primary' fontSize='large' />
            </Link>
          </StyledTooltip>
        </IconButton>
      </Stack>
    </Box>
  )
}

export default Leftbar