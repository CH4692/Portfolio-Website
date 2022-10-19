import { Divider, Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'
import { FaReact, FaJava, FaHtml5, FaCss3, FaPython, FaGithub, FaBitbucket, FaDocker, FaConfluence, FaNode, FaAws, FaGit } from 'react-icons/fa'
import { SiJavascript, SiJirasoftware, SiCplusplus, SiSelenium } from 'react-icons/si'
import './Skills.css'
import React, { useState } from 'react'

const Skills = () => {
    const [rollout, setRollout] = useState('')

    const toggleScatter = () => {
        setRollout((prev) => {
            return prev ? '' : 'rollout'
        })
    }

    const iconColor = { color: '#4dabf5' }

    return (
        <>
            <Box className='about-skills' display={'flex'}>
                <Box flex={1} p={2}>
                    <Divider >
                        <Stack direction='row' gap={1}>
                            <Typography variant='h6' color={'primary.dark'}>
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
                <Box flex={1} p={2} display={'flex'} justifyContent={'center'} >
                    <Box mt={'70px'} width={'300px'} height={'300px'} borderRadius={100} position={'relative'}>
                        < FaReact className={`icon-all react-icon ${rollout}`} style={iconColor} />
                        < FaJava className={`icon-all java-icon ${rollout}`} style={iconColor} />
                        < SiJavascript className={`icon-all js-icon ${rollout}`} style={iconColor} />
                        < FaHtml5 className={`icon-all html-icon ${rollout}`} style={iconColor} />
                        < FaCss3 className={`icon-all css-icon ${rollout}`} style={iconColor} />
                        < FaPython className={`icon-all python-icon ${rollout}`} style={iconColor} />
                        < FaGithub className={`icon-all github-icon ${rollout}`} style={iconColor} />
                        < FaBitbucket className={`icon-all bitbucket-icon ${rollout}`} style={iconColor} />
                        < SiJirasoftware className={`icon-all jira-icon ${rollout}`} style={iconColor} />
                        < FaDocker className={`icon-all docker-icon ${rollout}`} style={iconColor} />
                        < FaConfluence className={`icon-all confluence-icon ${rollout}`} style={iconColor} />
                        < FaNode className={`icon-all node-icon ${rollout}`} style={iconColor} />
                        < SiCplusplus className={`icon-all cplusplus-icon ${rollout}`} style={iconColor} />
                        < SiSelenium className={`icon-all selenium-icon ${rollout}`} style={iconColor} />
                        < FaAws className={`icon-all aws-icon ${rollout}`} style={iconColor} />
                        < FaGit className={`icon-all git-icon ${rollout}`} style={iconColor} />
                        <Box className='myskill-text' color={'primary.dark'} fontWeight={'bold'}>
                            <Typography onClick={toggleScatter} className='myText' variant='p'>My Skills</Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Skills