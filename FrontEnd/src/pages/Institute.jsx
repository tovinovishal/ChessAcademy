import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CustomNavbar from '../components/CustomNavbar';
import '../assets/css/Institute.css';

export default function Institute() {
  const institute1 = {
    name: "FIDE Academy",
    address: "123 Main Street, Chennai, TamilNadu, 600010",
    contactNumber: "123-456-7890",
  };
  const institute2 = {
    name: "QueensTown Academy",
    address: "OMR Street, Kannur,Kerala,641008",
    contactNumber: "103-457-7890",
  };
  const institute3 = {
    name: "Monford Academy",
    address: "Cross cut Main Street, Coimbatore, TamilNadu, 638000",
    contactNumber: "523-456-7012",
  };
  const institute4 = {
    name: "Dizx Academia",
    address: "10 GH Street, Banglore, Karnataka,560018",
    contactNumber: "98424-68560",
  }
  const institute5 = {
    name: "Chi-Square Academy",
    address: "7th Hub,Mumbai,560018",
    contactNumber: "98424-68560",
  }
  const institute6 = {
    name: "QuinLand Academy",
    address: "RKV Road,Erode,TamilNadu,638006",
    contactNumber: "9658462564",
  }

  const institute7 = {
    name: "Kings BB",
    address: "Airport Road,Kochi,Kerala,541005",
    contactNumber: "8945231052",
  }
  const institute8 = {
    name: "Royal Queen",
    address: "Near Bell Industry,Trichy,TamilNadu,641008",
    contactNumber: "9842424650",
  }
  


  return (
    <div className='wholepage'> 
      <CustomNavbar/>
      <div className='course_details'>
        <Card className='cardspace'>
          <CardMedia
            sx={{ height: 400}}
            image="https://img.freepik.com/premium-photo/chess-classroom_236854-15963.jpg?w=1060"
            title="green iguana"
          />
          <CardContent>
            <Typography variant="body2" color="black" className="institute-info">
              <strong>Institute:</strong> {institute1.name}<br />
              <strong>Address:</strong> {institute1.address}<br />
              <strong>Contact Number:</strong> {institute1.contactNumber}
            </Typography>
          </CardContent>
        </Card>    
        <Card className='cardspace'>
          <CardMedia
            sx={{ height: 400}}
            image="https://img.freepik.com/free-photo/people-playing-giant-chess-campus_23-2147679100.jpg?size=626&ext=jpg&ga=GA1.1.385223952.1707831478&semt=ais"
            title="green iguana"
          />
          <CardContent>
            <Typography variant="body2" color="black" className="institute-info">
              <strong>Institute:</strong> {institute2.name}<br />
              <strong>Address:</strong> {institute2.address}<br />
              <strong>Contact Number:</strong> {institute2.contactNumber}
            </Typography>
          </CardContent>
        </Card>    

        <Card className='cardspace'>
          <CardMedia
            sx={{ height: 400}}
            image="https://img.freepik.com/premium-vector/brilliant-strategy-business-teamwork-tiny-character-people_121223-1839.jpg?size=626&ext=jpg&ga=GA1.1.385223952.1707831478&semt=ais"
            title="green iguana"
          />
          <CardContent>
            <Typography variant="body2" color="black" className="institute-info">
              <strong>Institute:</strong> {institute3.name}<br />
              <strong>Address:</strong> {institute3.address}<br />
              <strong>Contact Number:</strong> {institute3.contactNumber}
            </Typography>
          </CardContent>
        </Card>    

        <Card className='cardspace'>
          <CardMedia
            sx={{ height: 400}}
            image="https://img.freepik.com/premium-photo/chess-figures_266732-15931.jpg?size=626&ext=jpg&ga=GA1.1.385223952.1707831478&semt=ais"
            title="green iguana"
          />
          <CardContent>
            <Typography variant="body2" color="black" className="institute-info">
              <strong>Institute:</strong> {institute4.name}<br />
              <strong>Address:</strong> {institute4.address}<br />
              <strong>Contact Number:</strong> {institute4.contactNumber}
            </Typography>
          </CardContent>
        </Card>    

        <Card className='cardspace'>
          <CardMedia
            sx={{ height: 400}}
            image="https://img.freepik.com/premium-vector/business-coworkers-executives_18591-41933.jpg?size=626&ext=jpg&ga=GA1.1.385223952.1707831478&semt=ais"
            title="green iguana"
          />
          <CardContent>
            <Typography variant="body2" color="black" className="institute-info">
              <strong>Institute:</strong> {institute5.name}<br />
              <strong>Address:</strong> {institute5.address}<br />
              <strong>Contact Number:</strong> {institute5.contactNumber}
            </Typography>
          </CardContent>
        </Card> 

         <Card className='cardspace'>
          <CardMedia
            sx={{ height: 400}}
            image="https://img.freepik.com/free-vector/hand-drawn-business-strategy-concept_23-2149171055.jpg?size=626&ext=jpg&ga=GA1.1.385223952.1707831478&semt=ais"
            title="green iguana"
          />
          <CardContent>
            <Typography variant="body2" color="black" className="institute-info">
              <strong>Institute:</strong> {institute6.name}<br />
              <strong>Address:</strong> {institute6.address}<br />
              <strong>Contact Number:</strong> {institute6.contactNumber}
            </Typography>
          </CardContent>
        </Card> 

         <Card className='cardspace'>
          <CardMedia
            sx={{ height: 400}}
            image="https://img.freepik.com/free-photo/portrait-brothers-playing-chess-together-outdoors_23-2150266850.jpg?size=626&ext=jpg&ga=GA1.1.385223952.1707831478&semt=ais"
            title="green iguana"
          />
          <CardContent>
            <Typography variant="body2" color="black" className="institute-info">
              <strong>Institute:</strong> {institute7.name}<br />
              <strong>Address:</strong> {institute7.address}<br />
              <strong>Contact Number:</strong> {institute7.contactNumber}
            </Typography>
          </CardContent>
        </Card> 

         <Card className='cardspace'>
          <CardMedia
            sx={{ height: 400}}
            image="https://img.freepik.com/free-photo/player-playing-black-king-chessboard_114579-6026.jpg?size=626&ext=jpg&ga=GA1.1.385223952.1707831478&semt=ais"
            title="green iguana"
          />
          <CardContent>
            <Typography variant="body2" color="black" className="institute-info">
              <strong>Institute:</strong> {institute8.name}<br />
              <strong>Address:</strong> {institute8.address}<br />
              <strong>Contact Number:</strong> {institute8.contactNumber}
            </Typography>
          </CardContent>
        </Card>    

        
        
      </div>
    </div>
  );
}
