import React, { Component } from 'react';
import { Card, CardTitle, CardActions, Icon, Button, Dialog, DialogTitle, DialogContent, DialogActions, Textfield, RadioGroup, Radio } from 'react-mdl';

class SpeakerItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expectation: "5",
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleOpenDialog = this.handleOpenDialog.bind(this);
        this.handleCloseDialog = this.handleCloseDialog.bind(this);
        this.handlePostFeedback = this.handlePostFeedback.bind(this);
    }
    
    handleChange(e){
       this.setState({[e.target.name]: e.target.value})
    }

    handlePostFeedback(){
        fetch('/feedback', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }, // FIX BACK TO INDIVIDUAL RATES
            body: JSON.stringify({
                speaker: this.props.speakerId,
                expectation: this.state.expectation,
                readiness: this.state.expectation,
                understandable: this.state.expectation,
                method: this.state.expectation,
                feedback: this.state.expectation,
            })
          }).then(()=>{
                this.handleCloseDialog();
          })
    }
  
    handleOpenDialog() {
        this.setState({
            openDialog: true
        });
    }
  
    handleCloseDialog() {
        this.setState({
            openDialog: false
        });
    }

    render() {
        return (        
            <Card shadow={0} className="card speaker" style={{background: `url(${this.props.image}) center / cover`}}>
                <CardTitle expand />
                <CardActions className="card-actions speaker">
                    <span className="card-description speaker font-white">
                        {this.props.name}
                    </span>
                    <Icon ripple name="speaker_notes" className="font-white" onClick={this.handleOpenDialog} />
                </CardActions>
                <Dialog open={this.state.openDialog}>
                    <DialogTitle className="feedback title">{this.props.name}</DialogTitle>
                    <DialogContent>
                        <RadioGroup name="expectation" value={this.state.expectation} onChange={this.handleChange}>
                            <Radio value="1" ripple/>
                            <Radio value="2" ripple/>
                            <Radio value="3" ripple/>
                            <Radio value="4" ripple/>
                            <Radio value="5" ripple/>
                        </RadioGroup>
                        <Textfield floatingLabel onChange={() => {}} label="Additional feedback" rows={1} />
                    </DialogContent>
                    <DialogActions>
                        <Button type='button' onClick={this.handleCloseDialog}>Close</Button>
                        <Button type='button' onClick={this.handlePostFeedback}>Submit</Button>
                    </DialogActions>
                </Dialog>
            </Card>
        );
      }
}

export default SpeakerItem;