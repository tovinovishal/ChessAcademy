import HomeIcon from '@mui/icons-material/Home';
import ContactsIcon from '@mui/icons-material/Contacts';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import LogoutIcon from '@mui/icons-material/Logout';
import {Box} from "@mui/material";
import { Sidenav, Nav } from 'rsuite';
import '../assets/css/Sidebar.css';
import Admin from '../assets/images/a2.jpg';
import {Link } from 'react-router-dom';
import { Container, Content} from 'rsuite';
const CustomSide = () =>{
  
    return(
      <Container>
      <Sidenav appearance='subtle' defaultOpenKeys={['3', '4']} style={{height: 860,width:'20%', position:'fixed',backgroundColor: '#0f0c29'}}>
      <Box mb="25px">
      <Box display="flex" justifyContent="center" alignItems="center">
        <img 
        alt="profile-user"
        width="100px"
        height="100px"
        src={Admin}
        style={{cursor:"pointer",borderRadius:"50px",marginTop:"50px"}}
        />
        </Box>
        </Box>
        <h3 style={{textAlign:"center",color:"yellow",marginBottom:"10px"}}>Elza</h3>
      <Sidenav.Body>
        <Nav activeKey="1">
          <Nav.Item eventKey="1" style={{display: 'flex', flexDirection: 'row',alignItems:'center'}}>
          <HomeIcon />
            <span><Link to='/chart'>Dashboard</Link></span>
          </Nav.Item>
          <Nav.Item eventKey="2" style={{display: 'flex', flexDirection: 'row',alignItems:'center'}}>
          <ContactsIcon/>
          <span> <Link to='/table'>Contacts Information</Link></span>
          </Nav.Item>
          <Nav.Item eventKey="3" style={{display: 'flex', flexDirection:'row',alignItems:'center'}}>
          <PermIdentityIcon/>
          <span><Link to="/pform">Profile Form</Link></span>
          </Nav.Item>
          <Nav.Item eventKey="4" style={{display: 'flex', flexDirection: 'row',alignItems:'center'}}>
          <HelpOutlineIcon/>
          <span><Link to="/faq">FAQ Page</Link></span>
          </Nav.Item>
          <Nav.Item eventKey="1" style={{display: 'flex', flexDirection: 'row',alignItems:'center'}}>
          <LogoutIcon/>
          <span><Link to="/login">Logout</Link></span>
          </Nav.Item>
        </Nav>
      </Sidenav.Body>
    </Sidenav>
    <Container>

          <Content>
            
          </Content>
        </Container>

  
    </Container>
 
    );
}
export default CustomSide;