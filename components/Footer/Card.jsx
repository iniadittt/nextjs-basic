import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard({ question, answer }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className="lg:shadow-md lg:w-full lg:px-4 lg:my-8">
        <CardActions disableSpacing>
            <CardContent>
                <Typography variant="body2" color="text.secondary" className="lg:text-gray-800 lg:font-medium lg:text-base lg:font-poppins">
                    {question}
                </Typography>
            </CardContent>
            <ExpandMore expand={expanded} onClick={handleExpandClick} aria-expanded={expanded} aria-label="selengkapnya">
                <ExpandMoreIcon />
            </ExpandMore>
        </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
                <Typography paragraph className="lg:px-2 lg:text-base lg:font-normal lg:leading-relaxed lg:font-poppins">
                    {answer}
                </Typography>
            </CardContent>
        </Collapse>
    </Card>
  );
}
