import React, { Component } from 'react';
import Fon from './Fon';
import Video from './Video';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';
// import Dropdown from 'react-bootstrap/Dropdown';
// import ButtonGroup from 'react-bootstrap/ButtonGroup';
// import Button from 'react-bootstrap/Button';
// import { Link } from "react-router-dom";



class Main extends Component {
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
          <>
            <Fon />
            <Video />
          </>
        );
      }
    }
    
export default Main;