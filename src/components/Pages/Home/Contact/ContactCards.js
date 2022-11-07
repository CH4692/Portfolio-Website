import { Button, CardContent, Link, Typography } from '@mui/material'
import ChatIcon from '@mui/icons-material/Chat';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import { Box } from '@mui/system'
import React, { useEffect } from 'react'
import './ContactCards.css'

const ContactCards = () => {

    useEffect(() => {
        (function () {
            document.querySelector(".chat-button").addEventListener("click", function () {
                window.tidioChatApi.show();
                window.tidioChatApi.open();
            });
        })();
       
    }, [])

    const contactCards = {
        backgroundColor: 'white',
        width: '350px',
        height: '300px',
        border: 1,
        borderRadius: 8,
        borderColor: 'primary.light'
    }

    return (
        <Box className='contact-cards' >
            <Box sx={contactCards}>
                <CardContent>
                    <Typography textAlign={'center'} sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        <ChatIcon sx={{ color: 'primary.light', fontSize: '64px' }} />
                    </Typography>
                    <Typography textAlign={'center'} variant="h4" component="div">
                        Chat
                    </Typography>
                    <Typography textAlign={'center'} variant="body1" mt={'30px'}>
                        Start a chat with me now.
                    </Typography>
                </CardContent>
                <Box display={'flex'} justifyContent={'center'} mt={'20px'}>
                    <Button className='chat-button' sx={{ textTransform: 'capitalize', bgcolor:'primary.main' }} variant='contained' size="large">to livechat</Button>
                </Box>
            </Box>
            <Box sx={contactCards}>
                <CardContent>
                    <Typography textAlign={'center'} sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        <ContactMailIcon fontSize='large' sx={{ color: 'primary.light', fontSize: '64px' }} />
                    </Typography>
                    <Typography textAlign={'center'} variant="h4" component="div">
                        Mail
                    </Typography>
                    <Typography textAlign={'center'} variant="body1" mt={'30px'}>
                        Send a nice message in a Mail.
                    </Typography>
                </CardContent>
                <Box display={'flex'} justifyContent={'center'} mt={'20px'} >
                    <Link href="mailto:charles.heller@hotmail.de">
                        <Button sx={{ textTransform: 'capitalize', bgcolor:'primary.main' }} variant='contained' size="large">to mail</Button>
                    </Link>
                </Box>
            </Box>
        </Box>
    )
}

export default ContactCards