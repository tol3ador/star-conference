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
            feedback: null,
        }

        this.postFeedback = this.postFeedback.bind(this);
        this.preventClick = this.preventClick.bind(this);
        this.setInitialState = this.setInitialState.bind(this);
        this.clearAndClose = this.clearAndClose.bind(this);
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
                this.clearAndClose();
          })
    }

    clearAndClose() {
        this.setInitialState();
        this.props.close();
    }

    setInitialState() {
        this.setState({
            expectation: 1,
            readiness: 1,
            understandable: 1,
            method: 1,
            feedback: null,
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
        let value = e.target.value === '' ? null : e.target.value;
        this.setState({feedback: value})
    }

    render() {
        const show = this.props.show || false;
        const dialogTitle = this.props.title || 'Osamnaestkaraktera';

        return  <div onClick={this.props.close} className={`dialog ${show ? 'show' : ''}`}>
                    <div className='dialog-content' onClick={this.preventClick}>
                        <div className='dialog-header'>
                            <span>{dialogTitle}</span>
                        </div>
                        <form >
                            <div className='dialog-body'>
                                <label className="feedback-label">Ispunjena očekivanja: </label>
                                <ReactStars className="horizontal-center" size={24} half={false} color2={'#F15A2B'} color1={'#407492'}
                                    value={this.state.expectation}
                                    onChange={this.expectationChanged.bind(this)}
                                />
                                <label className="feedback-label">Pripremljenost predavača: </label>
                                <ReactStars className="horizontal-center" size={24} half={false} color2={'#F15A2B'} color1={'#407492'}
                                    value={this.state.readiness}
                                    onChange={this.readinessChanged.bind(this)}
                                />
                                <label className="feedback-label">Metod predavanja: </label>
                                <ReactStars className="horizontal-center" size={24} half={false} color2={'#F15A2B'} color1={'#407492'}
                                    value={this.state.understandable}
                                    onChange={this.understandableChanged.bind(this)}
                                />
                                <label className="feedback-label">Razumljivost predavanja: </label>
                                <ReactStars className="horizontal-center" size={24} half={false} color2={'#F15A2B'} color1={'#407492'}
                                    value={this.state.method}
                                    onChange={this.methodChanged.bind(this)}
                                />
                                <Textfield floatingLabel={true} value={this.state.feedback} onChange={this.handleFeedbackText.bind(this)} label="Dodatne sugestije ili kritike" />
                            
                                <div className='dialog-actions'>
                                    <Button type='button' onClick={this.postFeedback}>Submit</Button>
                                    <Button type='button' onClick={this.clearAndClose}>Close</Button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
    }
}

export default FeedbackDialog;