import react, {useState} from 'react';
import {Button, Modal} from "antd";
import React from "react";

function PurchaseConfirmationModal(props) {
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const showModal = () => {
        setOpen(true);
    };
    const handleOk = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setOpen(false);
        }, 3000);
    };
    const handleCancel = () => {
        setOpen(false);
    };
    return (
        <>
            <Button onClick={showModal}
                style={{width:200,height:80,borderRadius:5,backgroundColor:"#68bfff",color:'#FFFFFF',fontWeight:600,fontSize:24}}>
                buy now
            </Button>

            <Modal
                open={open}
                title="Purchase Confirmation"
                onOk={handleOk}
                onCancel={handleCancel}
                width={800}

                footer={[
                    <Button key="back" onClick={handleCancel}>
                        Return
                    </Button>,
                    <Button key="submit" type="primary" loading={loading} onClick={handleOk}>
                        Submit
                    </Button>,
                    <Button
                        key="link"
                        href="https://google.com"
                        target="_blank"
                        type="primary"
                        loading={loading}
                        onClick={handleOk}
                    >
                        Search on Google
                    </Button>,
                ]}
            >
                <div style={{fontSize:24}}>
                    You will purchase the following products.
                </div>

            </Modal>
        </>
    );
}

export default PurchaseConfirmationModal;