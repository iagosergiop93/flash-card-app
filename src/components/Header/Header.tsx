import React from 'react';
import "./Header.css";
import { PageHeader, Button } from 'antd';
import { UserService } from '../../services/userService';

type HeaderProps = {
    title: string
}

export function Header(props: HeaderProps) {

    const userService = UserService.Factory();

    const buttons = [
        <Button key="1">Button 1</Button>,
        <Button key="2">Button 2</Button>,
        <Button key="3" onClick={userService.logout}>Logout</Button>
    ];

    return (
        <PageHeader title={props.title} extra={buttons} className="pageheader"></PageHeader>
    );
}