import React, { Component } from 'react';
import { ListItem, ListItemContent } from 'react-mdl';

class SessionItem extends Component {
    render() {
        return (        
            <ListItem twoLine>
                <ListItemContent avatar="cast" subtitle={this.props.time}>
                    {this.props.session}                    
                </ListItemContent>
            </ListItem>
        );
      }
}

export default SessionItem;