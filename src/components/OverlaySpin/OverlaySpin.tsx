import { Space, Spin } from "antd";
import React from "react";
import "./OverlaySpin.css";

export function OverlaySpin() {
    
    return (
        <React.Fragment>
            <div className="overlay-fixed"></div>
            <Space size="middle" className="spin-div">
                <Spin size="large" />
            </Space>
        </React.Fragment>
    );
}