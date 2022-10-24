import { Divider, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const Footer = () => {
    return (
        <>
            <Divider />
            <Box height={'5em'} display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                <Box>
                    <Typography color={'primary'} variant='p'> © 2022 Mady by Charles Heller.</Typography>
                </Box>
                <Box>
                    
                </Box>
            </Box>
        </>
    )
}

export default Footer