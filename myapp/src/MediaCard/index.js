import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
//type
export default function MediaCard({ card }) {
  return (
    <Card sx={{ maxWidth: 250, margin: 1 }}>
      <CardContent>
      <Typography gutterBottom variant="h5" component="div">
          {card.name}
        </Typography>
      <CardMedia
        component="img"
        height="140"
        image="https://s.yimg.com/ny/api/res/1.2/uJp_B3Ok_K3po7hfe0HoBQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MA--/https://media.zenfs.com/en/moneywise_327/45769fabfadaf729489c1d4c3e7b4778"
        alt="green iguana"
      />
        <Typography gutterBottom variant="h7" component="div">
          {card.type}
        </Typography>
        
        <Typography variant="body2" color="text.secondary">
          {card.text}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
