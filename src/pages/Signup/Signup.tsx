import { Form, Input, Button } from 'antd';
import './Signup.css';
import React, { useState } from 'react';
import { OverlaySpin } from '../../components/OverlaySpin/OverlaySpin';
import { validateUser } from '../../utils/validateFields';
import { UserService } from '../../services/userService';
import { User } from '../../entities/User';
import { BrowserNavigator } from '../../utils/navigators/browserNavigator';

type SignupProps = {
    userService: UserService
}

export function Signup(props: SignupProps) {
    
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [passwd, setPasswd] = useState('');
    const [loading, setLoading] = useState(false);
    

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>, setter: any) => {
        const target = event.target;
        const value = target.value;
        setter(value);
    }

    const handleSubmit = () => {
        setLoading(true);
        try {
            const user: User = createUserFromState();
            props.userService.createUser(user)
                .then(res => {
                    setLoading(false);
                    if(res.status > 200 && res.status < 300) {
                        BrowserNavigator.prototype.navigateTo('/dashboard');
                    }
                })
        } catch (err) {
            console.log(err);
            setLoading(false);
        }
    }

    const createUserFromState = () => {
        let user: User = {
            firstName,
            lastName,
            username,
            passwd,
            email
        };
        validateUser(user);

        return user;
    }

    return (
        <div className="login-container">
            <span className="title">Sign up</span>
            <Form layout="vertical">
                <Form.Item label="First Name">
                    <Input name="firstName" onChange={(e) => handleChange(e, setFirstName)} />
                </Form.Item>
                <Form.Item label="Last Name">
                    <Input name="lastName" onChange={(e) => handleChange(e, setLastName)} />
                </Form.Item>
                <Form.Item label="Email">
                    <Input name="email" onChange={(e) => handleChange(e, setEmail)} />
                </Form.Item>
                <Form.Item label="Username">
                    <Input name="username" onChange={(e) => handleChange(e, setUsername)} />
                </Form.Item>
                <Form.Item label="Password">
                    <Input name="passwd" type="password" onChange={(e) => handleChange(e, setPasswd)} />
                </Form.Item>
                <Form.Item className="button-container">
                    <Button type="primary" size="middle" onClick={handleSubmit} block>Submit</Button>
                </Form.Item>
            </Form>
            { loading ? <OverlaySpin /> : undefined }
        </div>
    );

}