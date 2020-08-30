import React , {Component} from 'react'
import {Form, Input} from 'formsy-semantic-ui-react';
import fakeAuth from "fake-auth";
import './login.css'

class Login extends Component{
    
    state={
        name: '',
        email: ''
    }
   
    handleSubmit = () => {
        if(this.state.name.trim() === 'yash' &&  this.state.email.trim() === 'yashjoshi119115@gmail.com'){
            window.appReference && window.appReference.setState({isAuthenticated: true})
            sessionStorage.setItem("isAuthenticated", true)
        }
    }

    handleChange = (event,data) => {
        const name = data.name
        const value = data.value
        this.setState({[name]: value})
    }

    render(){
        return(
            <div className="login-container">
                <div>
                    <h1>Enter Your Credential To Login!</h1>
                </div>
                <Form onValidSubmit={ this.handleSubmit }>
                    <Form.Input
                        name="name"
                        label="Name"
                        onChange={this.handleChange}
                    />

                    <Form.Input
                        name="email"
                        label="Email"
                        validations="isEmail"
                        validationErrors={{ isEmail: 'Email not valid' }}
                        onChange={this.handleChange}
                        // errorLabel={ errorLabel }
                    />
                    <Form.Button content="Subscribe"/>
                </Form>
            </div>
        )
    }
}

export default Login