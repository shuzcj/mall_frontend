import react, {useState} from 'react';
import UploadImage from "../upload-iamge/UploadImage";
import {Button, Image, Input} from "antd";
function MyProfile() {

    const [fileList,setFileList] = useState([]);
    const [editName,setEditName] = useState(false);
    const [editDeliveryAddress,setEditDeliveryAddress] = useState(false);
    const [editPhoneNumber,setEditPhoneNumber] = useState(false);
    const [uploadImageButton,setUploadImageButton] = useState(false);

    return (
        <div>

            <div style={{display: "flex", justifyContent: "start", height: 100, alignItems: "center"}}>
                <div style={{margin: 20, fontSize: 20}}>My name</div>
                {
                    editName ?
                        <div style={{display: "flex", justifyContent: "start", alignItems: "center"}}>
                            <Input placeholder="namenamename" onChange={(e) => {
                                console.log(e.target.value)
                            }}
                                   style={{margin: 20, fontSize: 20, width: 200, height: 40}}/>
                            <Button style={{margin: 20, fontSize: 20}} onClick={() => {
                                setEditName(false)
                            }}>confirm</Button>
                            <Button style={{margin: 20, fontSize: 20}} onClick={() => {
                                setEditName(false)
                            }}>cancel</Button>
                        </div>
                        :
                        <div style={{display: "flex", justifyContent: "start", alignItems: "center"}}>
                            <div style={{margin: 20, fontSize: 20}}>namenamename</div>
                            <Button onClick={() => {
                                setEditName(true)
                            }} style={{margin: 20, fontSize: 20}}>Edit</Button>
                        </div>
                }

            </div>

            <div style={{display: "flex", justifyContent: "start", height: 100, alignItems: "center"}}>
                <div style={{margin: 20, fontSize: 20}}>My delivery address</div>
                {
                    editDeliveryAddress ?
                        <div style={{display: "flex", justifyContent: "start", alignItems: "center"}}>
                            <Input placeholder="namenamename" onChange={(e) => {
                                console.log(e.target.value)
                            }}
                                   style={{margin: 20, fontSize: 20, width: 200, height: 40}}/>
                            <Button style={{margin: 20, fontSize: 20}} onClick={() => {
                                setEditDeliveryAddress(false)
                            }}>confirm</Button>
                            <Button style={{margin: 20, fontSize: 20}} onClick={() => {
                                setEditDeliveryAddress(false)
                            }}>cancel</Button>
                        </div>
                        :
                        <div style={{display: "flex", justifyContent: "start", alignItems: "center"}}>
                            <div style={{margin: 20, fontSize: 20}}>address</div>
                            <Button onClick={() => {
                                setEditDeliveryAddress(true)
                            }} style={{margin: 20, fontSize: 20}}>Edit</Button>
                        </div>
                }

            </div>

            <div style={{display: "flex", justifyContent: "start", height: 100, alignItems: "center"}}>
                <div style={{margin: 20, fontSize: 20}}>My phone number</div>
                {
                    editPhoneNumber ?
                        <div style={{display: "flex", justifyContent: "start", alignItems: "center"}}>
                            <Input placeholder="phone number" onChange={(e) => {
                                console.log(e.target.value)
                            }}
                                   style={{margin: 20, fontSize: 20, width: 200, height: 40}}/>
                            <Button style={{margin: 20, fontSize: 20}} onClick={() => {
                                setEditPhoneNumber(false)
                            }}>confirm</Button>
                            <Button style={{margin: 20, fontSize: 20}} onClick={() => {
                                setEditPhoneNumber(false)
                            }}>cancel</Button>
                        </div>
                        :
                        <div style={{display: "flex", justifyContent: "start", alignItems: "center"}}>
                            <div style={{margin: 20, fontSize: 20}}>phoner number</div>
                            <Button onClick={() => {
                                setEditPhoneNumber(true)
                            }} style={{margin: 20, fontSize: 20}}>Edit</Button>
                        </div>
                }

            </div>

            <div style={{display: "flex", justifyContent: "start"}}>
                <div>
                    <div style={{margin: 20, fontSize: 24}}>My profile picture</div>
                    <div style={{margin: 20}}>
                        <Image height={300} width={300} src={'/temp/img.png'}/>
                    </div>
                </div>
                <div>
                    <div style={{margin: 20, fontSize: 24}}>Edit profile picture</div>
                    <div style={{margin: 20}}>
                        <UploadImage maxCount={1}
                                     setFileList={(fileList) => {
                                         setFileList(fileList);
                                         console.log('fileList:', fileList);
                                         if (fileList.length > 0) {
                                             setUploadImageButton(true);
                                         } else setUploadImageButton(false);
                                     }}
                        />
                    </div>
                    <Button style={{margin: 20}} disabled={!uploadImageButton}>confirm</Button>

                </div>
            </div>
        </div>
    );
}

export default MyProfile;