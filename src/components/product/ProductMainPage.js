import React, { useState, useEffect } from "react";
import {Avatar, Breadcrumb, Button, Carousel, Image} from "antd";
import axios from "axios";
import "./ProductMainPage.css";
import TopBar from "../header/TopBar";
import { ShopOutlined } from "@ant-design/icons";
import ImagesDisplay from "./ImagesDisplay";
import DetailDisplay from "./DetailDisplay";
import Comment from "./Comment";

function ProductMainPage() {
    // Hook to manage the image URLs
    const [imageUrls, setImageUrls] = useState([]);


    useEffect(() => {
        // Assume these are the image URLs you get from an API
        const fetchedImageUrls = [
            '/temp/img.png',
            '/temp/img_1.png',
            '/temp/img_1.png','/temp/img_1.png','/temp/img_1.png','/temp/img_1.png'

        ];
        setImageUrls(fetchedImageUrls);
    }, []); // Empty dependency array to run only once on component mount

    const getProduct = () => {
        const token = localStorage.getItem('token');
        console.log('Token:', token);

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
            <header className="header">
                <TopBar/>
            </header>
            <div className="content">
                <Breadcrumb style={{margin: '16px 0' }}
                            items={[
                                { title: 'Home' },
                                { title: <a href="">Application Center</a> },
                                { title: <a href="">Application List</a> },
                                { title: 'An Application' }
                            ]}
                />

                <div className="item"
                     style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
                    <div style={{ display: "flex", alignItems: "center", marginLeft: 10 }}>
                        <Avatar shape="square" size={48} />
                        <div style={{ marginLeft: "10px", fontSize: 20 }}>name</div>
                    </div>
                    <Button style={{ marginRight: 10, fontSize: 18 }}><ShopOutlined />entry</Button>
                </div>


                <div className="item" style={{ marginTop: 20, padding: 10,display:"flex",justifyContent:'space-between' }}>
                    <ImagesDisplay imageUrls={imageUrls} />
                    <DetailDisplay />
                </div>

                <div className='item' style={{marginTop:20,padding:10}}>
                    <div style={{fontSize:20,fontWeight:600,margin:10}}>
                        Comments
                    </div>
                    <Comment/>
                    <Comment/>
                </div>



            </div>
        </div>
    );
}

export default ProductMainPage;
