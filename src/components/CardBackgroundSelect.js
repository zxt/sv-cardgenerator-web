import React from 'react';
import { Button, Modal, Image } from 'antd';
import { FileImageOutlined } from '@ant-design/icons';
import UserUpload from './UserUpload';
import bg_Castle from '../../public/templates/backgrounds/background_Castle.png';
import bg_DarkForest from '../../public/templates/backgrounds/background_DarkForest.png';
import bg_Darkstone from '../../public/templates/backgrounds/background_Darkstone.png';
import bg_Forest from '../../public/templates/backgrounds/background_Forest.png';
import bg_Hall from '../../public/templates/backgrounds/background_Hall.png';
import bg_Laboratory from '../../public/templates/backgrounds/background_Laboratory.png';
import bg_Lake from '../../public/templates/backgrounds/background_Lake.png';
import bg_Lake_Night from '../../public/templates/backgrounds/background_Lake_Night.png';
import bg_Mansion from '../../public/templates/backgrounds/background_Mansion.png';
import bg_Map from '../../public/templates/backgrounds/background_Map.png';
import bg_Mausoleum from '../../public/templates/backgrounds/background_Mausoleum.png';
import bg_Morning_star from '../../public/templates/backgrounds/background_Morning_Star.png';
import bg_Mountains from '../../public/templates/backgrounds/background_Mountains.png';
import bg_Track from '../../public/templates/backgrounds/background_Track.png';
import bg_Track_Morning from '../../public/templates/backgrounds/background_Track_Morning.png';
import bg_Track_Night from '../../public/templates/backgrounds/background_Track_Night.png';

class CardBackgroundSelect extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalVisible: false,
            selectedImgIdx: null,
            userBgImg: null,
        };

        this.bgImages = [bg_Castle, bg_DarkForest, bg_Darkstone, bg_Forest, bg_Hall,
            bg_Laboratory, bg_Lake, bg_Lake_Night, bg_Mansion, bg_Map,
            bg_Mausoleum, bg_Morning_star, bg_Mountains, bg_Track,
            bg_Track_Morning, bg_Track_Night];

        this.showModal = this.showModal.bind(this);
        this.handleOk = this.handleOk.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.handleClear = this.handleClear.bind(this);
        this.handleBgSelect = this.handleBgSelect.bind(this);
        this.handleBgUpload = this.handleBgUpload.bind(this);
    }

    showModal() {
        this.setState({
            isModalVisible: true
        });
    }

    handleOk() {
        this.setState({
            isModalVisible: false
        });
    }

    handleCancel() {
        this.setState({
            isModalVisible: false
        })
    }

    handleClear() {
        this.setState({
            selectedImgIdx: null,
            userBgImg: null,
        })
        this.props.onBackgroundImgChange(null);
    }

    handleBgSelect(idx, img_url) {
        this.setState({
            selectedImgIdx: idx
        })
        this.props.onBackgroundImgChange(img_url);
    }

    handleBgUpload(img_url) {
        this.setState({
            userBgImg: img_url,
            selectedImgIdx: this.bgImages.length,
        })
        this.props.onBackgroundImgChange(img_url);
    }

    render() {
        return (
            <div>
                <Button icon={<FileImageOutlined />} onClick={this.showModal}>Choose Background Image...</Button>
                <Modal title="Choose Background Image" 
                        width={1000} 
                        visible={this.state.isModalVisible} 
                        onOk={this.handleOk} 
                        onCancel={this.handleCancel}
                        footer={[
                            <Button key="clear" type="primary" danger onClick={this.handleClear}>
                                Clear
                            </Button>,
                            <Button key="ok" type="primary" onClick={this.handleOk}>
                                Ok
                            </Button>
                        ]}
                >
                    {this.bgImages.map( (x, i) => 
                        <Image className={`bg-thumbnail ${this.state.selectedImgIdx === i && 'selected-bg-thumbnail'}`}
                                preview={false} 
                                width={150} 
                                src={x} 
                                key={i} 
                                onClick={(e) => this.handleBgSelect(i, x, e)}
                        />
                    )}
                    <UserUpload 
                        imgThumbnail={this.state.userBgImg}
                        onUpload={this.handleBgUpload}
                        selectedImgIdx={this.state.selectedImgIdx}
                    />
                </Modal>
                <Image src={this.props.bgImg} width={400} />
            </div>
        )
    }
}

export default CardBackgroundSelect;