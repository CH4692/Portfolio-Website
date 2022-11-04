import { ContactPage, EmojiPeople, HomeRepairService } from '@mui/icons-material'
import { AppBar, Toolbar, styled, Typography, Button } from '@mui/material'
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


const Navbar = () => {

    return (
        <>
            <AppBar position='sticky'>
                <StyledToolbar sx={{ display: 'flex' }}>
                    <Link to={'/home'} style={{ textDecoration: 'none' }}>
                        <StyledLogo >
                            <Typography sx={{ fontFamily: 'Lemon, cursive' }} variant='h4'>CH</Typography>
                        </StyledLogo>
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
                </StyledToolbar>
            </AppBar >
        </>
    )
}

export default Navbar