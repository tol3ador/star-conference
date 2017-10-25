import React, { Component } from 'react';
import { Card, CardTitle, CardActions, Icon } from 'react-mdl';

class SpeakerItem extends Component {
    render() {
        return (        
            <Card shadow={0} className="card speaker" style={{background: `url(${this.props.image}) center / cover`}}>
                <CardTitle expand />
                <CardActions className="card-actions speaker">
                    <span className="card-description speaker font-white">
                        {this.props.name}
                    </span>
                    <Icon name="speaker_notes" className="link font-white" 
                            onClick={() => this.props.openDialog({
                                    Title: this.props.name,
                                    Id: this.props.speakerId
                                })
                            }/>
                </CardActions>
            </Card>
        );
      }
}

export default SpeakerItem;