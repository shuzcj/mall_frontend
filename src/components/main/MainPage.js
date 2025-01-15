import React from "react";
import CardItem from "./CardItem"; // 假设 CardItem 在一个独立的文件中
import './MainPage.css';
import TopBar from "../header/TopBar";
import ProductCard from "../card/ProductCard";
function MainPage() {
    const categoryImageUrl = [
        {url:'https://down-sg.img.susercontent.com/file/567b6dc3d7ebd8d1a3fd18b84ea47d9a_tn',title:"women's clothing"},

    ];

    return (
        <div style={{ height: '2000px' }}>
            <header className="header">
                <TopBar/>
            </header>
            <div className='container'>
                {/* category */}
                <div className='item'>
                    <div style={{ padding: '10px',color: 'rgba(0, 0, 0, .54)',fontSize: '1rem',fontWeight: 900 }}>Category</div>

                    <div style={{ width: '100%', height: '1px', backgroundColor: 'gray' }} />
                    <div style={{ padding: '10px' }}>
                        {categoryImageUrl.map((item, index) => (
                            <CardItem key={index} url={item.url} title={item.title} />
                        ))}
                    </div>
                </div>
                <div style={{width: 1400, margin: "10px auto 0 auto",height:1000}}>
                    <div style={{margin:'20px 0',fontSize:24}}>Recommending Commodities</div>
                    <div style={{justifyContent: "start", display: "flex", flexWrap: "wrap"}}>
                        {
                            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => {
                                let style = {};
                                if (index === 0 || index === 6) {
                                    style = {marginRight: 24, marginLeft: 0};
                                } else if (index === 5 || index === 11) {
                                    style = {marginLeft: 24, marginRight: 0};
                                } else {
                                    style = {marginLeft: 24, marginRight: 24};
                                }
                                if (index > 5) {
                                    style = {...style, marginTop: 20};
                                }

                                return (
                                    <div style={style} key={index}>
                                        <ProductCard/>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainPage;
