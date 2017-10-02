import React, { Component } from 'react';
import { ListItem, ListItemContent } from 'react-mdl';

class SessionItem extends Component {
    render() {
        return (        
            <ListItem twoLine>
                <ListItemContent subtitle={this.props.time}>
                    {this.props.session}                    
                </ListItemContent>
            </ListItem>
        );
      }
}

export default SessionItem;