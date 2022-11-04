import { Box, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const StyledLogoIcon = {
    color: 'whitesmoke',
    borderRadius: '100%',
    backgroundColor: '#2196f3',
    width: '60px',
    height: '60px',
    marginTop: '22px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    mb: '0.5rem',
}

const Logo = () => {
    return (
        <>
            <Link to={'/home'} style={{ textDecoration: 'none' }}>
                <Box sx={StyledLogoIcon}>
                    <Typography sx={{fontFamily: 'Lemon, cursive'}} variant='h5'>CH</Typography>
                </Box>
            </Link>
        </>
    )
}

export default Logo