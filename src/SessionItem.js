import React, { Component } from 'react';
import { ListItem, ListItemContent, ListItemAction } from 'react-mdl';

class SessionItem extends Component {
    render() {
        return (        
            <ListItem twoLine>
                <ListItemContent avatar="stars" >
                    {this.props.session}                    
                </ListItemContent>
                <ListItemAction>
                    {this.props.time}
                </ListItemAction>
            </ListItem>
        );
      }
}

export default SessionItem;