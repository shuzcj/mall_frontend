import react, {useEffect, useState} from 'react';
import {Button, InputNumber, Modal, Select} from "antd";
import {  Checkbox, Form, Input } from 'antd';
import TextArea from "antd/es/input/TextArea";
import UploadImage from "../upload-iamge/UploadImage";
import axios from "axios";
import  CATEGORIES from "../../utils/categories";


function AddProductsModal(props) {
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const [fileList, setFileList] = useState([]);
    const [initialFileList, setInitialFileList] = useState([]);
    const [form] = Form.useForm(); // Create a Form instance
    const token = localStorage.getItem('token');
    const apiBaseUrl = process.env.REACT_APP_BACKEND_API_URL;

    useEffect(() => {

        const data=[{
            uid: '-1', // Unique identifier
            name: 'cat.jpg',
            url: '/temp/cat.jpg', // URL of the file
            raw:true
        },
            {
                uid: '0', // Unique identifier
                name: 'dog.jpg',
                url: '/temp/dog.jpg', // URL of the file
                raw:true
            },]
        setInitialFileList(data);
        console.log('apiBaseUrl:', apiBaseUrl);
    },[]   )

    const onFinish = (values) => {
        console.log('Success:', values);

        // Create a FormData object
        const formData = new FormData();
        formData.append('productName', values.productName);
        formData.append('description', values.description);
        formData.append('price', values.price);
        formData.append('stock', values.stock);
        formData.append('status', values.status);
        formData.append('categoryId', values.category);
        formData.append('userId', props.userId);
        fileList.forEach(file => {
                formData.append('images', file.originFileObj); // Only new images
        });

        /*
        // Identify deleted backend images
        const deletedImages = initialFileList.filter(
            initialFile => !fileList.some(currentFile => currentFile.uid === initialFile.uid)
        );

        // Add new images to FormData
        fileList.forEach(file => {
            if (!file.raw) {
                formData.append('images', file.originFileObj); // Only new images
            }
        });

        // Add deleted images info to FormData
        const deletedImageUrls = deletedImages.map(image => image.url); // Extract URLs into an array
        formData.append('deletedImages', JSON.stringify(deletedImageUrls));
        */

        console.log('formData:', formData);

        axios.post(apiBaseUrl + '/product/', formData, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'multipart/form-data',
            },
        })
            .then(response => {
                console.log('Hello API response:', response);
                setOpen(false);
                form.resetFields()
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };


    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const showModal = () => {
        setOpen(true);
    };
    const handleOk = () => {
        form.submit(); // Trigger the form's submit programmatically
    };
    const handleCancel = () => {
        setOpen(false);
        form.resetFields()
    };
    return (
        <>
            <Button type="primary" onClick={showModal}>
                add products
            </Button>

                <Modal
                    width={800}
                    open={open}
                    title="Add Products"
                    onOk={handleOk}
                    onCancel={handleCancel}
                    footer={[
                        <Button key="back" onClick={handleCancel}>
                            Return
                        </Button>,
                        <Button key="submit" type="primary"  loading={loading} onClick={handleOk}>
                            Submit
                        </Button>
                    ]}

                >

                    <Form
                        form={form}
                        name="basic"
                        labelCol={{
                            span: 8,
                        }}
                        wrapperCol={{
                            span: 16,
                        }}
                        style={{
                            maxWidth: 600,
                        }}
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="product name"
                            name="productName"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your username!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="description"
                            name="description"

                        >
                            <TextArea rows={4}  maxLength={6} />

                        </Form.Item>


                        <Form.Item
                            label="price"
                            name="price"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input product price!',
                                },
                            ]}
                        >
                            <InputNumber min={0} max={1000000}   />
                        </Form.Item>

                        <Form.Item
                            label="stock"
                            name="stock"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input product stock!',
                                },
                            ]}
                        >
                            <InputNumber min={1} max={1000000}   />
                        </Form.Item>

                        <Form.Item
                            label="status"
                            name="status"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please select product status!',
                                },
                            ]}
                        >
                        <Select
                            style={{
                                width: 120,
                            }}
                            options={[
                                {
                                    value: 'listed',
                                    label: 'listed',
                                },
                                {
                                    value: 'unlisted',
                                    label: 'unlisted',
                                }
                            ]}
                        />
                        </Form.Item>

                        <Form.Item
                            label="category"
                            name="category"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please select product category!',
                                },
                            ]}
                        >
                            <Select
                                style={{
                                    width: 200,
                                }}
                                options={CATEGORIES}
                            />
                        </Form.Item>

                        <Form.Item
                            label="upload image"
                            name="uploadImage"
                            rules={[
                                {
                                    validator: (_, value) =>
                                        fileList.length > 0 ? Promise.resolve() : Promise.reject(new Error('Please upload at least one image')),
                                },
                            ]}

                        >
                            <UploadImage maxCount={5} setFileList={(e)=>setFileList(e)} fileList={fileList} />

                        </Form.Item>



                    </Form>

                </Modal>

        </>
    );
}
export default AddProductsModal;