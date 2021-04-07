import React from 'react';
import { Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';


class CardArtUpload extends React.Component {
    render() {
        return (
            <div className="card-art-upload-container">
                <Upload listType="picture" maxCount={1}>
                    <Button icon={<UploadOutlined />}>Upload Card Image</Button>
                </Upload>
            </div>
        )
    }
}

export default CardArtUpload;