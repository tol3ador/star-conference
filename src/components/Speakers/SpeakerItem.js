import React, { Component } from 'react';
import { Card, CardTitle, CardActions, Icon, Button, Dialog, DialogTitle, DialogContent, DialogActions, Textfield } from 'react-mdl';
import ReactStars from 'react-stars'

class SpeakerItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expectation: '5',
            readiness: '5',
            understandable: '5',
            method: '5',
            feedback: null,
            fetching: false,
        };

        this.handleOpenDialog = this.handleOpenDialog.bind(this);
        this.handleCloseDialog = this.handleCloseDialog.bind(this);
        this.postFeedback = this.postFeedback.bind(this);
    }

    postFeedback(){
        this.setState({fetching: true});
        fetch('/feedback', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }, 
            body: JSON.stringify({
                speaker: this.props.speakerId,
                expectation: this.state.expectation,
                readiness: this.state.readiness,
                understandable: this.state.understandable,
                method: this.state.method,
                feedback: this.state.feedback,
            })
          }).then(()=>{
                this.setState({fetching: false})
                this.handleCloseDialog();
          })
    }

    expectationChanged(newRating) { 
        this.setState({expectation: newRating});
    }
    readinessChanged(newRating) { 
        this.setState({readiness: newRating});
    }
    understandableChanged(newRating) { 
        this.setState({understandable: newRating});
    }
    methodChanged(newRating) { 
        this.setState({method: newRating});
    }
    handleFeedbackText(e){
        this.setState({feedback: e.target.value})
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
                    <DialogTitle>{this.props.name}</DialogTitle>
                    <DialogContent disabled={this.state.fetching}>
                        <ReactStars size={32} half={false} color2={'#F15A2B'} color1={'#407492'}
                            value={this.state.expectation}
                            onChange={this.expectationChanged.bind(this)}
                        />
                        <ReactStars size={32} half={false} color2={'#F15A2B'} color1={'#407492'}
                            value={this.state.readiness}
                            onChange={this.readinessChanged.bind(this)}
                        />
                        <ReactStars size={32} half={false} color2={'#F15A2B'} color1={'#407492'}
                            value={this.state.understandable}
                            onChange={this.understandableChanged.bind(this)}
                        />
                        <ReactStars size={32} half={false} color2={'#F15A2B'} color1={'#407492'}
                            value={this.state.method}
                            onChange={this.methodChanged.bind(this)}
                        />
                        <Textfield floatingLabel onChange={this.handleFeedbackText.bind(this)} label="Additional feedback" rows={1} />
                    </DialogContent>
                    <DialogActions>
                        <Button type='button' onClick={this.handleCloseDialog}>Close</Button>
                        <Button type='button' onClick={this.postFeedback}>Submit</Button>
                    </DialogActions>
                </Dialog>
            </Card>
        );
      }
}

export default SpeakerItem;