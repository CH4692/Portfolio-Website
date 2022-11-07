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
    <Card className={props.className} sx={{ maxWidth: 400, color: 'primary.contrastText', bgcolor: 'primary.light' }}>
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
        <Typography variant="body2" sx={{color: 'primary.contrastText'}}>
          {props.children}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton sx={{color: 'primary.contrastText'}} aria-label="">
          < FaReact />
        </IconButton>
        <IconButton sx={{color: 'primary.contrastText'}}>
          < SiJavascript />
        </IconButton >
        <IconButton sx={{color: 'primary.contrastText'}}>
          < FaHtml5 />
        </IconButton>
        <IconButton sx={{color: 'primary.contrastText'}}>
          < FaCss3 />
        </IconButton>
        <IconButton sx={{color: 'primary.contrastText'}}>
          < FaPython />
        </IconButton>

      </CardActions>
    </Card>
  );
}
