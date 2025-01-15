import React from "react";
import {Button, InputNumber, Typography} from 'antd';
import PurchaseConfirmationModal from "./PurchaseConfirmationModal";
const { Title } = Typography;

function DetailDisplay() {

    return(
        <div style={{width:740}}>
            <Title level={1}>name</Title>
            <Title level={2}>Price </Title>
            <Title level={2}>Sold </Title>
            <Title level={2}>Stock</Title>
            <div style={{display:'flex',justifyContent:'start'}}>
                <div  style={{fontSize:25,fontWeight:600}}>Quantity</div>
                <InputNumber min={1} max={10} defaultValue={1} style={{marginLeft:20}} />
            </div>

            <div style={{marginTop:20}}>

                <Button style={{width:200,height:80,borderRadius:5,backgroundColor:"#FFFFFF",fontWeight:600,fontSize:24}}>add to cart</Button>
                <PurchaseConfirmationModal/>
            </div>


        </div>
    )


}
export default DetailDisplay;