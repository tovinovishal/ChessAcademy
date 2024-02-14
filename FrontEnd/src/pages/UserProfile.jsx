import '../assets/css/UserProfile.css';
import CustomNavbar from '../components/CustomNavbar';
import Admin from '../assets/images/a2.jpg';
import {Box} from "@mui/material";

const Profile = () => {
    return (
        <div className="par_class">
          <header>
            <CustomNavbar/>
          </header>
              <h1 className='profile__head'>
                  Profile
              </h1>
              <div className="pa_un" >
              <div className='underline'>
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
              
              <div className='profile__container'>
                <p className='profile__para'>UserName:</p> <p style={{fontSize:20}}>user123</p> <p style={{color:'blue'}}>edit</p>
                <br/> 
                <p className='profile__para'>Email: </p><p style={{fontSize:20}}>sample123@mail.com</p> <p style={{color:'blue'}}>edit</p>
                 <br/>
                <p className='profile__para'>Address:</p><p style={{fontSize:20}}>123, sample address, 12345</p> <p style={{color:'blue'}}>edit</p>
                <br/>
                <p className='profile__para'>College:</p><p style={{fontSize:20}}>skcet </p><p style={{color:'blue'}}>edit</p>
              </div>
        </div>
        </div>
        </div>
    );
};

export default Profile;