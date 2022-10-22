import { Box, Typography } from '@mui/material'
import React from 'react'
import { FaReact, FaJava, FaHtml5, FaCss3, FaPython, FaGithub, FaBitbucket, FaDocker, FaConfluence, FaNode, FaAws, FaGit } from 'react-icons/fa'
import { SiJavascript, SiJirasoftware, SiCplusplus, SiSelenium } from 'react-icons/si'
import { StyledSkillsAnimator, StyledSkilltTextContainer } from './SkillsStyled'

const SkillsAnimator = (props) => {
    return (
        <Box mt={'50px'} width={'300px'} height={'300px'} borderRadius={100} position={'relative'}>
            < FaReact className={`icon-all react-icon ${props.rollout}`} style={props.iconColor} />
            < FaJava className={`icon-all java-icon ${props.rollout}`} style={props.iconColor} />
            < SiJavascript className={`icon-all js-icon ${props.rollout}`} style={props.iconColor} />
            < FaHtml5 className={`icon-all html-icon ${props.rollout}`} style={props.iconColor} />
            < FaCss3 className={`icon-all css-icon ${props.rollout}`} style={props.iconColor} />
            < FaPython className={`icon-all python-icon ${props.rollout}`} style={props.iconColor} />
            < FaGithub className={`icon-all github-icon ${props.rollout}`} style={props.iconColor} />
            < FaBitbucket className={`icon-all bitbucket-icon ${props.rollout}`} style={props.iconColor} />
            < SiJirasoftware className={`icon-all jira-icon ${props.rollout}`} style={props.iconColor} />
            < FaDocker className={`icon-all docker-icon ${props.rollout}`} style={props.iconColor} />
            < FaConfluence className={`icon-all confluence-icon ${props.rollout}`} style={props.iconColor} />
            < FaNode className={`icon-all node-icon ${props.rollout}`} style={props.iconColor} />
            < SiCplusplus className={`icon-all cplusplus-icon ${props.rollout}`} style={props.iconColor} />
            < SiSelenium className={`icon-all selenium-icon ${props.rollout}`} style={props.iconColor} />
            < FaAws className={`icon-all aws-icon ${props.rollout}`} style={props.iconColor} />
            < FaGit className={`icon-all git-icon ${props.rollout}`} style={props.iconColor} />
            <Box sx={StyledSkilltTextContainer} color={'primary.dark'} fontWeight={'bold'}>
                <Typography onClick={props.toggleScatter} sx={StyledSkillsAnimator} variant='p'>My Skills</Typography>
            </Box>
        </Box>
    )
}

export default SkillsAnimator