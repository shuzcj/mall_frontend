import React from "react";
import CardItem from "./CardItem"; // 假设 CardItem 在一个独立的文件中
import './main_page.css';
import Search from "./search";
function MainPage() {
    const categoryImageUrl = [
        {url:'https://down-sg.img.susercontent.com/file/567b6dc3d7ebd8d1a3fd18b84ea47d9a_tn',title:"women's clothing"},

    ];

    return (
        <div style={{ height: '2000px' }}>
            <header className="header">
                <Search/>
            </header>
            <div className='container'>
                {/* category */}
                <div className='item'>
                    <div style={{ padding: '10px',color: 'rgba(0, 0, 0, .54)',fontSize: '1rem',fontWeight: 500 }}>Category</div>

                    <div style={{ width: '100%', height: '1px', backgroundColor: 'gray' }} />
                    <div style={{ padding: '10px' }}>
                        {categoryImageUrl.map((item, index) => (
                            <CardItem key={index} url={item.url} title={item.title} />
                        ))}
                    </div>
                </div>
                <div className='item'>
                    asd
                </div>
            </div>
        </div>
    );
}

export default MainPage;
