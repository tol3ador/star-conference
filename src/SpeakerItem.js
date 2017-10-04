import React, { Component } from 'react';
import { ListItem, ListItemContent, ListItemAction, Icon, Tooltip } from 'react-mdl';
import style from 'styled-components';

const AvatarWrapper = style.div`
    width: 40px;
    height: 40px;
    overflow: hidden;
    border-radius:50%;
    position: relative;
    margin-right: 16px;
`;

const Avatar = style.img`
    position: absolute;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    width: 125%;
    height: 125%;
`;

class SpeakerItem extends Component {
    render() {
        return (        
            <ListItem twoLine>
                <AvatarWrapper>
                    <Avatar src="https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAArbAAAAJGRlMmZjYmViLWUyNDItNDUxZC1hZGJmLTgyOGVjZTFmZjQzNA.jpg" />
                </AvatarWrapper>
                <ListItemContent subtitle={this.props.session}>
                    {this.props.name}                
                </ListItemContent>
                <ListItemAction>
                    <Tooltip label="Suggestion box">
                        <Icon name="speaker_notes" />
                    </Tooltip>
                </ListItemAction>
            </ListItem>
        );
      }
}

export default SpeakerItem;