import React from 'react'
import Img from './Image/Image.jpg'
import Imge from './Image/image2.jpg'
import Ima from './Image/image3.jpg'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './About.css'


function About(){
  return(
    <>
    
       <Navbar className="colour" collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home" className="letter"> AUTOMATED REAL ESTATE SOLUTION. </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
              </Nav>
          <Nav>
            <Nav.Link eventKey={2} href="#memes" className="letter">
              ABOUT US
            </Nav.Link>
          </Nav>
        </Navbar.Collapse> 
      </Container>
    </Navbar>
<CardGroup>
      <Card>                       
        <Card.Img variant="top" src={Img} height='600' width='500' />
        <Card.Body>
          <Card.Title>ABOUT US</Card.Title>
          <Card.Text>
            Snipe technologies Pvt.Ltd.Headquartered at Banglore and a new branch in Mysore is a young dynamic company specialized in advanced IT and
            cloud based services for all technology related industry solutions.
             <br/><br/>
           Today, we are diversified IT and well-being company.This diversity is reflected on our organization,and allows to addressing
              the challenges and needs of people in a unique way.We touch many aspects of people's lives that the true impact of our innovatins is in the 
              combination of our solutions
              
          </Card.Text>
        </Card.Body>
        
      </Card>
      <Card>
        <Card.Img variant="top" src={Ima} height='400' width='500' />
        <Card.Body>
          <Card.Title>CONTACT DETAILS</Card.Title>
          <Card.Text>
        <br/><br/>
          <i class='fas fa-map-marker-alt'></i> - <b>OUR OFFICE</b>
          <div>
            123 anywhere Bangalore
          </div>
           <br/><br/>
            
            📞 - <b>OUR CONTACT</b>
            <div>
            123-456-8757
            </div>
            <br/><br/>

            🌐 - <b>OUR WEBSITE </b>
              <div>
            Snipe@technology.com
            </div>
            <br/><br/>
            
          
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={Imge} height='600' width='500' />
        <Card.Body>
          <Card.Title>YOUR NEW HOME AWAITS</Card.Title>
          <Card.Text>
          Contact us to get best offer from our agents!
          </Card.Text>
        </Card.Body>
        
      </Card>
    </CardGroup>

    </>
  )
}
export default About