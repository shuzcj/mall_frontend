import { useEffect, useState } from "react";
import axios from "axios";

const useAuthCheck = () => {
    const [userInfo, setUserInfo] = useState(null);

    const [statusCode, setStatusCode] = useState(null); // Tracks errors (optional)
    const apiBaseUrl = process.env.REACT_APP_BACKEND_API_URL;

    useEffect(() => {

        console.log("useAuthCheck...")

        const storedUserInfo = sessionStorage.getItem("userInfo");
        if (storedUserInfo) {
            setUserInfo(JSON.parse(storedUserInfo));

            setStatusCode(200);
            return ;
        }
        console.log("there is no session storage, new react instance!")
        const token = localStorage.getItem("token");

        if (!token) {
            setStatusCode(401)
            console.log("there is no jwt token!")
            return;
        }

        axios.get(apiBaseUrl+"/user",{
            headers: { Authorization: `Bearer ${token}` }
        }).then(res=>{
            console.log(res)
            if(res.data.statusCode===200){
                console.log("get user info successfully",res.data.data)
                setStatusCode(200);
                setUserInfo(res.data.data);
                sessionStorage.setItem("userInfo",JSON.stringify(res.data.data));
            }
            else{
                console.log("get user info failed")
                setStatusCode(res.data.statusCode);
            }

        })
    }, []);

    return { userInfo,  statusCode }; // Return the states
};

export default useAuthCheck;
