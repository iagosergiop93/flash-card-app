import React from 'react';
import './Login.css';
import { Form, Input, Button } from 'antd';
import { validatePasswd, validateUsername } from '../../utils/validateFields';
import { UserService } from '../../services/userService';
import { OverlaySpin } from '../../components/OverlaySpin/OverlaySpin';
import { BrowserNavigator } from '../../utils/navigators/browserNavigator';

type LoginProps = {
    userService: UserService
}

export class Login extends React.Component<LoginProps, any> {

    constructor(props: LoginProps) {
        super(props);
        this.state = {
            username: "",
            passwd: "",
            loading: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit= this.handleSubmit.bind(this);
    }

    componentDidMount() {
        if(this.props.userService.isUserLoggedIn()) {
            BrowserNavigator.prototype.navigateTo('/dashboard');
        }
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
            validateUsername(this.state.username);
            validatePasswd(this.state.passwd);
            this.props.userService.login(this.state.username, this.state.passwd)
                .then(res => {
                    this.setState({ loading: false });
                    BrowserNavigator.prototype.navigateTo('/dashboard');
                })

        } catch (err) {
            console.log(err);
            this.setState({ loading: false });
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