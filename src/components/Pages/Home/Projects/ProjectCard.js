import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { FaCss3, FaHtml5, FaPython, FaReact } from 'react-icons/fa';
import { SiJavascript } from 'react-icons/si';



export default function ProjectCard(props) {

  return (
    <Card className={props.className} sx={{ maxWidth: 400, color: '#2196f3', bgcolor: '#e3f2fd' }}>
      <CardHeader
        title={props.title}
      />
      <CardMedia
        component="img"
        height="270"
        image={props.image}
        alt={props.alt}
      />
      <CardContent >
        <Typography variant="body2" color="primary">
          {props.children}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton color={'primary'} aria-label="">
          {/* Icons come here */}
          < FaReact />
        </IconButton>
        <IconButton color={'primary'}>
          < SiJavascript />
        </IconButton >
        <IconButton color={'primary'}>
          < FaHtml5 />
        </IconButton>
        <IconButton color={'primary'}>
          < FaCss3 />
        </IconButton>
        <IconButton color={'primary'}>
          < FaPython />
        </IconButton>

      </CardActions>
    </Card>
  );
}
