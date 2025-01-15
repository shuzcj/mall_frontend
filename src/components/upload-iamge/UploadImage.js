import React, {useEffect, useState} from 'react';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { Flex, message, Upload } from 'antd';
const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
};

const App = (props) => {
    const [loading, setLoading] = useState(false);
    const handleChange = (info) => {
        console.log(info)
        props.setFileList(info.fileList);

    };

    const uploadButton = (
        <button
            style={{
                border: 0,
                background: 'none',
            }}
            type="button"
        >
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div
                style={{
                    marginTop: 8,
                }}
            >
                Upload
            </div>
        </button>
    );
    return (
        <Flex gap="middle" wrap>
            <Upload

                name="avatar"
                listType="picture-card"
                className="avatar-uploader"
                showUploadList={true}
                maxCount={props.maxCount}
                beforeUpload={() => false} // Prevent auto-upload
                onChange={handleChange}
                fileList={props.fileList}
            >
                {uploadButton}
            </Upload>

        </Flex>
    );
};
export default App;


