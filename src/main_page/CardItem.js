import React from "react";
import { Card, Image } from 'antd';
import './main_page.css';


function CardItem({ url, title }) {
    const handleClick = () => {
        window.location.href = 'https://your-destination-url.com'; // 目标跳转 URL
    };

    return (
        <div
            className="card-item"
            style={{ textAlign: "center", height: '149px', width: '119px' }}
            onClick={handleClick} /* 添加点击事件 */
        >
            <Image src={url} width={119} height={119} preview={false} />
            <div style={{ fontSize:'.875rem' }}>{title}</div>
        </div>
    );
}

export default CardItem;
