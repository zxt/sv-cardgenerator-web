import React from 'react';
import { Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';


class CardArtUpload extends React.Component {
    render() {
        return (
            <div>
                <Upload listType="picture">
                    <Button icon={<UploadOutlined />}>Upload Card Image</Button>
                </Upload>
            </div>
        )
    }
}

export default CardArtUpload;