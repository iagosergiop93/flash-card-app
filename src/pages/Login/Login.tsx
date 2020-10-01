import { Form, Input, Button } from 'antd';
import './Login.css';
import React from 'react';
import { validatePasswd, validateUsername } from '../../utils/validateFields';
import { UserService } from '../../services/userService';

type LoginProps = {
    userService: UserService
}

export class Login extends React.Component<LoginProps, any> {

    constructor(props: LoginProps) {
        super(props);
        this.state = {
            username: "",
            passwd: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit= this.handleSubmit.bind(this);
    }

    handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        
        this.setState(() => ({ [name]: value }));
    }

    handleSubmit() {
        try {
            validateUsername(this.state.username);
            validatePasswd(this.state.passwd);
            this.props.userService.login(this.state.username, this.state.passwd)
                .then()

        } catch (err) {
            console.log(err);
        }
    }

    render() {
        return (
            <div className="login-container">
                <span className="title">Sign in</span>
                <Form layout="vertical">
                    <Form.Item label="Username">
                        <Input name="username" onChange={this.handleChange} />
                    </Form.Item>
                    <Form.Item label="Password">
                        <Input name="passwd" onChange={this.handleChange} />
                    </Form.Item>
                    <Form.Item className="button-container">
                        <Button type="primary" size="middle" onClick={this.handleSubmit} block>Submit</Button>
                    </Form.Item>
                </Form>
            </div>
        );
    }

}