import React, { Component } from 'react';
import { ListItem, ListItemContent } from 'react-mdl';

class SpeakerItem extends Component {
    render() {
        return (        
            <ListItem twoLine>
                <ListItemContent avatar="person" subtitle={this.props.session}>
                    {this.props.name}                    
                </ListItemContent>
            </ListItem>
        );
      }
}

export default SpeakerItem;