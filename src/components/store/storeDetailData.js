import react from 'react';
import {ShopOutlined, StarOutlined} from "@ant-design/icons";
import React from "react";

function StoreDetailData(props) {

    return (
        <div style={{justifyContent: "space-between", display: "flex", height: 100}}>
            <div style={{justifyContent: "start", display: "flex", alignItems: "center"}}>
                <ShopOutlined style={{fontSize: 24}}/>
                <p style={{margin: "0 10 0 10", fontSize: 20}}>Products:</p>
                <p style={{fontSize: 20, color: '#df0e0e'}}>10</p>
            </div>
            <div style={{justifyContent: "start", display: "flex", alignItems: "center",marginLeft:40}}>
                <StarOutlined  style={{fontSize: 24}}/>
                <p style={{margin: "0 10 0 10", fontSize: 20}}>Rating:</p>
                <p style={{fontSize: 20, color: '#df0e0e'}}>4.9</p>
            </div>
        </div>
    )


}

export default StoreDetailData;