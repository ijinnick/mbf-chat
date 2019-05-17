import React, {Component, Fragment} from 'react';
import {Route, withRouter} from 'react-router-dom';
import Cookies from 'universal-cookie';

import Login from '../login/Login';
import Main from '../main/Main';
import Nav from '../nav/Nav';

import './Routing.css';

const cookies = new Cookies();

class Routing extends Component{

    render(){

        const content = Array.isArray(cookies.get('userData')) ? 
                        <Fragment>
                            <Route path="/Main" component={() => 
                            <Fragment>
                                <Nav /> 
                                <Main data={cookies.get('userData')}/>
                            </Fragment>
                            } /> 
                        </Fragment>
                        : <Route path="/" exact component={() => <Login />} />

        return (
            <Fragment>
                {content}
            </Fragment>
        );
    }

}

export default withRouter(Routing);