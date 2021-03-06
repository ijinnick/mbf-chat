import React from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';

// import './About.css';

const ChatRoom = (props) => {

    return (
        <Jumbotron>
            <h1>Hello, this is the Chat Room!</h1>
            <p>
                This is a simple hero unit, a simple jumbotron-style component for calling
                extra attention to featured content or information. <br/>
            </p>
            <p>
                <Button variant="primary">Learn more</Button>
            </p>
        </Jumbotron>
    );
}

export default ChatRoom;