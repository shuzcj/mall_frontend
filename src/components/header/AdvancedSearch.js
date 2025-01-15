import React,{useState} from "react";
import {Button, Collapse, Checkbox, InputNumber, Radio} from 'antd';
import CATEGORIES from "../../utils/categories";

function AdvancedSearch() {

    const [selectedCategories,setSelectedCategories]=useState([]);//id, records the selected category
    const [priceRange,setPriceRange]=useState({min:0,max:1e5});//, records the price range min and max
    const [priceOrder,setPriceOrder]=useState(0);//0defult,1asc,2desc
    const [soldOrder,setSoldOrder]=useState(0);//0defult,1asc,2desc

    const items=[
        {
            key:'1',
            label:'advanced search',
            children:
                <div>
                    <div style={{justifyContent: "start", display: "flex"}}>
                        <div style={{width: 200}}>category :</div>
                        <div>
                            <Checkbox.Group onChange={(v) => {
                                setSelectedCategories(v)
                            }}>
                                {CATEGORIES.map((item, index) => (
                                    <Checkbox key={index} style={{marginLeft: 10}} value={item.id}>
                                        {item.name}
                                    </Checkbox>
                                ))}
                            </Checkbox.Group>

                        </div>
                    </div>
                    <div style={{justifyContent: "start", display: "flex"}}>
                        <div style={{width: 200}}>price range :</div>
                        <div style={{justifyContent: "start", display: "flex"}}>
                            <InputNumber
                                style={{marginLeft: 10, marginRight: 10}} min={0}
                                onChange={(v) => setPriceRange(prevState => ({...prevState, min: v}))}
                                defaultValue={0}
                            />
                            -
                            <InputNumber
                                style={{marginLeft: 10, marginRight: 10}} min={0}
                                onChange={(v) => setPriceRange(prevState => ({...prevState, max: v}))}
                                defaultValue={100000}
                            />

                        </div>
                    </div>
                    <div style={{justifyContent: "start", display: "flex"}}>
                        <div style={{width: 200}}>price order :</div>
                        <div>
                            <Radio.Group onChange={(e) => {
                                console.log(e.target.value);setPriceOrder(e.target.value)
                            }}>
                                <Radio value={0}>default</Radio>
                                <Radio value={1}>ascending order</Radio>
                                <Radio value={2}>descending order</Radio>
                            </Radio.Group>
                        </div>
                    </div>

                    <div style={{justifyContent: "start", display: "flex"}}>
                        <div style={{width: 200}}>sold order :</div>
                        <div>
                            <Radio.Group onChange={(e) => {
                                console.log(e.target.value);setSoldOrder(e.target.value)
                            }}>
                                <Radio value={0}>default</Radio>
                                <Radio value={1}>ascending order</Radio>
                                <Radio value={2}>descending order</Radio>
                            </Radio.Group>
                        </div>
                    </div>


                </div>

        }
    ]

    return (
        <div>
            <Collapse items={items}  />


        </div>
    );
}

export default AdvancedSearch;