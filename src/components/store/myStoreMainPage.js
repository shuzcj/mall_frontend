import React, {useEffect, useState} from 'react';
import TopBar from "../header/TopBar";
import {Avatar, Button, Pagination, Select} from "antd";
import {MessageOutlined, ShopOutlined, UserOutlined} from "@ant-design/icons";
import StoreDetailData from "./storeDetailData";
import ProductCard from "../card/ProductCard";
import addProductsModal from "./addProductsModal";
import AddProductsModal from "./addProductsModal";
import axios from "axios";
import useAuthCheck from "../hooks/useAuthCheck";
function StoreMainPage() {
    const apiBaseUrl = process.env.REACT_APP_BACKEND_API_URL;
    const token = localStorage.getItem('token');
    const [activeOption, setActiveOption] = useState("latest"); // Track the active option,latest,topSales,asc,desc
    const [selectValue, setSelectValue] = useState(null); // Track the selected value in the dropdown
    const [page,setPage]=useState(1);
    const [status,setStatus]=useState('all');//all,listed,outOfStock,unlisted
    const [total,setTotal]=useState(0);
    const [products,setProducts]=useState([]);

    const handleButtonClick = (option) => {
        setActiveOption(option); // Set the active option when a button is clicked
        setSelectValue(null); // Reset the dropdown to show "Price"
    };

    const handleSelectChange = (value) => {
        setActiveOption(value); // Set the active option when the dropdown changes
        setSelectValue(value); // Update the dropdown's value
    };

    // Use custom hook for authentication
    const { userInfo, statusCode } = useAuthCheck();

    useEffect(()=>{

        if (statusCode === null) {
            // Wait for auth check to complete
            return;
        }

        if (statusCode === 401) {
            console.log("Unauthorized! Redirect to login or display an error.");
            return;
        }

        console.log(page,status,activeOption)
        const params={
            pageNumber:page,
            pageSize:10,
            status:status,
            sort:activeOption,
            userId:null,

        }
        axios.get(
            apiBaseUrl+'/product',
            {params:params, headers: {'Authorization': `Bearer ${token}`}})
            .then(res=>{
                console.log(res.data)
                setProducts(res.data.data.products)
                setTotal(res.data.data.total)

            })
    },[statusCode,page,status,activeOption])

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
                <div style={{justifyContent: "space-between", display: "flex"}}>
                    <div style={{display: 'flex', justifyContent: "start", marginBottom: 20,marginTop:10}}>
                        <div style={{fontSize: 24, marginRight: 20}}>Sort By</div>
                        <Button
                            size={'middle'}
                            type={activeOption === "latest" ? "primary" : "default"} // Highlight if active
                            style={{marginRight: 20}}
                            onClick={() => handleButtonClick("latest")}
                        >
                            Latest
                        </Button>

                        <Button
                            size={'middle'}
                            type={activeOption === "topSales" ? "primary" : "default"} // Highlight if active
                            style={{marginRight: 20}}
                            onClick={() => handleButtonClick("topSales")}
                        >
                            Top Sales
                        </Button>

                        <Select
                            size={'middle'}
                            style={{
                                width: 200,
                                border: selectValue ? "2px solid #1677ff" : "1px solid #d9d9d9", // Add blue border if selected
                                borderRadius: 6, // Optional: Add rounded corners
                            }}
                            onChange={handleSelectChange}
                            value={selectValue || "Price"} // Show "Price" when no value is selected
                            options={[
                                {
                                    value: "asc",
                                    label: "Price: Low to High",
                                },
                                {
                                    value: "desc",
                                    label: "Price: High to Low",
                                },
                            ]}
                        />

                    </div>
                    <div
                        style={{justifyContent: "end", display: "flex", margin: '10px 0 20px 0', alignItems: "center"}}>
                        <div style={{fontSize: 20}}>products status:</div>
                        <Select defaultValue="all" style={{width: 120, margin: '0 20px 0 20px'}} onChange={(e)=>{setStatus(e)}}
                                options={[
                                    {value: 'all', label: 'All',},
                                    {value: 'listed', label: "Listed"},
                                    {value: 'outOfStock', label: 'Out of Stock'},
                                    {value: 'unlisted', label: "Unlisted"}
                                ]}
                        />
                        <AddProductsModal/>

                    </div>
                </div>
                <div style={{justifyContent: "start", display: "flex", flexWrap: "wrap"}}>
                    {
                        products.map((item, index) => {
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
                                    <ProductCard data={item}/>
                                </div>
                            );
                        })
                    }
                </div>
                <div style={{width: '100%', marginTop: 20}}>
                    <Pagination defaultCurrent={1} total={total} align={'center'} defaultPageSize={10} showSizeChanger={false}
                                onChange={(page)=>{setPage(page)}}/>
                </div>
            </div>


        </div>
    )

}

export default StoreMainPage;