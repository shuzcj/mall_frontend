import react from 'react';
import {Image} from "antd";
import {StarFilled} from "@ant-design/icons";
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function ProductCard(props) {

    const imagesBaseUrl=process.env.REACT_APP_BACKEND_API_URL+'/images/products/';
    const navigate = useNavigate(); // Create navigate instance
    return (
        <div
            style={{
            width: 192,
            height: 327,
            backgroundColor: "white",
            border: '1px solid #dcdcdc',
            transition: 'all 0.3s ease-in-out', // Smooth transition for hover effects
            boxShadow: 'none', // Default no shadow
            transform: 'translateY(0px)', // Default position
            cursor: 'pointer'
        }}
             onMouseOver={(e) => {
                 e.currentTarget.style.boxShadow = '0px 4px 8px rgba(0,0,0,0.2)';
                 e.currentTarget.style.transform = 'translateY(-5px)';
             }}
             onMouseOut={(e) => {
                 e.currentTarget.style.boxShadow = 'none';
                 e.currentTarget.style.transform = 'translateY(0px)';
             }}
             onClick={() => { navigate(`/product/${props.data.id}`); }}
        >
            <Image height={190} width={192} preview={false} src={imagesBaseUrl+props.data.imageUrls.split(',')[0]}/>
            <div style={{padding: 10}}>
                <p style={{
                    height:52,
                    lineHeight: '30px',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    display: '-webkit-box',
                    WebkitBoxOrient: 'vertical',
                    WebkitLineClamp: 1,
                    margin: 0,
                    fontSize: 24,
                }}>
                    {props.data.name}
                </p>
                <div style={{fontSize: 20, color: "#ffa241", height: 24}}>{props.data.price}</div>
                <div style={{justifyContent: "start", display: "flex",alignItems:"center"}}>
                    <StarFilled style={{fontSize: 20, color: '#fffd11'}}/>
                    <p>{props.data.rating}</p>
                    <p style={{marginLeft: 30}}>{props.data.sold} sold</p>
                </div>
            </div>
        </div>

    )
}

export default ProductCard;