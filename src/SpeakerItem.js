import React, { Component } from 'react';
import { ListItem, ListItemContent, ListItemAction, IconToggle } from 'react-mdl';
import style from 'styled-components';

const AvatarWrapper = style.div`
    overflow: hidden;
    border-radius:50%;
    position: relative;
`;

const Avatar = style.img`
    position: absolute;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    width: 150%;
    height: 150%;
`;

class SpeakerItem extends Component {
    render() {
        return (        
            <ListItem twoLine>
                <ListItemContent avatar={<AvatarWrapper> <Avatar src={this.props.image} /> </AvatarWrapper>} subtitle={this.props.session}>
                    {this.props.name}                    
                </ListItemContent>
                <ListItemAction>
                    <IconToggle name="speaker_notes" />
                </ListItemAction>
            </ListItem>
        );
      }
}

export default SpeakerItem;