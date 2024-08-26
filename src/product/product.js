import React from "react";
import {Button} from "antd";
import axios from "axios";

function Product() {

    const getProduct = () => {
        const token = localStorage.getItem('token');
        console.log('Token:', token);
        // 发送带有 Authorization 头的 GET 请求
        axios.get('http://localhost:3003/user/hello', {
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
    }

    return (
        <div>
            <h1>Product</h1>
            <Button onClick={getProduct}>获取产品</Button>
        </div>
    );
}
export default Product;