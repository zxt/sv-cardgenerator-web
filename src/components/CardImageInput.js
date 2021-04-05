import React from 'react';
import { Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

class CardImageInput extends React.Component {
    render() {
        return (
            <div id="image-upload-container">
                <Upload>
                    <Button icon={<UploadOutlined />}>Card Image</Button>
                </Upload>
                <Upload>
                    <Button icon={<UploadOutlined />}>Background Image</Button>
                </Upload>
            </div>
        )
    }
}

export default CardImageInput;