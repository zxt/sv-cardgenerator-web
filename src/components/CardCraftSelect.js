import React, { useEffect } from 'react';
import { Radio, Tooltip } from 'antd';
import NeutralIcon from '../../public/templates/cards/craft_icons/neutral.png';
import ForestIcon from '../../public/templates/cards/craft_icons/forest.png';
import SwordIcon from '../../public/templates/cards/craft_icons/sword.png';
import RuneIcon from '../../public/templates/cards/craft_icons/rune.png';
import DragonIcon from '../../public/templates/cards/craft_icons/dragon.png';
import ShadowIcon from '../../public/templates/cards/craft_icons/shadow.png';
import BloodIcon from '../../public/templates/cards/craft_icons/blood.png';
import HavenIcon from '../../public/templates/cards/craft_icons/haven.png';
import PortalIcon from '../../public/templates/cards/craft_icons/portal.png';

function CardCraftSelect(props) {
    useEffect(() => {
        props.onChange("0")
    }, []);

    const handleChange = (event) => {
        props.onChange(event.target.value);
    };

    return (
        <Radio.Group defaultValue="0" name="clan" id="card-craft-select" onChange={handleChange}>
            <Radio value="0">
                <Tooltip title="Neutral">
                    <img src={NeutralIcon} />
                </Tooltip>
            </Radio>
            <Radio value="1">
                <Tooltip title="Forestcraft">
                    <img src={ForestIcon} />
                </Tooltip>
            </Radio>
            <Radio value="2">
                <Tooltip title="Swordcraft">
                    <img src={SwordIcon} />
                </Tooltip>
            </Radio>
            <Radio value="3">
                <Tooltip title="Runecraft">
                    <img src={RuneIcon} />
                </Tooltip>
            </Radio>
            <Radio value="4">
                <Tooltip title="Dragoncraft">
                    <img src={DragonIcon} />
                </Tooltip>
            </Radio>
            <Radio value="5">
                <Tooltip title="Shadowcraft">
                    <img src={ShadowIcon} />
                </Tooltip>
            </Radio>
            <Radio value="6">
                <Tooltip title="Bloodcraft">
                    <img src={BloodIcon} />
                </Tooltip>
            </Radio>
            <Radio value="7">
                <Tooltip title="Havencraft">
                    <img src={HavenIcon} />
                </Tooltip>
            </Radio>
            <Radio value="8">
                <Tooltip title="Portalcraft">
                    <img src={PortalIcon} />
                </Tooltip>
            </Radio>
        </Radio.Group>
    )
}

export default CardCraftSelect;