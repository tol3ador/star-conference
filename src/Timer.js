import React, { Component } from 'react';

const MtoMS = (value) => {
    return value*60000;
}

const Interval = 100;
const ReminderMinutes = 5;

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
        let minutes = Math.abs(this.state.timeLeft < 0 ? Math.ceil(this.state.timeLeft/60000) : Math.floor(this.state.timeLeft/60000));
        minutes = minutes < 10 ? '0'+minutes : minutes;

        let seconds = Math.abs(Math.floor(this.state.timeLeft/1000)%60);
        seconds = seconds < 10 ? '0'+seconds : seconds;

        const overtime = this.state.timeLeft < 0;
        const reminder = overtime || minutes < ReminderMinutes;

        const backgroundColor = overtime ? 'orange-background-transition ' : reminder ? 'blue-background-transition' : 'white-background';
        const textColor = reminder ? 'white-transition' : 'orange';

        return (
            <div className={`fullscreen ${backgroundColor} uppercase`} onClick={this.startCountdown}>
                <div className="timer">
                    <h3 className={textColor}>{overtime ? 'Prekoračeno vreme:' : 'Preostalo vreme:'}</h3>
                    <h1 className={textColor}>
                        {`${minutes} : ${seconds}`}
                    </h1>
                    <h3 className='white-transition' style={{display: `${overtime ? 'block' : 'none'}`}}>Maja Nedučić te ljutito gleda!</h3>
                </div>
            </div>
        );
      }
    }
    
export default Timer;
    