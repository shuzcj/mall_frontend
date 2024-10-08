import React from "react";
import { AudioOutlined } from '@ant-design/icons';
import {Avatar, Dropdown, Input, Space} from 'antd';

import axios from "axios";
const { Search } = Input;

const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;
var items;
function topBar() {

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
                                name
                            </Space>
                        </a>

                    </Dropdown>
                </div>


            </div>

            <div style={{margin:"15px 0 0 0"}}>
            <Search
                placeholder=""
                allowClear
                enterButton="Search"
                size={"large"}
                onSearch={onSearch}
            />
            </div>
        </div>

        </div>


    );
}
items = [
    {
        key: '1',
        label: (
            <a target="_blank"  href="https://www.antgroup.com">
                My Count
            </a>
        ),
    },
    {
        key: '2',
        label: (
            <a target="_blank"  href="https://www.antgroup.com">
                My Purchase
            </a>
        ),
    },
]



export default topBar;












