import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '../assets/css/Card.css';
import CustomNavbar from '../components/CustomNavbar';
import {Link} from 'react-router-dom';


export default function MediaCard() {
  return (
    <div className='whole'> 
      <CustomNavbar/>
      <div className='course_det'>
    <Card sx={{ maxWidth:345,marginBottom:10,maxHeight:380}} className='card_space'>
      <CardMedia
        sx={{ height: 140}}
        image="https://images.unsplash.com/photo-1528819622765-d6bcf132f793?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2hlc3N8ZW58MHx8MHx8fDA%3D"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Chess Fundamentals
        </Typography>
        <Typography variant="body2" color="text.secondary">
         Chess fundamentals are essential principles and concepts that form the foundation of a players understanding and skill in the game of chess.Understand how to set up the chessboard correctly, with each player having a light-colored square on their right-hand side. 
        </Typography>
      </CardContent>
      <CardActions className='enow'>
        <Button size="small"><Link to='/c1'>Enroll Now </Link></Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 345 ,marginBottom:10,maxHeight:380}} className='card_space'>
      <CardMedia
        sx={{ height: 140 }}
        image="https://images.unsplash.com/photo-1580541832626-2a7131ee809f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNoZXNzfGVufDB8fDB8fHww"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          MASTERING MOVEMENTS
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Chess fundamentals are essential principles and concepts that form the foundation of a players understanding and skill in the game of chess.Understand how to set up the chessboard correctly, with each player having a light-colored square on their right-hand side. 
        </Typography>
      </CardContent>
      <CardActions className='enow'>
        <Button size="small"><Link to='/c1'>Enroll Now</Link></Button>
      </CardActions>
    </Card>


    <Card sx={{ maxWidth: 345,marginBottom:10,maxHeight:380 }} className='card_space'>
      <CardMedia
        sx={{ height: 140 }}
        image="https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hlc3N8ZW58MHx8MHx8fDA%3D"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          TRAIN YOUR TACTICS
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Chess fundamentals are essential principles and concepts that form the foundation of a players understanding and skill in the game of chess.Understand how to set up the chessboard correctly, with each player having a light-colored square on their right-hand side. 
        </Typography>
      </CardContent>
      <CardActions className='enow'>
        <Button size="small"><Link to='/c1'>Enroll Now</Link></Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 345,marginBottom:10,maxHeight:380}} className='card_space'>
      <CardMedia
        sx={{ height: 140 }}
        image="https://images.unsplash.com/flagged/photo-1570551502611-c590dc45f644?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNoZXNzfGVufDB8fDB8fHww"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          MATE IN 1
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Chess fundamentals are essential principles and concepts that form the foundation of a players understanding and skill in the game of chess.Understand how to set up the chessboard correctly, with each player having a light-colored square on their right-hand side. 
        </Typography>
      </CardContent>
      <CardActions className='enow'>
        <Button size="small"><Link to='/c1'>Enroll Now</Link></Button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 345,marginBottom:10,maxHeight:380}} className='card_space'>
      <CardMedia
        sx={{ height: 140 }}
        image="https://img.freepik.com/free-photo/dramatic-chess-piece_23-2151178536.jpg?size=626&ext=jpg&ga=GA1.2.385223952.1707831478&semt=sph"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          MATE IN 1
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Chess fundamentals are essential principles and concepts that form the foundation of a players understanding and skill in the game of chess.Understand how to set up the chessboard correctly, with each player having a light-colored square on their right-hand side. 
        </Typography>
      </CardContent>
      <CardActions className='enow'>
        <Button size="small"><Link to='/c1'>Enroll Now</Link></Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 345,marginBottom:10,maxHeight:380}} className='card_space'>
      <CardMedia
        sx={{ height: 140 }}
        image="https://img.freepik.com/free-vector/chess-beginning-isometric-composition_1284-29763.jpg?size=626&ext=jpg&ga=GA1.1.385223952.1707831478&semt=sph"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          CHESS STRATEGY
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Chess fundamentals are essential principles and concepts that form the foundation of a players understanding and skill in the game of chess.Understand how to set up the chessboard correctly, with each player having a light-colored square on their right-hand side. 
        </Typography>
      </CardContent>
      <CardActions className='enow'>
        <Button size="small"><Link to='/c1'>Enroll Now</Link></Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 345,marginBottom:10,maxHeight:380}} className='card_space'>
      <CardMedia
        sx={{ height: 140 }}
        image="https://img.freepik.com/free-vector/man-woman-teamwork-strategy-business-concept-people-moving-chess-figures-as-metaphor-partnership-creative-solution-plan_575670-256.jpg?size=626&ext=jpg&ga=GA1.1.385223952.1707831478&semt=sph"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Chess for Dummies
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Chess fundamentals are essential principles and concepts that form the foundation of a players understanding and skill in the game of chess.Understand how to set up the chessboard correctly, with each player having a light-colored square on their right-hand side. 
        </Typography>
      </CardContent>
      <CardActions className='enow'>
        <Button size="small"><Link to='/c1'>Enroll Now</Link></Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 345,marginBottom:10,maxHeight:380}} className='card_space'>
      <CardMedia
        sx={{ height: 140 }}
        image="https://img.freepik.com/free-photo/view-chess-pieces-with-dramatic-mystical-background_23-2150844757.jpg?size=626&ext=jpg&ga=GA1.1.385223952.1707831478&semt=sph"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Advanced Tactics
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Chess fundamentals are essential principles and concepts that form the foundation of a players understanding and skill in the game of chess.Understand how to set up the chessboard correctly, with each player having a light-colored square on their right-hand side. 
        </Typography>
      </CardContent>
      <CardActions className='enow'>
        <Button size="small"><Link to='/c1'>Enroll Now</Link></Button>
      </CardActions>
    </Card>
    </div>
    </div>
  );
}

