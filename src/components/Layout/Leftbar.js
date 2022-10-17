import { GitHub, Instagram, LinkedIn, YouTube } from '@mui/icons-material'
import { Box, IconButton, Stack, Tooltip, styled, tooltipClasses, Fade } from '@mui/material'
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
      sx={{ display: { xs: 'none', sm: 'flex' }, height: '88vh', justifyContent: 'center', alignItems: 'center' }}>
      <Stack spacing={2} >
        <IconButton sx={hoverIcons}>
          <StyledTooltip title='Github' placement='right-end' disableFocusListener TransitionComponent={Fade} TransitionProps={{ timeout: 600 }}>
            <GitHub sx={hoverIconsChangeColor} color='primary' fontSize='large' />
          </StyledTooltip>
        </IconButton >
        <IconButton sx={hoverIcons}>
          <StyledTooltip title='LinkedIn' placement='right-end' disableFocusListener TransitionComponent={Fade} TransitionProps={{ timeout: 600 }}>
            <LinkedIn sx={hoverIconsChangeColor} color='primary' fontSize='large' />
          </StyledTooltip>
        </IconButton>
        <IconButton sx={hoverIcons}>
          <StyledTooltip title='Instagram' placement='right-end' disableFocusListener TransitionComponent={Fade} TransitionProps={{ timeout: 600 }}>
            <Instagram sx={hoverIconsChangeColor} color='primary' fontSize='large' />
          </StyledTooltip>
        </IconButton>
        <IconButton sx={hoverIcons}>
          <StyledTooltip title='Youtube' placement='right-end' disableFocusListener TransitionComponent={Fade} TransitionProps={{ timeout: 600 }}>
            <YouTube sx={hoverIconsChangeColor} color='primary' fontSize='large' />
          </StyledTooltip>
        </IconButton>
      </Stack>
    </Box>
  )
}

export default Leftbar