import react, {useState} from 'react';
import {Image} from "antd";

function OrderCard(props){

    return (
        <div style={{borderRadius:10,padding:20,border:'solid 1px ',borderColor:'#dfdfdf',height:200,
            width:'100%',
            boxSizing: 'border-box'  // This includes padding and border in the width
        }}>
            <div style={{display:"flex",justifyContent:"start",alignItems:"center"}}>
                <Image width={24} height={24} src={props.cardInfo.storeAvatar}/>
                <div style={{fontSize:20,marginLeft:10}} >{props.cardInfo.storeName}</div>

            </div>
            <div style={{display:"flex",justifyContent:"space-between"}}>
                <div style={{display:"flex",justifyContent:'start'}}>
                    <Image width={120} height={120} src={props.cardInfo.productImage}/>
                    <div style={{marginLeft:20,fontSize:24}}>{props.cardInfo.productName}</div>
                </div>
                <div style={{fontSize:32}}>
                    <div style={{color:'#ff6041'}}>
                        price : {props.cardInfo.price}
                    </div>
                    <div >
                        count : {props.cardInfo.quantity}
                    </div>
                    <div>
                        total price : {props.cardInfo.totalPrice}
                    </div>
                </div>
                <div style={{fontSize:32}}>

                    <div>
                        order status : {props.cardInfo.orderStatus}
                    </div>
                    <div >
                        detail
                    </div>
                </div>
            </div>
        </div>
    )
}
export default OrderCard;