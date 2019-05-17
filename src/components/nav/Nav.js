import React, {Component, Fragment} from 'react';
import {Link, Redirect} from 'react-router-dom';
import Cookies from 'universal-cookie';

import FormControl from 'react-bootstrap/FormControl';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';

import './Nav.css';

const cookies = new Cookies();

class Navigation extends Component{
    constructor(props){
        super(props);

        this.state = {redirect: false}
    }

    handleClick = () => {
        cookies.remove('userData');

        if(!cookies.get('userData')){
            this.setState({
                redirect: true
            });
        }
            
    }

    render(){

        const redirect = this.state.redirect ? <Redirect to="/" /> : null;

        return (
            <Fragment>
                {redirect}
                <Navbar bg="primary" variant="dark">
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Link to="/Main" className="nav-link">Home</Link>
                        <Link to="/About" className="nav-link">About</Link>
                        <Link to="/Chat" className="nav-link">Chat Rooms</Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-info">Search</Button>
                    </Form>
                <Button onClick={this.handleClick} variant="success" className="logout_btn_styling">Logout</Button>
                </Navbar>
            </Fragment>
        );
    }

}

export default Navigation;