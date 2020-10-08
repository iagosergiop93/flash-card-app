import { Form, Input, Button } from 'antd';
import './Signup.css';
import React from 'react';
import { OverlaySpin } from '../../components/OverlaySpin/OverlaySpin';
import { validateUser } from '../../utils/validateFields';
import { UserService } from '../../services/userService';
import { User } from '../../entities/User';

type SignupProps = {
    userService: UserService
}

export class Signup extends React.Component<SignupProps, any> {

    constructor(props: any) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            username: "",
            passwd: "",
            loading: false
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
        this.setState({ loading: true});
        try {
            const user: User = this.createUserFromState();
            this.props.userService.createUser(user)
                .then(res => {
                    console.log(res);
                    this.setState({ loading: false });
                })
        } catch (err) {
            console.log(err);
            this.setState({ loading: false });
        }
    }

    createUserFromState(): User {
        let user: User = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            username: this.state.username,
            passwd: this.state.passwd,
            email: this.state.email
        };
        validateUser(user);

        return user;
    }

    render() {
        return (
            <div className="login-container">
                <span className="title">Sign up</span>
                <Form layout="vertical">
                    <Form.Item label="First Name">
                        <Input name="firstName" onChange={this.handleChange} />
                    </Form.Item>
                    <Form.Item label="Last Name">
                        <Input name="lastName" onChange={this.handleChange} />
                    </Form.Item>
                    <Form.Item label="Email">
                        <Input name="email" onChange={this.handleChange} />
                    </Form.Item>
                    <Form.Item label="Username">
                        <Input name="username" onChange={this.handleChange} />
                    </Form.Item>
                    <Form.Item label="Password">
                        <Input name="passwd" type="password" onChange={this.handleChange} />
                    </Form.Item>
                    <Form.Item className="button-container">
                        <Button type="primary" size="middle" onClick={this.handleSubmit} block>Submit</Button>
                    </Form.Item>
                </Form>
                { this.state.loading ? <OverlaySpin /> : undefined }
            </div>
        );
    }

}