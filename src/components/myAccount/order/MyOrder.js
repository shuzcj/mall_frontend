import react, {useState} from 'react';
import SettlementCard from "../../card/SettlementCard";
import OrderCard from "../../card/OrderCard";
import {calc} from "antd/es/theme/internal";

function MyOrder() {

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

    return (
        <div style={{width: '100%'}}>

            {
                [1, 2, 3, 4, 5].map((item, index) => (
                    <div style={{margin: 20, width: calc('100%' - 40)}} key={index}>
                        <OrderCard cardInfo={cardInfo}/>
                    </div>
                ))
            }
        </div>
    )
}

export default MyOrder;