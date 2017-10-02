import React, { Component } from 'react';
import { ListItem, ListItemContent, ListItemProps } from 'react-mdl';

class SessionItem extends Component {
    render() {
        return (        
            <ListItem twoLine>
                <ListItemContent avatar="stars" >
                    {this.props.session}                    
                </ListItemContent>
                <ListItemProps>
                    {this.props.time}
                </ListItemProps>
            </ListItem>
        );
      }
}

export default SessionItem;