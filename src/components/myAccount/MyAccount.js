import react from "react";
import TopBar from "../header/TopBar";
import React from "react";
import {Breadcrumb, Menu} from "antd";
import MyProfile from "./MyProfile";
import MyBalance from "./MyBalance";
import MyOrder from "./order/MyOrder";
var items;
function MyAccount() {

    const [menuKey, setMenuKey] = React.useState('1');
    const renderComponent = () => {
        switch (menuKey) {
            case '1':
                return <MyProfile />;
            case '2':
                return <MyBalance />;
            case 'g2':
                return <MyOrder/>
        }
    };
    return (
        <div>
            <header className="header">
                <TopBar/>
            </header>
            <div style={{width: 1400, margin: "10px auto 0 auto", height: 1000,paddingTop:160}}>

                <Breadcrumb style={{margin: '16px 0' }}
                            items={[
                                { title: 'Home' },
                                { title: <a href="">Application Center</a> },
                                { title: <a href="">Application List</a> },
                                { title: 'An Application' }
                            ]}
                />

                <div style={{width:'100%',height:800,borderRadius:10,backgroundColor:"white",padding:20,display:"flex",justifyContent:"start"}}>
                    <Menu
                        onClick={(e) => {console.log(e);setMenuKey(e.key)}}
                        style={{
                            width: 256,
                            height:'100%'
                        }}
                        defaultSelectedKeys={['1']}

                        mode="inline"
                        items={items}
                    />
                    <div style={{width:'100%',overflow:'scroll'}}>

                        {renderComponent()}

                    </div>

                </div>

            </div>
        </div>
    );
}

items=[
    {
        key:'g1',
        label:'My Account',
        children:[
            {
                key:'1',
                label:'My Profile',
            },
            {
                key:'2',
                label:'My Balance',
            },
            {
                key:'3',
                label:'Edit Password',
            }
        ]
    },
    {
        key:'g2',
        label:'My Orders',
    },
    {
        key:'g3',
        label:'MY Store'
    }
]



export default MyAccount;