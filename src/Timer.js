import React, { Component } from 'react';

const MtoMS = (value) => {
    return value*60000;
}

const Interval = 100;

class Timer extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            totalTime: MtoMS(this.props.match.params.duration),
            timeLeft: MtoMS(this.props.match.params.duration),
            running: false,
        }

        this.tick = this.tick.bind(this);
        this.startCountdown = this.startCountdown.bind(this);
    }

    startCountdown(){
        this.tick();
        this.setState({
            running: true,
        })
    }

    tick(){
        this.setState({
            timeLeft: this.state.timeLeft - Interval,
        })
        setTimeout(this.tick, Interval);
    }


    render() {
        const alpha = Math.min(1,1-Math.floor(100*this.state.timeLeft/this.state.totalTime)/100);
        const color = alpha !== 1 ? `rgba(64, 116, 146, ${alpha})` : `rgb(241,90,43)`;

        let minutes = Math.abs(this.state.timeLeft < 0 ? Math.ceil(this.state.timeLeft/60000) : Math.floor(this.state.timeLeft/60000));
        minutes = minutes < 10 ? '0'+minutes : minutes;

        let seconds = Math.abs(Math.floor(this.state.timeLeft/1000)%60);
        seconds = seconds < 10 ? '0'+seconds : seconds;

        return (
            <div className="fullscreen" onClick={this.startCountdown} style={{backgroundColor: color}}>
                <div className="timer">
                <h1 className={alpha > 0.50 ? 'white' : 'orange'} style={{fontSize: `${500*(1+alpha)}%`}}>
                    {`${minutes} : ${seconds}`}
                </h1>
                <h3 className='white' style={{display: `${alpha === 1 ? 'block' : 'none'}`}}>Maja Nedučić te ljutito gleda!</h3>
                </div>
            </div>
        );
      }
    }
    
export default Timer;
    