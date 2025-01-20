import React, { useState } from 'react';
import './Login.css';
import { Button, Form, Input } from 'antd';
import axios from 'axios';
import {useNavigate} from "react-router-dom";

const Register = () => {
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate(); // Initialize useNavigate

    // Handles the form submission
    const onFinish = (values) => {
        setLoading(true); // Start loading
        axios.post(`${process.env.REACT_APP_API_BASE_URL}/user/register`, {
            username: values.username,
            password: values.password,
        })
            .then(response => {
                console.log(response);
                setLoading(false); // Stop loading when the request completes
                navigate('/login'); // Navigate to login page on successful registration
            })
            .catch(error => {
                console.error('Registration failed:', error);
                setLoading(false); // Stop loading on error
            });
    };

    // Handles the form submission failure
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
        setLoading(false); // Stop loading on submission failure
    };

    return (
        <div className="centered-container">
            <Form
                name="register"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    label="Confirm Password"
                    name="confirm"
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                        { required: true, message: 'Please confirm your password!' },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(new Error('The two passwords that you entered do not match!'));
                            },
                        }),
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    wrapperCol={{ offset: 8, span: 16 }}
                >
                    <Button type="primary" htmlType="submit" loading={loading}>
                        Register
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default Register;

