import React from "react";
import {Button, InputNumber, Typography} from 'antd';

const { Title } = Typography;

function DetailDisplay(props) {

    return(
        props.productInfo &&
        <div style={{width: 740}}>
            <div className={'productInfoItem'}>
                <div style={{fontSize: 36}}>name</div>
                <div style={{color: "orange", fontSize: 48, marginLeft: 20}}>{props.productInfo.name}</div>
            </div>
            <div className={'productInfoItem'}>
                <div style={{fontSize: 36}}>price</div>
                <div style={{color: "orange", fontSize: 48, marginLeft: 20}}>{props.productInfo.price}</div>
            </div>
            <div className={'productInfoItem'}>
                <div style={{fontSize: 36}}>Sold</div>
                <div style={{color: "orange", fontSize: 48, marginLeft: 20}}>{props.productInfo.sold}</div>
            </div>
            <div className={'productInfoItem'}>
                <div style={{fontSize: 36}}>Stock</div>
                <div style={{color: "orange", fontSize: 48, marginLeft: 20}}>{props.productInfo.stock}</div>
            </div>

            <div style={{display: 'flex', justifyContent: 'start'}}>
                <div style={{fontSize: 25, fontWeight: 600}}>Quantity</div>
                <InputNumber min={1} max={props.productInfo.stock} defaultValue={1} style={{marginLeft: 20}}/>
            </div>

            <div style={{marginTop: 20}}>

                <Button style={{
                    width: 200,
                    height: 80,
                    borderRadius: 5,
                    backgroundColor: "#FFFFFF",
                    fontWeight: 600,
                    fontSize: 24
                }}>add to cart</Button>

            </div>


        </div>
    )


}

export default DetailDisplay;