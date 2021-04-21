import React from 'react';
import { Form, Button, Select } from 'antd';
import CardTypeSelect from './CardTypeSelect.js';
import CardInput from './CardInput.js';
import CardCraftSelect from './CardCraftSelect.js';
import CardRaritySelect from './CardRaritySelect.js';
import CardStatsInput from './CardStatsInput.js';
import CardTextArea from './CardTextArea.js';
import CardCostInput from './CardCostInput.js';
import CardArtUpload from './CardArtUpload.js';
import CardBackgroundSelect from './CardBackgroundSelect.js';

class CardDetailsForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cardType: 1,
            bgImg: null
        }

        this.handleCardTypeChange = this.handleCardTypeChange.bind(this);
        this.handleBackgroundImgChange = this.handleBackgroundImgChange.bind(this);
        this.onFinish = this.onFinish.bind(this);
    }

    handleCardTypeChange(value) {
        this.setState({
            cardType: value
        })
    }

    handleBackgroundImgChange(img) {
        this.setState({
            bgImg: img
        })
    }

    onFinish(values) {
        console.log('values:', values);
    }

    render() {

        return (
            <Form className="card-details-form-container" onFinish={this.onFinish}>
                <Form.Item label="Card Type:" name="char_type" htmlFor="card-type-select">
                    <CardTypeSelect onCardTypeChange={this.handleCardTypeChange} />
                </Form.Item>

                <Form.Item label="Card Name:" name="card_name" htmlFor="card_name">
                    <CardInput placeholder="name" />
                </Form.Item>

                <Form.Item label="Craft:" name="clan" htmlFor="card-craft-select">
                    <CardCraftSelect />
                </Form.Item>

                <Form.Item label="Trait:" name="tribe_name" htmlFor="tribe_name">
                    <CardInput placeholder="e.g., Commander, Machina, etc." />
                </Form.Item>

                <Form.Item label="Rarity:" name="rarity" htmlFor="card-rarity-select">
                    <CardRaritySelect />
                </Form.Item>

                <Form.Item label="Cost:" name="cost" htmlFor="card-cost-input">
                    <CardCostInput />
                </Form.Item>

                <Form.Item label="Base Stats:" name="base_stats" htmlFor="atk" className={this.state.cardType != 1 ? 'hidden': ''}>
                    <CardStatsInput name1="atk" placeholder1="Atk" name2="life" placeholder2="Def" cardType={this.state.cardType} />
                </Form.Item>

                <Form.Item label="Evo Stats:" name="evo_stats" htmlFor="evo_atk" className={this.state.cardType != 1 ? 'hidden': ''}>
                    <CardStatsInput name1="evo_atk" placeholder1="Evo Atk" name2="evo_life" placeholder2="Evo Def" cardType={this.state.cardType} />
                </Form.Item>

                <Form.Item label="Base Card Text:" name="skill_disc" htmlFor="card-text-textarea">
                    <CardTextArea name="skill_disc" htmlID="card-text-textarea" placeholder="Base Card Text" />
                </Form.Item>

                <Form.Item label="Evo Card Text:" name="evo_skill_disc" htmlFor="card-evotext-textarea" className={this.state.cardType != 1 ? 'hidden': ''}>
                    <CardTextArea name="evo_skill_disc" htmlID="card-evotext-textarea" placeholder="Evo Card Text" />
                </Form.Item>

                <Form.Item name="base_img">
                    <CardArtUpload />
                </Form.Item>

                <Form.Item name="background_img">
                    <CardBackgroundSelect bgImg={this.state.bgImg} onBackgroundImgChange={this.handleBackgroundImgChange} />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Generate
                    </Button>
                </Form.Item>

            </Form>
        )
    }
}

export default CardDetailsForm;