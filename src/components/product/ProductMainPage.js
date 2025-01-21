import React, { useState, useEffect } from "react";
import {Avatar, Breadcrumb, Button, Carousel, Image} from "antd";
import axios from "axios";
import "./ProductMainPage.css";
import TopBar from "../header/TopBar";
import { ShopOutlined } from "@ant-design/icons";
import ImagesDisplay from "./ImagesDisplay";
import DetailDisplay from "./DetailDisplay";
import Comment from "./Comment";
import useAuthCheck from "../hooks/useAuthCheck";
import {useNavigate, useParams} from "react-router-dom";

function ProductMainPage(props) {
    const { productId } = useParams();
    const [imageUrls, setImageUrls] = useState([]);
    const {userInfo, statusCode} = useAuthCheck();
    const [count, setCount] = useState(1);
    const [productInfo, setProductInfo] = useState(null);
    const [businessInfo, setBusinessInfo] = useState(null);
    const apiBaseUrl = process.env.REACT_APP_BACKEND_API_URL;
    const navigate = useNavigate(); // Create navigate instance

    useEffect(() => {
        // Assume these are the image URLs you get from an API
        const fetchedImageUrls = [
            '/temp/img.png',
            '/temp/img_1.png',
            '/temp/img_1.png','/temp/img_1.png','/temp/img_1.png','/temp/img_1.png'

        ];
        setImageUrls(fetchedImageUrls);
    }, []); // Empty dependency array to run only once on component mount


    useEffect(() => {

        if (statusCode === null) {
            // Wait for auth check to complete
            return;
        }

        if (statusCode === 401) {
            console.log("Unauthorized! Redirect to login or display an error.");
            return;
        }

        if(statusCode === 200) {
            const token = localStorage.getItem('token');
            axios.get(apiBaseUrl+'/product/'+productId, {headers: {'Authorization': `Bearer ${token}`}})
                .then(response => {
                    console.log( response.data);
                    setProductInfo(response.data.data);
                })
                .catch(error => {
                    console.error(error);
                });
        }
    }, [statusCode])

    useEffect(()=>{
        if (!productInfo) {
            return;
        }
        console.log(productInfo);
        const token = localStorage.getItem('token');
        axios.get(apiBaseUrl+'/user/'+productInfo.userId, {headers: {'Authorization': `Bearer ${token}`}})
            .then(response => {
                console.log( response.data);
                setBusinessInfo(response.data.data);
            })
            .catch(error => {
                console.error(error);
            });
    },[productInfo])


    return (
        <div>
            <header className="header">
                <TopBar userName={userInfo ? userInfo.userName : ""}/>
            </header>
            <div className="content">
                <Breadcrumb style={{ margin: '16px 0' }}
                            items={[
                                { title: <a href='/main'>Home</a> },
                                props.url && { title: <a href={props.url}>{props.urlName}</a> },
                                { title: productInfo?productInfo.name:'' }
                            ].filter(item => item)} // This filter removes any undefined or false items
                />


                <div className="item"
                     style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
                    <div style={{ display: "flex", alignItems: "center", marginLeft: 10 }}>
                        <Avatar shape="square" size={48} />
                        <div style={{ marginLeft: "10px", fontSize: 20 }}>{businessInfo?businessInfo.userName:''} 's shop</div>
                    </div>
                    <Button style={{ marginRight: 10, fontSize: 18 }} href={businessInfo ? '/store/' + businessInfo.id : ''}>
                        <ShopOutlined /> Entry
                    </Button>
                </div>


                <div className="item" style={{ marginTop: 20, padding: 10,display:"flex",justifyContent:'space-between' }}>
                    <ImagesDisplay imageUrls={productInfo?productInfo.imageUrls.split(','):[]} />
                    <DetailDisplay productInfo={productInfo} businessInfo={businessInfo}/>
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
