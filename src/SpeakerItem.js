import React, { Component } from 'react';
import { Card, CardTitle, CardActions, Icon, Button } from 'react-mdl';

class SpeakerItem extends Component {

    render() {

        return (        
            <Card shadow={0} style={{width: '300px', height: '300px', background: `url(${this.props.image}) center / cover`, margin: 'auto'}}>
                <CardTitle expand />
                <CardActions style={{height: '52px', padding: '16px', background: 'rgba(0,0,0,0.2)'}}>
                    <span style={{color: '#fff', fontSize: '14px', fontWeight: '500'}}>
                        {this.props.name}
                    </span>
                    <Button>
                        <Icon name="speaker_notes" style={{color: '#fff'}}></Icon>
                    </Button>
                </CardActions>
            </Card>
        );
      }
}

export default SpeakerItem;