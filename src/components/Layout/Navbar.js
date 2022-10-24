import { ContactPage, EmojiPeople, Home, HomeRepairService } from '@mui/icons-material'
import { AppBar, Toolbar, styled, Typography, Button, IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react'
import { Link } from 'react-router-dom';

const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between',
})


const StyledNavListItem = styled(Button)({
    color: 'whitesmoke',
    transition: '0.25s ease-in-out',
    margin: '5px',
    "&:hover": {
        backgroundColor: "#2196f3",
        transform: 'scale(1.07)'
    }
    // THIS MAYBE NEEDS TO BE ADDED FOR MOBILE DEVICES -> TRY OUT AT RELEASE
    // ,
    // "&:focus": {
    //     backgroundColor: "#2196f3",
    //     transform: 'scale(1.07)'
    // },
    // "&:active": {
    //     backgroundColor: "#2196f3",
    //     transform: 'scale(1.07)'
    // }
})

const StyledLogo = styled(Button)({
    color: 'whitesmoke',
    
})

const StyledMenuIcon = styled(MenuIcon)({
    color: 'whitesmoke',
    margin: '5px',
    borderRadius: '10px'
})

const StyledHomeIcon = styled(Home)({
    color: 'whitesmoke',
    margin: '5px',
    borderRadius: '10px'
})

const Navbar = () => {
    return (
        <AppBar position='sticky'>
            <StyledToolbar sx={{display: 'flex'}}>
                <Link to={'/home'} style={{ textDecoration: 'none'}}>
                    <StyledLogo sx={{ display: { xs: 'none', sm: 'block' }}}>
                        <Typography sx={{fontFamily: 'Lemon, cursive'}} variant='h4'>CH</Typography>
                    </StyledLogo>
                    <IconButton sx={{ display: { xs: 'block', sm: 'none' } }}>
                        <StyledHomeIcon  />
                    </IconButton>
                </Link>
                <Toolbar sx={{ display: { xs: 'none', sm: 'flex' } }}>
                    <Link to={'/charles'} style={{ textDecoration: 'none' }}>
                        <StyledNavListItem variant="Text" sx endIcon={<EmojiPeople />}>Charles</StyledNavListItem>
                    </Link>
                    <Link to={'/projects'} style={{ textDecoration: 'none' }}>
                        <StyledNavListItem variant="Text" sx endIcon={<HomeRepairService />}>Projects</StyledNavListItem>
                    </Link>
                    <Link to={'/contact'} style={{ textDecoration: 'none' }}>
                        <StyledNavListItem variant="Text" sx endIcon={<ContactPage />}>Contact</StyledNavListItem>
                    </Link>
                </Toolbar>
                <Toolbar sx={{ display: { xs: 'flex', sm: 'none' } }}>
                    <IconButton>
                        <StyledMenuIcon />
                    </IconButton>
                </Toolbar>
            </StyledToolbar>
        </AppBar>
    )
}

export default Navbar