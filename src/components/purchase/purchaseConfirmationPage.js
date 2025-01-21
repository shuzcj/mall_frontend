import react, {useEffect, useState} from "react";
import TopBar from "../header/TopBar";
import {Breadcrumb, Button} from "antd";
import React from "react";
import { Typography } from 'antd';
import SettlementCard from "../card/SettlementCard";
import {calc} from "antd/es/theme/internal";
import OrderCard from "../card/OrderCard";
import {useLocation} from "react-router-dom";
import useAuthCheck from "../hooks/useAuthCheck";
import axios from "axios";
const { Title } = Typography;

function PurchaseConfirmationPage(props) {

    const location = useLocation();

    const orderInfo = location.state.orderInfo;
    const {userInfo, statusCode} = useAuthCheck();
    const apiBaseUrl = process.env.REACT_APP_BACKEND_API_URL;

    useEffect(() => {
        console.log(location.state)
        //ToDo: if the orderInfo is null, redirect to the previous page
        var totalPrice = 0;
        for(let i = 0; i < orderInfo.length; i++){
            totalPrice += orderInfo[i].totalPrice;
        }
        setTotalPrice(totalPrice);
    }, [location.state])

    const confirm=()=>{
        console.log("confirm")
        console.log(orderInfo)
        var orderItems = []
        for(let i = 0; i < orderInfo.length; i++){
            orderItems.push({
                productId: orderInfo[i].productId,
                quantity: orderInfo[i].quantity
            })
        }
        axios.post(apiBaseUrl + '/order', {
            userId:userInfo.id,
            orderItems:orderItems
        }).then(res=>{
            console.log(res.data)
        })
    }

    const [totalPrice, setTotalPrice] = useState(0)
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
                                { title: 'Purchase Confirmation' }
                            ]}
                />

                <div style={{
                    width: calc('100%-40px'),
                    minHeight: 800,
                    borderRadius: 10,
                    backgroundColor: "white",
                    padding: 20,

                }}>
                    <Title style={{marginLeft:20}} level={3}>Purchase Confirmation</Title>

                    <Title style={{marginLeft:20}} level={4}>Address</Title>

                    <div style={{justifyContent: "start", display: "flex",marginLeft:20}}>
                        <div style={{fontSize: 24,color:'#9f9f9f'}}>address123456</div>
                        <div style={{marginLeft: 40}}><Button>Edit</Button></div>
                    </div>
                    <div style={{marginTop: 20}}>
                        {
                            orderInfo.map((item, index) => (
                                <div style={{margin: 20, width: calc('100%' - 40)}} key={index}>
                                    <SettlementCard cardInfo={item}/>
                                </div>
                            ))
                        }
                    </div>
                    <div style={{marginTop: 20, marginRight: 40}}>
                        <div style={{textAlign: "end", fontSize: 32,margin:20}}>Total Price : {totalPrice}</div>

                        <div style={{textAlign:"end",margin:20}}>
                            <Button  style={{width:200,height:80,fontSize:32,color:"white"}} type={'primary'} onClick={()=>confirm()}>confirm</Button>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
}


export default PurchaseConfirmationPage;





