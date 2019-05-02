import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';
// import Dropdown from 'react-bootstrap/Dropdown';
// import ButtonGroup from 'react-bootstrap/ButtonGroup';
// import Button from 'react-bootstrap/Button';
// import { Link } from "react-router-dom";



class Header extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isLoggedIn: false
      }
    }
  
    onLogin = () => {
      this.setState({
        isLoggedIn: true
      })
    }
  
    onLogout = () => {
      this.setState({
        isLoggedIn: false
      })
    }

    render() {
        return (
          <header>
            <div>
              <Navbar bg="dark" expand="lg" variant="dark">
                <Navbar.Brand href="/">BAGALA</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link variant="outline-info" href="/">Home</Nav.Link>
                        <Nav.Link variant="outline-info" href="/orders">Orders</Nav.Link>
                        <Nav.Link variant="outline-info" href = "/facultylist/">Faculties</Nav.Link>
                        <Nav.Link variant="outline-info" href="/about/">About Us</Nav.Link>
                    </Nav>
                    <Form inline>
                      <Button variant="outline-success" href="/login/">SIGN IN</Button>
                      <Button variant="outline-success" href="/register/">SIGN UP</Button>
                    </Form>
                </Navbar.Collapse>
              </Navbar>
            </div>
          </header>
        );
      }
    }
    
export default Header;