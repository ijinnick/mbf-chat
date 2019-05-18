import React, {Component, Fragment} from 'react';
import {Route, withRouter, Redirect} from 'react-router-dom';
import Cookies from 'universal-cookie';

import ChatRoom from '../pages/ChatRoom';
import About from '../pages/About';
import Login from '../login/Login';
import Main from '../main/Main';
import Nav from '../nav/Nav';

import './Routing.css';

const cookies = new Cookies();

class Routing extends Component{

    render(){

        let redirect = '';

        const content = Array.isArray(cookies.get('userData')) ? 
                        <Fragment>
                            <Nav /> 
                            <Route path="/Main" component={() => 
                            <Fragment>
                                <Main data={cookies.get('userData')}/>
                            </Fragment>
                            } /> 
                            <Route path='/About' component={About} />
                            <Route path='/Chat' component={ChatRoom} />
                        </Fragment>
                        : <Route path="/" exact component={() => <Login />} />

        
        if(!cookies.get('userData') && window.location.pathname !== '/')
            redirect = <Redirect to="/" />

        return (
            <Fragment>
                {content}
                {redirect}
            </Fragment>
        );
    }

}

export default withRouter(Routing);