import { Button, Divider, Typography } from '@mui/material'
import { Box } from '@mui/system'
import './Skills.css'
import React, { useState } from 'react'
import ControlledAccordions from './Accordion'
import SkillsAnimator from './SkillsAnimator'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { StyledButton } from '../Pages/Home'


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
                        <Typography variant='h5' fontWeight={'bold'} color={'primary.dark'}>
                            Charles
                        </Typography>
                    </Divider>
                    <ControlledAccordions />
                </Box>
                <Box flex={1} p={2} display={'flex'} justifyContent={'center'} >
                    <SkillsAnimator rollout={rollout} toggleScatter={toggleScatter} iconColor={iconColor} />
                </Box>
            </Box>
            <Box sx={{display:'flex', alignItems: 'center', justifyContent: 'center', width:'100%', mt:'70px'}}>
                <StyledButton size='large' variant="outlined" endIcon={< InfoOutlinedIcon />}>
                    For more Info
                </StyledButton>
            </Box>
        </>
    )
}


export default Skills