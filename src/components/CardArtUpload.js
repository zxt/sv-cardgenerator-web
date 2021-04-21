import React from 'react';
import { Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

function CardArtUpload(props) {

    const handleChange = (fileList) => {
        props.onChange(fileList.file);
    }

    return (
        <div className="card-art-upload-container">
            <Upload
                listType="picture"
                maxCount={1}
                onChange={handleChange}
                beforeUpload={() => false} // override default upload done by antd
            >
                <Button icon={<UploadOutlined />}>Upload Card Image</Button>
            </Upload>
        </div>
    )
}

export default CardArtUpload;