import { Form, Input, Button } from 'antd';
import './Login.css';
import React from 'react';

export class Login extends React.Component<any, any> {

    constructor(props: any) {
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

        console.log(name, value);
    }

    handleSubmit() {
        console.log('username', this.state.username);
        console.log('passwd', this.state.passwd);
    }

    render() {
        return (
            <div className="login-container">
                <span className="title">Sign in</span>
                <Form layout="vertical">
                    <Form.Item label="Username">
                        <Input placeholder="username" name="username" onChange={this.handleChange} />
                    </Form.Item>
                    <Form.Item label="Password">
                        <Input placeholder="password" name="passwd" onChange={this.handleChange} />
                    </Form.Item>
                    <Form.Item className="button-container">
                        <Button type="primary" size="middle" onClick={this.handleSubmit} block>Submit</Button>
                    </Form.Item>
                </Form>
            </div>
        );
    }

}