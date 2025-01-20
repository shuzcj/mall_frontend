import React from "react";
import { AudioOutlined } from '@ant-design/icons';
import {Avatar, Dropdown, Input, Select, Space} from 'antd';
import AdvancedSearch from "./AdvancedSearch";
import axios from "axios";

const baseUrl = process.env.REACT_APP_API_BASE_URL;
const { Search } = Input;


var items;
function TopBar(props) {


    const searchAxios=(value)=>{
        axios.get("${apiBaseUrl}/search",{query:value})
            .then(res=>{
                console.log(res);
            })
    }

    function onSearch(value, _e, info) {
        searchAxios(value);
    }

    return (
        <div style={{width:"100%", background: "#ffffff" }}>
        <div style={{ width: 1400,margin:'0px auto 0 auto',padding:"10px 0 10px 0" }} >

            <div style={{width:"100%",justifyContent:"space-between",alignItems:"center",fontSize:19,display:"flex"}}>
                <a style={{textDecoration:"none",color:"rgba(0,0,0,.6)",fontWeight:500,}}  href={''}>home page</a>
                <div >
                    <Dropdown
                    menu={{
                        items,
                    }}
                >
                        <a href="#" style={{color:"rgba(0,0,0,.6)",fontWeight:500,}} onClick={(e) => e.preventDefault()}>
                            <Space>
                                <Avatar size={28}/>
                                {props.userName}
                            </Space>
                        </a>

                    </Dropdown>
                </div>


            </div>

            <div style={{margin:"15px 0 0 0"}}>
                <div style={{justifyContent:"space-between",display:"flex"}}>
            <Search
                placeholder=""
                allowClear
                enterButton="Search"
                size={"large"}
                onSearch={onSearch}
            />
                    <Select defaultValue= 'Search in this shop' style={{width: 240,}}
                        options={[{value: 'Search in this shop', label: 'Search in this shop',},{value: 'Search in whole mall',label: 'Search in whole mall',}]} size={"large"}/>
                </div>
               <AdvancedSearch/>
            </div>
        </div>

        </div>


    );
}
items = [
    {
        key: '1',
        label: (
            <a  rel="noopener noreferrer" href={`${baseUrl}/myAccount`}>
                My Account
            < /a>
        ),
    },
    {
        key: '2',
        label: (
            <a   href={baseUrl+'/myStore'}>
                My Store
            </a>
        ),
    },
]



export default TopBar;












