import { Box, Stack } from '@mui/system'
import React from 'react'
import Leftbar from './Leftbar'
import MobileNavbar from './MobileNavbar'
import Navbar from './Navbar'
import Rightbar from './Rightbar'
import isMobile from './UseCheckMobileScreen'

const Layout = (props) => {
    return (
        <div>
            <Box>
                <Navbar/>
                <Stack direction='row' justifyContent='space-between'>
                    <Leftbar />
                    {props.children}
                    <Rightbar />
                </Stack>
                {isMobile() && <MobileNavbar/> }
            </Box>
        </div>
    )
}

export default Layout