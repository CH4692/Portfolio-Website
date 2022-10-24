import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import WebhookIcon from '@mui/icons-material/Webhook';
import WebIcon from '@mui/icons-material/Web';
import StorageIcon from '@mui/icons-material/Storage';
import AppShortcutIcon from '@mui/icons-material/AppShortcut';

export default function ControlledAccordions() {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div style={{marginTop: '60px'}}>
            <Accordion sx={{bgcolor: 'primary.light'}} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{color: '#fff'}}/>}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                    sx={{color: '#fff'}}
                >
                    <Typography sx={{ width: '33%', flexShrink: 0, textAlign:'center'}}>
                        <WebhookIcon fontSize='medium' sx={{color: '#fff'}}/>
                    </Typography>
                    <Typography fontWeight={'bold'} color={'primary'} sx={{color: '#fff'}} fontSize={'large'}>Software Engineer</Typography>
                </AccordionSummary >
                <AccordionDetails >
                    <Typography sx={{color: '#fff'}}>
                        I'm a accredited software engineer who develops Native Apps,
                        client-side and server-side applications with modern features like<br />
                        SPA (React.js) <br /> <br />
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} sx={{bgcolor: 'primary.light'}}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{color: '#fff'}}/>}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                >
                    <Typography sx={{ width: '33%', flexShrink: 0, textAlign:'center'}}><WebIcon fontSize='medium' sx={{color: '#fff'}}/></Typography>
                    <Typography sx={{color: '#fff', fontWeight:'bold'}} fontSize={'large'}>
                        Frontend
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography sx={{color: '#fff'}}>
                        I place great value and focus on design and security in the frontend and<br />
                        a trustworthy and smart administration as well as maintenance in the backend.<br /><br />
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion sx={{bgcolor: 'primary.light'}} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{color: '#fff'}}/>}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                >
                    <Typography sx={{ width: '33%', flexShrink: 0, textAlign: 'center'}}>
                        <StorageIcon fontSize='medium' sx={{color: '#fff'}}/>
                    </Typography>
                    <Typography sx={{color: '#fff', fontWeight:'bold'}} fontSize={'large'}>
                        Backend
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography sx={{color: '#fff'}}>
                        I build scalable and maintainable server applications using modern <br />
                        technology stacks such as Node.js, Express, and MongoDB.
                        <br />
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion sx={{bgcolor: 'primary.light'}} expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{color: '#fff'}}/>}
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                >
                    <Typography sx={{ width: '33%', flexShrink: 0, textAlign:'center' }}><AppShortcutIcon fontSize='medium' sx={{color: '#fff'}}/></Typography>
                    <Typography sx={{color: '#fff', fontWeight:'bold'}} fontSize={'large'}>
                        Native Apps
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography sx={{color: '#fff'}}>
                        I build mobile Apps and Native Apps.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
