import React, { Component } from 'react';

const Interval = 100;
const ReminderMinutes = 5;

class Timer extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            timeLeft: this.props.match.params.duration*60000,
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
        const overtimeText = minutes >= ReminderMinutes ? `Naredno predavanje počinje za: ${15-minutes} minuta` : 'Predviđeno vreme za pitanja: 5 minuta'; 

        return (
            <div className={`fullscreen ${backgroundColor} uppercase`} onClick={this.startCountdown}>
                <div className="timer">
                    <h3 className={textColor}>{overtime ? minutes >= 10 ? 'Maja Nedučić te ljutito gleda!' : 'Prekoračeno vreme:' : 'Preostalo vreme:'}</h3>
                    <h1 className={textColor}>
                        {`${minutes} : ${seconds}`}
                    </h1>
                    <h5 className='white-transition' style={{display: `${overtime ? 'block' : 'none'}`}}>{overtimeText}</h5>
                </div>
            </div>
        );
      }
    }
    
export default Timer;
    