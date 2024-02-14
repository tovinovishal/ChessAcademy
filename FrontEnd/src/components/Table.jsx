import { useState } from 'react';
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
const TableWithEditOptions = () => {
  const initialData = [
    { id: 1, name: 'John Doe', email: 'john@example.com', gender: 'Male' },
    { id: 2, name: 'Jane Doe', email: 'jane@example.com', gender: 'Female' },
    { id: 3, name: 'Joe', email: 'joe@example.com', gender: 'Male' },
    { id: 4, name: 'Raizak', email: 'raiz@example.com', gender: 'Female' },
    { id: 5, name: 'Mujeeb', email: 'mufasa@example.com', gender: 'Male' }
  ];

  const [data, setData] = useState(initialData);
  const [filter, setFilter] = useState('');

  const handleEdit = (id) => {
    // Implement edit logic (e.g., open a modal for editing)
    console.log(`Edit entry with ID ${id}`);
  };

  const handleRemove = (id) => {
    // Implement remove logic
    setData((prevData) => prevData.filter((entry) => entry.id !== id));
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
    filterData(e.target.value);
  };

  const filterData = (filterText) => {
    const filteredData = initialData.filter((entry) =>
      entry.name.toLowerCase().includes(filterText.toLowerCase())
    );
    setData(filteredData);
  };

  return (

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
            <span> <Link to='/table'>Dashboard</Link></span>
          </Nav.Item>
          <Nav.Item eventKey="2" style={{display: 'flex', flexDirection: 'row',alignItems:'center'}}>
          <ContactsIcon/>
          <span>Contacts Information</span>
          </Nav.Item>
          <Nav.Item eventKey="3" style={{display: 'flex', flexDirection:'row',alignItems:'center'}} >
          <PermIdentityIcon/>
          <span><Link to ="/pform">Profile Form</Link></span>
          </Nav.Item>
          <Nav.Item eventKey="4" style={{display: 'flex', flexDirection: 'row',alignItems:'center'}}>
          <HelpOutlineIcon/>
          <span><Link to ="/faq">FAQ Page</Link></span>
          </Nav.Item>
          <Nav.Item eventKey="1" style={{display: 'flex', flexDirection: 'row',alignItems:'center'}}>
          <LogoutIcon/>
          <span>Logout</span>
          </Nav.Item>
        </Nav>
      </Sidenav.Body>
    </Sidenav>
    <Container>

          <Content style={{width:'50%',marginLeft:'60vh'}}>
          <div style={{ textAlign: 'center', margin: '20px'}}>
      <div style={{ marginBottom: '10px' }}>
        <label>Filter by Name: </label>
        <input type="text" value={filter} onChange={handleFilterChange} />
      </div>
      <table style={{ width: '80%', borderCollapse: 'collapse', margin: '0 auto' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((entry) => (
            <tr key={entry.id} style={{ borderBottom: '1px solid #ddd' }}>
              <td>{entry.id}</td>
              <td>{entry.name}</td>
              <td>{entry.email}</td>
              <td>{entry.gender}</td>
              <td>
                <button onClick={() => handleEdit(entry.id)}>Edit</button>
                <button onClick={() => handleRemove(entry.id)}>Remove</button>
                {/* Add more action buttons as needed */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
          </Content>
        </Container>

  
    </Container>
  );
};

export default TableWithEditOptions;
