import { Box, Divider, Typography } from '@mui/material'
import './ProjectSection.css'
import React from 'react'
import ProjectCard from './ProjectCard'
import mockup1 from '../../images/mockup-1.jpg'

const ProjectsSection = () => {
    return (
        <>
            <Box display={'flex'} sx={{ pt: '11em' }}>
                <Box flex={1} p={2}>
                    <Divider >
                        <Typography variant='h5' fontWeight={'bold'} color={'primary.dark'}>
                            Projects
                        </Typography>
                    </Divider>
                </Box>
            </Box>
            <Box width='100%' pt='4em' display={'flex'} className='projectContainer'>
                <Box className='card-container1'>
                    <ProjectCard className='card' title='Project 1' image={mockup1}>
                        This impressive paella is a perfect party dish and a fun meal to cook
                        together with your guests. Add 1 cup of frozen peas along with the mussels,
                        if you like.
                    </ProjectCard>
                    <ProjectCard className='card' title='Project 3' image={mockup1}>
                        This impressive paella is a perfect party dish and a fun meal to cook
                        together with your guests. Add 1 cup of frozen peas along with the mussels,
                        if you like.
                    </ProjectCard>
                </Box>
                <Box className='card-container2'>
                    <ProjectCard className='card' title='Project 2' image={mockup1}>
                        This impressive paella is a perfect party dish and a fun meal to cook
                        together with your guests. Add 1 cup of frozen peas along with the mussels,
                        if you like.
                    </ProjectCard>
                    <ProjectCard className='card' title='Project 4' image={mockup1}>
                        This impressive paella is a perfect party dish and a fun meal to cook
                        together with your guests. Add 1 cup of frozen peas along with the mussels,
                        if you like.
                    </ProjectCard>
                </Box>
            </Box>
        </>
    )
}

export default ProjectsSection