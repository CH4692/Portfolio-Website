import { BottomNavigation, BottomNavigationAction, Box } from '@mui/material'
import { EmojiPeople, HomeRepairService } from '@mui/icons-material'
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import ChatIcon from '@mui/icons-material/Chat';
import React, { useEffect } from 'react'
import Logo from './Logo'
import { Link } from 'react-router-dom';


const styledBottomNav = {
  width: '100%',
  bottom: '0.5rem',
  position: 'fixed',
  zIndex: '100',
}


const MobileNavbar = () => {

  const [value, setValue] = React.useState(0);
  const iconColor = 'grey'



  const activeIcon = {
    bottom: '2.5rem',
    borderRadius: '100%',
    backgroundColor: 'primary.contrastText',
    height: '75px',
    maxWidth: '70px',
    boxShadow: '-5px -28px 16px -11px rgba(0,0,0,0.0.7)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }

  useEffect(() => {
    (function () {
      function onTidioChatApiReady() {
        window.tidioChatApi.hide();
        window.tidioChatApi.on("close", function () {
          window.tidioChatApi.hide();
        });
      }

      if (window.tidioChatApi) {
        window.tidioChatApi.on("ready", onTidioChatApiReady);
      } else {
        document.addEventListener("tidioChat-ready", onTidioChatApiReady);
      }
    })();
  }, [])


  return (
    <>
      <Box sx={styledBottomNav}>
        <BottomNavigation sx={{ backgroundColor: 'primary.contrastText', mr: '0.5rem', ml: '0.5rem', boxShadow: '0px -2px 15px -6px #000000' }}
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="About" icon={<Link to={'/charles'} style={{ textDecoration: 'none', color: iconColor }}><EmojiPeople /></Link>} />
          <BottomNavigationAction label="Projects" icon={<Link to={'/projects'} style={{ textDecoration: 'none', color: iconColor }}>< HomeRepairService /></Link>} />
          <BottomNavigationAction sx={activeIcon} label="Home" icon={< Logo />} />
          <BottomNavigationAction label="Chat" icon={<Link to={'/contact'} style={{ textDecoration: 'none', color: iconColor }}><ChatIcon /> </Link>} />
          <BottomNavigationAction label="Email" icon={<Link onClick={(e) => {
            window.location.href = 'mailto:charles.heller@hotmail.de';
            e.preventDefault();
          }} style={{ textDecoration: 'none', color: iconColor }}><AlternateEmailIcon /> </Link>} />
        </BottomNavigation>
      </Box>
    </>
  )
}

export default MobileNavbar