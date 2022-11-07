import { Box, Divider, Typography } from '@mui/material'
import React from 'react'
import ContactCards from './ContactCards'
const ContactSection = () => {
    return (
        <>
            <Box display={'flex'} sx={{ pt: '11em' }}>
                <Box flex={1} pt={8} pb={8} bgcolor={'primary.light'}>
                    <Divider >
                        <Typography variant='h4' fontWeight={'bold'} color={'primary.contrastText'}>
                            Contact Me
                        </Typography>
                    </Divider>
                </Box>
            </Box>
            <ContactCards />
        </>
    )
}

export default ContactSection