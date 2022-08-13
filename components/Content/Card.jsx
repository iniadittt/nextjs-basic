import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard({ linkImage, altImage, titleCard, descCard }) {
  return (
    <Card sx={{ maxWidth: 345 }} className="shadow-md">
      <CardActionArea>
        <CardMedia
          component="img"
          height="100"
          image={linkImage}
          alt={altImage}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" className="lg:font-poppins lg:font-semibold lg:text-lg lg:mb-4 lg:text-gray-800">
            {titleCard}
          </Typography>
          <Typography variant="body2" color="text.secondary" className="lg:h-24 lg:font-poppins lg:text-sm lg:text-gray-800">
            {descCard}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
