import { useState } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import ContactsIcon from '@mui/icons-material/Contacts';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import LogoutIcon from '@mui/icons-material/Logout';
import { Box } from "@mui/material";
import { Sidenav, Nav } from 'rsuite';
import { Container, Content } from 'rsuite';
import Admin from '../assets/images/a2.jpg';
import { Link } from 'react-router-dom';

function ProfileForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    phoneNumber: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    if (!formData.address.trim()) {
      errors.address = 'Address is required';
    }
    if (!formData.phoneNumber.trim()) {
      errors.phoneNumber = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phoneNumber)) {
      errors.phoneNumber = 'Phone number is invalid';
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log(formData);
      // Add your form submission logic here
    }
  };

  return (
    <Container>
      <Sidenav appearance='subtle' defaultOpenKeys={['3', '4']} style={{ height: 860, width: '20%', position: 'fixed', backgroundColor: '#0f0c29' }}>
        <Box mb="25px">
          <Box display="flex" justifyContent="center" alignItems="center">
            <img
              alt="profile-user"
              width="100px"
              height="100px"
              src={Admin}
              style={{ cursor: "pointer", borderRadius: "50px", marginTop: "50px" }}
            />
          </Box>
        </Box>
        <h3 style={{ textAlign: "center", color: "yellow", marginBottom: "10px" }}>Elza</h3>
        <Sidenav.Body>
          <Nav activeKey="1">
            <Nav.Item eventKey="1" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <HomeIcon />
              <span>Dashboard</span>
            </Nav.Item>
            <Nav.Item eventKey="2" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <ContactsIcon />
              <span> <Link to='/table'>Contacts Information</Link></span>
            </Nav.Item>
            <Nav.Item eventKey="3" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }} >
              <PermIdentityIcon />
              <span><Link to='/pform'>Profile Form</Link></span>
            </Nav.Item>
            <Nav.Item eventKey="4" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }} >
              <HelpOutlineIcon />
              <span><Link to="/faq">FAQ Page</Link></span>
            </Nav.Item>
            <Nav.Item eventKey="5" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <LogoutIcon />
              <span><Link to='/login'>Logout</Link></span>
            </Nav.Item>
          </Nav>
        </Sidenav.Body>
      </Sidenav>
      <Container>
        <Content style={{marginLeft:"70vh",marginBlockStart:"10%"}}>
          <form onSubmit={handleSubmit}>
            <div style={{width:"100px"}}>
              <label>Name </label>
              <input style={{width:"500px"}}
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              {errors.name && <span style={{ color: 'red' }}>{errors.name}</span>}
            </div><br/>
            <div style={{width:"100px"}}>
              <label>Email </label>
              <input style={{width:"500px"}}
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
            </div><br/>
            <div style={{width:"100px"}}>
              <label>Address </label>
              <input style={{width:"500px"}}
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              />
              {errors.address && <span style={{ color: 'red' }}>{errors.address}</span>}
            </div><br/>
            <div style={{width:"100px"}}>
              <label>Phone Number </label>
              <input style={{width:"500px"}}
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
              {errors.phoneNumber && <span style={{ color: 'red' }}>{errors.phoneNumber}</span>}
            </div><br/>
            <div>
              <button type="submit">Submit</button>
              <button type="button">Cancel</button>
            </div><br/>
          </form>
        </Content>
      </Container>
    </Container>
  );
}

export default ProfileForm;
