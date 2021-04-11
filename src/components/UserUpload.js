import React from 'react';
import { Upload, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

function getDataUrl(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
}

function beforeUpload(file) {
    const isJpgorPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgorPng) {
        message.error('Only jpg/jpeg, png files allowed.');
    }

    const isLT2M = file.size / 1024 / 1024 < 2;
    if(!isLT2M) {
        message.error('Image size must be <= 2MB');
    }

    return isJpgorPng && isLT2M;
}

class UserUpload extends React.Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(info) {
        getDataUrl(info.file.originFileObj, imageDataUrl => {
                this.props.onUpload(imageDataUrl)
            }
        );

    }

    render() {
        const imageUrl = this.props.imgThumbnail;
        const uploadButton = (
            <div>
                <PlusOutlined />
                <div style={{ marginTop: 8 }}>Upload</div>
            </div>
        );

        const userBgIdx = 16 // there are 16 pre-defined bgs, so the custom user bg has idx of 16

        return (
            <Upload
                listType="picture-card"
                className="user-bg-container"
                showUploadList={false}
                beforeUpload={beforeUpload}
                onChange={this.handleChange}
            >
                {imageUrl ? <img src={imageUrl} className={`user-bg-img ${this.props.selectedImgIdx === userBgIdx && 'selected-bg-thumbnail'}`} /> : uploadButton}
            </Upload>
        )
    }
}

export default UserUpload;