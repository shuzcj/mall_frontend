import react from 'react';
import {Image} from "antd";
import {StarFilled} from "@ant-design/icons";

function ProductCard(props) {

    return (
        <div style={{
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
             onClick={() => {console.log(1)}}
        >
            <Image height={190} width={192} preview={false} src={'/temp/cat.jpg'}/>
            <div style={{padding: 10}}>
                <p style={{
                    height: 60,
                    lineHeight: '30px',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    display: '-webkit-box',
                    WebkitBoxOrient: 'vertical',
                    WebkitLineClamp: 2,
                    margin: 0,
                    fontSize: 16,
                }}>
                    name name name name name name name namename name name name name name name namename name name name
                    name name name name
                </p>
                <div style={{fontSize: 20, color: "#ffa241", height: 16}}>20</div>
                <div style={{justifyContent: "start", display: "flex"}}>
                    <StarFilled style={{fontSize: 20, color: '#fffd11'}}/>
                    <p>4.9</p>
                    <p style={{marginLeft: 20}}>100 sold</p>
                </div>
            </div>
        </div>

    )
}

export default ProductCard;