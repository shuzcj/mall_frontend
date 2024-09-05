import React, { useState } from 'react';
import './Login.css';
import { Button, Form, Input } from 'antd';
import axios from 'axios';
const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;
const Login = () => {
    const [loading, setLoading] = useState(false); // 用于管理提交按钮的加载状态

    // 表单提交成功时调用
    const onFinish = (values) => {
        // 发送登录请求
        axios.post(`${apiBaseUrl}/user/login`, {
            username: values.username, // 获取表单中输入的用户名
            password: values.password, // 获取表单中输入的密码
        })
            .then(response => {
                console.log('Login successful:', response);
                console.log('Login successful:', response.data);
                const token = response.data.data; // 假设服务器返回的 JWT token 在 `token` 字段中
                // 将 token 保存到 localStorage 中
                localStorage.setItem('token', token);

                // 调用其他 API
                callHello();
            })
            .catch(error => {
                console.error('Login failed:', error);
            });
    };

    // 带有 JWT 的请求
    const callHello = () => {
        // 从 localStorage 中获取 token
        const token = localStorage.getItem('token');
        console.log('Token:', token);
        // 发送带有 Authorization 头的 GET 请求
        axios.get('${apiBaseUrl}/user/hello', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(response => {
                console.log('Hello API response:', response.data);
            })
            .catch(error => {
                console.error('Hello API failed:', error);
            });
    };

    // 表单提交失败时调用
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div>
            <Form className={'centered-container'}
                  name="basic"
                  labelCol={{
                      span: 8,
                  }}
                  wrapperCol={{
                      span: 16,
                  }}
                  onFinish={onFinish} // 表单成功提交时触发
                  onFinishFailed={onFinishFailed} // 表单提交失败时触发
                  autoComplete="off"
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit" loading={loading}>
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default Login;
