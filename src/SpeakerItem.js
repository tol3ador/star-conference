import React, { Component } from 'react';
import { Card, CardTitle, CardActions, Icon } from 'react-mdl';

class SpeakerItem extends Component {

    render() {

        return (        
            <Card shadow={0} style={{width: '150px', height: '150px', background: `url(${this.props.image}) center / cover`, margin: 'auto'}}>
                <CardTitle expand />
                <CardActions style={{height: '40px', padding: '5px', background: 'rgba(0,0,0,0.15)'}}>
                    <span style={{color: '#fff', fontSize: '10px', fontWeight: '500'}}>
                        {this.props.name}
                    </span>
                    <Icon name="speaker_notes" style={{color: '#fff'}} />
                </CardActions>
            </Card>
        );
      }
}

export default SpeakerItem;