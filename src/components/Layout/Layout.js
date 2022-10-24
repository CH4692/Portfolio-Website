import { Box, Stack } from '@mui/system'
import React from 'react'
import Leftbar from './Leftbar'
import Navbar from './Navbar'
import Rightbar from './Rightbar'

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
            </Box>
        </div>
    )
}

export default Layout