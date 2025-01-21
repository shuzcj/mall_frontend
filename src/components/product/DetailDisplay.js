import React, {useEffect} from "react";
import {Button, InputNumber, Typography} from 'antd';
import {useNavigate} from "react-router-dom";

const { Title } = Typography;

function DetailDisplay(props) {

    const navigate = useNavigate(); // Create navigate instance

    const [orderCardInfo, setOrderCardInfo] = React.useState();
    const [quantity, setQuantity] = React.useState(1);

    useEffect(() => {
        if(props.productInfo && props.businessInfo){
            setOrderCardInfo({
                productId: props.productInfo.id,
                storeAvatar: "/temp/cat.jpg",
                storeName: props.businessInfo.userName,
                productName: props.productInfo.name,
                productImage: props.productInfo.imageUrls.split(',')[0],
                price: props.productInfo.price,
                quantity: quantity,
                totalPrice: props.productInfo.price*quantity,
                orderTime: null,
                orderStatus: null,
            })
        }
    }, [props,quantity]);

    useEffect(()=>{
        console.log("quantity",quantity)
    },[quantity])

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
                <InputNumber min={1} max={props.productInfo.stock+10} value={quantity}
                             onChange={(value)=>{setQuantity(value)}} style={{marginLeft: 20}}/>
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

                <Button style={{
                    width: 200,
                    height: 80,
                    borderRadius: 5,

                    fontWeight: 600,
                    fontSize: 24,
                    marginLeft: 20
                }} type={"primary"} onClick={()=>navigate('/purchaseConfirmation',{state:{orderInfo:[orderCardInfo]}})}>
                    buy now
                </Button>

            </div>


        </div>
    )


}

export default DetailDisplay;