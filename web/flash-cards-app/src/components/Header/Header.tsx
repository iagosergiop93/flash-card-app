import React from 'react';
import { PageHeader, Button } from 'antd';

type HeaderProps = {
    title: string
}

export function Header(props: HeaderProps) {

    const buttons = [
        <Button>Button 1</Button>,
        <Button>Button 2</Button>,
        <Button>Button 3</Button>
    ];

    return (
        <PageHeader
          title={props.title}
          extra={buttons}
          >

        </PageHeader>
    );
}