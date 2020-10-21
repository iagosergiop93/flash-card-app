import React, { useEffect, useState } from 'react';
import './Login.css';
import { Form, Input, Button } from 'antd';
import { validatePasswd, validateUsername } from '../../utils/validateFields';
import { UserService } from '../../services/userService';
import { OverlaySpin } from '../../components/OverlaySpin/OverlaySpin';
import { BrowserNavigator } from '../../utils/navigators/browserNavigator';

type LoginProps = {
    userService: UserService
}

export function Login(props: LoginProps) {

    const [username, setUsername] = useState('');
    const [passwd, setPasswd] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if(props.userService.isUserLoggedIn()) {
            BrowserNavigator.prototype.navigateTo('/dashboard');
        }
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>, setter: any) => {
        const target = event.target;
        const value = target.value;
        setter(value);
    }

    const handleSubmit = () => {
        setLoading(true);
        try {
            validateUsername(username);
            validatePasswd(passwd);
            props.userService.login(username, passwd)
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

    return (
        <div className="login-container">
            <span className="title">Sign in</span>
            <Form layout="vertical">
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