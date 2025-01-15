import react, {useState} from 'react';
import {Breadcrumb, Button, Result, Spin} from "antd";
import TopBar from "../header/TopBar";
import React from "react";
import {calc} from "antd/es/theme/internal";

function PurchaseResultPage() {


    const [status, setStatus] = useState(2);//0:loading,1:success,2:fail

    return (
        <div>
            <header className="header">
                <TopBar/>
            </header>
            <div className="content">
                <Breadcrumb style={{margin: '16px 0'}}
                            items={[
                                {title: 'Home'},
                                {title: <a href="">Application Center</a>},
                                {title: <a href="">Application List</a>},
                                {title: 'Purchase Confirmation'}
                            ]}
                />

                <div style={{
                    width: calc('100%-40px'),
                    minHeight: 800,
                    borderRadius: 10,
                    backgroundColor: "white",
                    padding: 20,

                }}>
                    {
                        status === 0 ?
                            <div style={{
                                display: "flex",
                                justifyContent: "center", // This will center horizontally
                                alignItems: "center", // This will center vertically
                                height: "200px" // Ensure the height is a string with "px"
                            }}>
                                    <div style={{display:"flex",flexDirection:'column',alignItems:"center"}}>
                                        <Spin size="large"/>
                                        <div style={{fontSize:24,marginTop:20}}>The transaction is in progress, please wait for a moment...</div>
                                    </div>

                            </div>
                            :
                            status === 1 ?
                                <Result
                                    status="success"
                                    title="Successfully Purchased Cloud Server ECS!"
                                    subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
                                    extra={[
                                        <Button type="primary" key="console">
                                            View Order
                                        </Button>,
                                        <Button key="buy">Main Page</Button>,
                                    ]}
                                />
                                :
                                <Result
                                    status="error"
                                    title="Submission Failed"
                                    subTitle="Please check and modify the following information before resubmitting."
                                    extra={[
                                        <Button type="primary" key="console">
                                            Go Console
                                        </Button>,
                                        <Button key="buy">Buy Again</Button>,
                                    ]}
                                />
                    }
                </div>
            </div>
        </div>
    );
}

export default PurchaseResultPage;

