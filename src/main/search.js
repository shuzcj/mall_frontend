import React from "react";
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import axios from "axios";
const { Search } = Input;

const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;

function Pearch() {

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

        <div style={{ width: 1200,margin:'20px auto 0 auto' }} >

            <Search
                placeholder=""
                allowClear
                enterButton="Search"

                onSearch={onSearch}
            />
        </div>

    );
}

export default Pearch;












