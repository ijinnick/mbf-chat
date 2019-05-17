import React,{Component} from 'react';
import Cookies from 'universal-cookie';
import {Redirect} from 'react-router-dom';

import Jumbotron from 'react-bootstrap/Jumbotron';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import './Login.css';
 
const cookies = new Cookies();

class Login extends Component{
    constructor(...args) {
        super(...args);
    
        this.state = { 
            validated: false, 
            formData: [],
            redirect: false
        };
      }
    
      handleSubmit(event) {
        const form = event.currentTarget;

        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }else{
            event.preventDefault();
            
            var form_data = document.querySelector('#login_form');

            var serializeArray = function (form_data) {

                // Setup our serialized data
                var serialized = [];
            
                // Loop through each field in the form
                for (var i = 0; i < form_data.elements.length; i++) {
            
                    var field = form_data.elements[i];
            
                    // Don't serialize fields without a name, submits, buttons, file and reset inputs, and disabled fields
                    if (!field.name || field.disabled || field.type === 'file' || field.type === 'reset' || field.type === 'submit' || field.type === 'button') continue;
            
                    // If a multi-select, get all selections
                    if (field.type === 'select-multiple') {
                        for (var n = 0; n < field.options.length; n++) {
                            if (!field.options[n].selected) continue;
                            serialized.push({
                                name: field.name,
                                value: field.options[n].value
                            });
                        }
                    }
            
                    // Convert field data to a query string
                    else if ((field.type !== 'checkbox' && field.type !== 'radio') || field.checked) {
                        serialized.push({
                            name: field.name,
                            value: field.value
                        });
                    }
                }
            
                return serialized;
            
            };
            var data = serializeArray(form_data);
            cookies.set('userData', data,{ path: '/' });
            
            this.setState({redirect: true, formData: data});

        }
        this.setState({ validated: true});
      }

    render(){

        const { validated } = this.state; 
        let toRender = '';

        const loginCard = (
            <Jumbotron className="login_styling">
                    <Form
                        id="login_form"
                        noValidate
                        validated={validated}
                        onSubmit={e => this.handleSubmit(e)}
                        className="form_styling"
                    >
                        <Form.Row>
                            <Form.Group as={Col} md="12" controlId="validationCustom01">
                                <Form.Label>First name</Form.Label>
                                <Form.Control
                                required
                                type="text"
                                name="fname"
                                placeholder="First name"
                                defaultValue=""
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please enter your First name.
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} md="12" controlId="validationCustom02">
                                <Form.Label>Last name</Form.Label>
                                <Form.Control
                                required
                                type="text"
                                name="lname"
                                placeholder="Last name"
                                defaultValue=""
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please enter your Last name.
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} md="12" controlId="validationCustomUsername">
                                <Form.Label>Email Address</Form.Label>
                                <InputGroup>
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                    type="text"
                                    name="email"
                                    placeholder="Email Address"
                                    aria-describedby="inputGroupPrepend"
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please enter your Email Address.
                                </Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                        </Form.Row>
                        <Form.Group>
                            <Form.Check
                                required
                                label="Agree to terms and conditions"
                                feedback="You must agree before submitting."
                            />
                        </Form.Group>
                        <Form.Row>
                            <Button type="submit" variant="success" style={{margin: '0 auto'}}>Submit form</Button>
                        </Form.Row>
                    </Form>   
                </Jumbotron>
        );

        toRender = this.state.redirect ? <div>{alert('it was redirected')} <Redirect to="/Main" /></div>: loginCard
        return (
            <div>
                {toRender}
            </div>
        );
    }
}

export default Login;