import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { styled } from '@mui/material/styles';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { MdDelete } from "react-icons/md";
import { MdBookmarkAdded } from "react-icons/md";
import { addToBasket, deleteFromBasket } from '../../redux/feature/basket/basketSlice';
import { useDispatch } from 'react-redux';


const ExpandMore  = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
  variants: [
    {
      props: ({ expand }) => !expand,
      style: {
        transform: 'rotate(0deg)',
      },
    },
    {
      props: ({ expand }) => !!expand,
      style: {
        transform: 'rotate(180deg)',
      },
    },
  ],
}));

export default function Box({item}) {
  const [expanded, setExpanded] = React.useState(false);
  const dispatch = useDispatch();

  const handleExpandClick  = () => {
    setExpanded(!expanded);
  };

  const handleAddToBasket = () => {
    dispatch (addToBasket(item));
  };

  const handleRemove = () => {
    dispatch(deleteFromBasket(item));
  };


  return (

    <Card className='main-card' sx={{ maxWidth: 345 }}>
      <CardHeader className='card-header'
        avatar={
          <Avatar className='avatar' sx={{ bgcolor: red[500] }} aria-label="recipe">
            {item.rating.rate}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MdBookmarkAdded onClick= {handleAddToBasket} />
          </IconButton>
        }
        title={item.category}
        subheader="September 14, 2016"
      />
      <CardMedia className='cards-media'
        component="img"
        height="200"
        image={item.image}
        alt="Paella dish"
      />
      <CardContent>
        <Typography className='card-typo' variant="body2" sx={{ color: 'text.secondary' }}>
        {item.description}
        </Typography>
      </CardContent>
      <CardActions className='card-action' disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
        <MdDelete onClick={handleRemove} />
          
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography sx={{ marginBottom: 2 }}>Method:</Typography>
          <Typography sx={{ marginBottom: 2 }}>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
            aside for 10 minutes.
          </Typography>
          <Typography sx={{ marginBottom: 2 }}>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
            medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
            occasionally until lightly browned, 6 to 8 minutes. 
          </Typography>
          <Typography sx={{ marginBottom: 2 }}>
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is absorbed,
            15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
            mussels, tucking them down into the rice, and cook again without
            stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don&apos;t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}


// const Box = ({item}) => {
//   return (
//     <div className='box' style={{height: '300px', width: '300px'}}>
//         <img src={item.image} alt="" style={{width:'100%', height:'200px'}} />
//         <h5>{item.title}</h5>
//         <p>{item.description}</p>
      
//     </div>
//   )
// }

// export default Box
