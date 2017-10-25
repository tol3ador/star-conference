import React, { Component } from 'react';
import { Button, Textfield } from 'react-mdl';
import ReactStars from 'react-stars';

class FeedbackDialog extends Component {
    constructor(props){
        super(props);
        this.state = {
            expectation: 1,
            readiness: 1,
            understandable: 1,
            method: 1,
            feedback: 'No additional feedback',
        }

        this.postFeedback = this.postFeedback.bind(this);
        this.clearInputs = this.clearInputs.bind(this);
        this.preventClick = this.preventClick.bind(this);
    }

    clearInputs(){
        this.setState({
            expectation: 1,
            readiness: 1,
            understandable: 1,
            method: 1,
            feedback: 'No additional feedback',
        });
    }

    postFeedback() {
        fetch('/feedback', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }, 
            body: JSON.stringify({
                speaker: this.props.submitId,
                expectation: this.state.expectation,
                readiness: this.state.readiness,
                understandable: this.state.understandable,
                method: this.state.method,
                feedback: this.state.feedback,
            })
          }).then(()=>{
                this.clearInputs();
                this.props.close();
          })
    }

    preventClick(e){
        e.stopPropagation();
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

    render() {
        const show = this.props.show || false;
        const dialogTitle = this.props.title || 'Title';

        return  <div onClick={this.props.close} className={`dialog ${show ? 'show' : ''}`}>
                    <div className='dialog-content' onClick={this.preventClick}>
                        <div className='dialog-header'>
                            <span> {dialogTitle} </span>
                        </div>
                        <div className='dialog-body'>
                            <label className="feedback-label">Ispunjena očekivanja: </label>
                            <ReactStars className="horizontal-center" size={32} half={false} color2={'#F15A2B'} color1={'#407492'}
                                value={this.state.expectation}
                                onChange={this.expectationChanged.bind(this)}
                            />
                            <label className="feedback-label">Pripremljenost predavača: </label>
                            <ReactStars className="horizontal-center" size={32} half={false} color2={'#F15A2B'} color1={'#407492'}
                                value={this.state.readiness}
                                onChange={this.readinessChanged.bind(this)}
                            />
                            <label className="feedback-label">Metod predavanja: </label>
                            <ReactStars className="horizontal-center" size={32} half={false} color2={'#F15A2B'} color1={'#407492'}
                                value={this.state.understandable}
                                onChange={this.understandableChanged.bind(this)}
                            />
                            <label className="feedback-label">Razumljivost predavanja: </label>
                            <ReactStars className="horizontal-center" size={32} half={false} color2={'#F15A2B'} color1={'#407492'}
                                value={this.state.method}
                                onChange={this.methodChanged.bind(this)}
                            />
                            <Textfield floatingLabel={true} onChange={this.handleFeedbackText.bind(this)} label="Dodatne sugestije ili kritike" rows={2} />
                            <div className='dialog-actions'>
                                <Button type='button' onClick={this.postFeedback}>Submit</Button>
                                <Button type='button' onClick={this.props.close}>Close</Button>
                            </div>
                        </div>
                    </div>
                </div>
    }
}

export default FeedbackDialog;