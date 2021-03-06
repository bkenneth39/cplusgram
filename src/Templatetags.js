import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';
import './Templatetags.css'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media : {
    height: 140,
  },
});

export default function MediaCard(props) {
  const classes = useStyles();

  return (
   <div className="cover"> 
    
      <Link to={`/Tags/${props.tagsname}`}>
      <CardActionArea>
        <CardContent>
          <Typography className="tag" gutterBottom variant="h5" component="h2">
            {props.tags}
          </Typography>
          
        </CardContent>
      </CardActionArea>
      <CardActions>
        {/* <Button size="small" color="primary">
          Get Post by Tags
        </Button> */}
      </CardActions>
      </Link>
    
    </div>
  );
}
