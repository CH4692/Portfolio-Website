import { Divider, Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'
import { FaReact, FaJava, FaHtml5, FaCss3, FaPython, FaGithub, FaBitbucket, FaDocker, FaConfluence, FaNode, FaAws, FaGit } from 'react-icons/fa'
import { SiJavascript, SiJirasoftware, SiCplusplus, SiSelenium } from 'react-icons/si'
import React from 'react'

const iconSize = '40px'
const Skills = () => {
    return (
        <>
            <Box display={'flex'}>
                <Box flex={1} p={2}>
                    <Divider >
                        <Stack direction='row' gap={1}>
                            <Typography variant='h6' color={'primary.dark'}>
                                About
                            </Typography>
                            <Typography variant='h6'>
                                Charles
                            </Typography>
                        </Stack>
                    </Divider>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br />
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, <br /> <br />

                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo <br />
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse <br /><br />

                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat <br />
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br />

                    </Typography>
                </Box>
                <Box flex={1}  p={2} display={'flex'} justifyContent={'center'} >
                    <Box mt={'70px'}  width={'300px'} height={'300px'} borderRadius={100} position={'relative'}>
                        < FaReact style={{ fontSize: iconSize, position: 'absolute', top: '50%', left:'0', transform: 'translate(-50%, -50%)'}} />
                        < FaJava style={{ fontSize: iconSize, position: 'absolute', top: '50%', left:'100%', transform: 'translate(-50%, -50%)'}} />
                        < SiJavascript style={{ fontSize: iconSize, position: 'absolute', top: '0', left:'50%', transform: 'translate(-50%, -50%)' }} />
                        < FaHtml5 style={{ fontSize: iconSize, position: 'absolute', top: '100%', left:'50%', transform: 'translate(-50%, -50%)' }} />
                        < FaCss3 style={{ fontSize: iconSize, position: 'absolute', top: '20%', left:'90%', transform: 'translate(-50%, -50%)' }} />
                        < FaPython style={{ fontSize: iconSize, position: 'absolute', top: '85%', left:'85%', transform: 'translate(-50%, -50%)' }} />
                        < FaGithub style={{ fontSize: iconSize, position: 'absolute', top: '15%', left:'15%', transform: 'translate(-50%, -50%)' }} />
                        < FaBitbucket style={{ fontSize: iconSize, position: 'absolute', top: '85%', left:'15%', transform: 'translate(-50%, -50%)' }} />
                        < SiJirasoftware style={{ fontSize: iconSize, position: 'absolute', top: '50%', left:'20%', transform: 'translate(-50%, -50%)' }} />
                        < FaDocker style={{ fontSize: iconSize, position: 'absolute', top: '20%', left:'50%', transform: 'translate(-50%, -50%)' }} />
                        < FaConfluence style={{ fontSize: iconSize, position: 'absolute', top: '30%', left:'30%', transform: 'translate(-50%, -50%)' }} />
                        < FaNode style={{ fontSize: iconSize, position: 'absolute', top: '30%', left:'70%', transform: 'translate(-50%, -50%)' }} />
                        < SiCplusplus style={{ fontSize: iconSize, position: 'absolute', top: '70%', left:'30%', transform: 'translate(-50%, -50%)' }} />
                        < SiSelenium style={{ fontSize: iconSize, position: 'absolute', top: '75%', left:'50%', transform: 'translate(-50%, -50%)' }} />
                        < FaAws style={{ fontSize: iconSize, position: 'absolute', top: '50%', left:'80%', transform: 'translate(-50%, -50%)' }} />
                        < FaGit style={{ fontSize: iconSize, position: 'absolute', top: '70%', left:'70%', transform: 'translate(-50%, -50%)' }} />
                        <Typography color={'primary.dark'} fontWeight={'bold'} sx={{ fontSize: '20px', position: 'absolute', top: '50%', left:'50%', transform: 'translate(-50%, -50%)'}} variant='p'>My Skills</Typography>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Skills