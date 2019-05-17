import React from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';

import './Main.css';

const main = (props) => {

    return (
        <Jumbotron>
            <h1>Hello, {props.data[0].value} {props.data[1].value}!</h1>
            <p>
                This is a simple hero unit, a simple jumbotron-style component for calling
                extra attention to featured content or information. <br/>
                You're email address is {props.data[2].value}
            </p>
            <p>
                <Button variant="primary">Learn more</Button>
            </p>
        </Jumbotron>
    );
}

export default main;