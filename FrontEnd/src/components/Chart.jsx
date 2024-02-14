import React from "react";
import ReactApexChart from 'react-apexcharts';
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
import { Container, Content} from 'rsuite'
class Dashbard extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [{
          name: 'Participation',
          data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5]
        }],
        options: {
          chart: {
            height: 350,
            type: 'line',
          },
          forecastDataPoints: {
            count: 7
          },
          stroke: {
            width: 5,
            curve: 'smooth'
          },
          xaxis: {
            type: 'datetime',
            categories: ['1/11/2000', '2/11/2000', '3/11/2000', '4/11/2000', '5/11/2000', '6/11/2000', '7/11/2000', '8/11/2000', '9/11/2000', '10/11/2000', '11/11/2000', '12/11/2000', '1/11/2001', '2/11/2001', '3/11/2001','4/11/2001' ,'5/11/2001' ,'6/11/2001'],
            tickAmount: 10,
            labels: {
              formatter: function(value, timestamp, opts) {
                return opts.dateFormatter(new Date(timestamp), 'dd MMM')
              }
            }
          },
          title: {
            text: 'Events',
            align: 'left',
            style: {
              fontSize: "16px",
              color: '#666'
            }
          },
          fill: {
            type: 'gradient',
            gradient: {
              shade: 'dark',
              gradientToColors: [ '#FDD835'],
              shadeIntensity: 1,
              type: 'horizontal',
              opacityFrom: 1,
              opacityTo: 1,
              stops: [0, 100, 100, 100]
            },
          },
          yaxis: {
            min: -10,
            max: 40
          }
        },
      
      
      };
    }

  

    render() {
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
    <div style={{marginLeft:'60vh',alignItems:'center'}}>
          <div id="chart">
            <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={350} width={1000} />
          </div>
          <div id="html-dist"></div>
        </div>

          <Content>
            
          </Content>
        </Container>

  
    </Container>
 
    );
}
}
export default  Dashbard;