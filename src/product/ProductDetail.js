import React from "react";
import {Button} from "antd";
import axios from "axios";
import "./ProductDetail.css"

import TopBar from "../header/TopBar";

function ProductDetail() {

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
        <div >
            <TopBar/>
            <div className="business">

            </div>

        </div>
    );
}
export default ProductDetail;