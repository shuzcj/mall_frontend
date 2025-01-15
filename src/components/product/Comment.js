import React from "react";
import {Avatar} from "antd";

function Comment() {


    return(
        <div style={{margin:20}}>
            <div style={{display:"flex",justifyContent:"start",alignItems:"center"}}>
            <Avatar size={32}/>
                <div style={{marginLeft:20}}>username</div>
            </div>
            <div style={{marginLeft:52}}>
                comment
            </div>
            <div style={{marginTop:10,marginLeft:52,height:1,backgroundColor:"#bfbfbf"}}/>
        </div>
    )
}

export default Comment;