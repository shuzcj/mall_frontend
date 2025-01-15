import React from 'react';
import TopBar from "../header/TopBar";
import {Avatar, Button, Pagination, Select} from "antd";
import {MessageOutlined, ShopOutlined, UserOutlined} from "@ant-design/icons";
import StoreDetailData from "./storeDetailData";
import ProductCard from "../card/ProductCard";
import addProductsModal from "./addProductsModal";
import AddProductsModal from "./addProductsModal";
function StoreMainPage() {

    const [activeOption, setActiveOption] = useState(null); // Track the active option
    const [selectValue, setSelectValue] = useState(null); // Track the selected value in the dropdown

    const handleButtonClick = (option) => {
        setActiveOption(option); // Set the active option when a button is clicked
        setSelectValue(null); // Reset the dropdown to show "Price"
    };

    const handleSelectChange = (value) => {
        setActiveOption(value); // Set the active option when the dropdown changes
        setSelectValue(value); // Update the dropdown's value
    };


    return (
        <div>
            <header className="header">
                <TopBar/>
            </header>
            <div style={{paddingTop:160,margin:"20px 0 20px 0",width:"100%",height:120,backgroundColor:"white"}}>
                <div style={{justifyContent:"start",display:"flex",width:1400,margin:"0 auto 0 auto"}}>

                    <div style={{justifyContent:"start",display:"flex",width:360,height:120}}>
                        <Avatar size={64} icon={<UserOutlined />} />
                        <div style={{marginLeft:10}}>
                            <div style={{fontSize:24,fontWeight:600}}>store name</div>
                            <div style={{fontSize:16,marginTop:10}}>active 30min ago</div>
                            <Button style={{marginTop:10}}>chat<MessageOutlined /></Button>
                        </div>
                    </div>

                    <StoreDetailData />
                </div>
            </div>

            <div style={{width: 1400, margin: "10px auto 0 auto",height:1000}}>
                <div style={{justifyContent:"end",display:"flex",margin:'20px 0 20px 0',alignItems:"center"}}>
                    <div style={{fontSize:20}}>products status:</div>
                    <Select defaultValue="all" style={{width: 120,margin:'0 20px 0 20px'}}
                            options={[
                                {value: 'all', label: 'All',},
                                {value:'listed',label:"Listed"},
                                {value:'o',label:'Out of Stock'},
                                {value:'unlisted',label:"Unlisted"}
                            ]}
                    />
                    <AddProductsModal/>

                </div>
                <div style={{display:'flex',justifyContent:"end"}}>
                    <Button type={"primary"} style={{marginRight:20}}>Latest</Button>
                    <Button type={"primary"} style={{marginRight:20}}>Top Sales</Button>
                    <Select

                        style={{
                            width: 200,
                        }}
                        onChange={handleChange}
                        options={[
                            {
                                value: 'asc',
                                label: 'Price: Low to High',
                            },
                            {
                                value: 'desc',
                                label: 'Price: High to Low',
                            }
                        ]}
                    />

                </div>
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
                            if (index>5){
                                style = {...style,marginTop:20};
                            }

                            return (
                                <div style={style} key={index}>
                                    <ProductCard/>
                                </div>
                            );
                        })
                    }
                </div>
                <div style={{width:'100%',marginTop:20,padding:10}}>
                <Pagination defaultCurrent={1} total={500000} align={'center'}/>
                </div>
            </div>


        </div>
    )
}

export default StoreMainPage;