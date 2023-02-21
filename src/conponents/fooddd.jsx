import React from 'react'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function Food(props) {
  return (

    <Card sx={{ maxWidth: "345px" }} style={{marginTop:"3%", width: "15%"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={props.item.img[0]}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {props.item.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {props.item.desc}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>

  )
}