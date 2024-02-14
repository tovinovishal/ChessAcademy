import { Navbar, Nav } from 'rsuite';
import HomeIcon from '@rsuite/icons/legacy/Home';
import { Link } from 'react-router-dom';
import '../assets/css/Home.css';

const CustomNavbar = () => {
    return (
        <div className="bo">
            <Navbar appearance='default'>
            <Navbar.Brand href="#">
  <img
    alt="Chess Logo"
    src="https://cdn.pixabay.com/photo/2022/07/17/19/30/queen-7328205_640.png"
    width="25"
    height="25"
    className="d-inline-block align-top"
  /> CHESS ACADEMY
</Navbar.Brand>
    <Nav>
      <Nav.Item icon={<HomeIcon />}> <Link to={`/home`}>Home</Link></Nav.Item>
      <Nav.Item>   <Link to={`/about`}> About</Link></Nav.Item>
      <Nav.Item>   <Link to={`/contact`}>Contact</Link></Nav.Item>
      <Nav.Item>   <Link to={`/card`}>Courses</Link></Nav.Item>
      <Nav.Item>   <Link to={`/institute`}>Institutes</Link></Nav.Item>
     <Nav.Item> <Link to={`/login`}>Logout</Link></Nav.Item>
    </Nav>
    <Nav pullRight>
    <Nav.Item> <Link to={`/userprofile`}>Profile</Link></Nav.Item>
    </Nav>
  </Navbar>
        </div>
    );
}

export default CustomNavbar;