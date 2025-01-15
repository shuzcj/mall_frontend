import react, {useState} from "react";
import TopBar from "../header/TopBar";
import {Breadcrumb, Button} from "antd";
import React from "react";
import { Typography } from 'antd';
import SettlementCard from "../card/SettlementCard";
import {calc} from "antd/es/theme/internal";
import OrderCard from "../card/OrderCard";
const { Title } = Typography;

function PurchaseConfirmationPage(props) {
    const [cardInfo, setCardInfo] = useState(
        {
            storeAvatar: "/temp/cat.jpg",
            storeName: "storeName",
            productName: "productName",
            productImage: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
            price: "100",
            quantity: "2",
            totalPrice: "200",
            orderTime: "orderTime",
            orderStatus: "orderStatus",

        }
    )

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
                            [1, 2, 3].map((item, index) => (
                                <div style={{margin: 20, width: calc('100%' - 40)}} key={index}>
                                    <SettlementCard cardInfo={cardInfo}/>
                                </div>
                            ))
                        }
                    </div>
                    <div style={{marginTop: 20, marginRight: 40}}>
                        <div style={{textAlign: "end", fontSize: 32,margin:20}}>Total Price : {totalPrice}</div>
                        <div style={{textAlign: "end", fontSize: 32,margin:20}}>Account Balance : 100000</div>
                        <div style={{textAlign:"end",margin:20}}>
                            <Button  style={{width:200,height:80,fontSize:32,color:"white"}} type={'primary'}>check out</Button>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
}


export default PurchaseConfirmationPage;





