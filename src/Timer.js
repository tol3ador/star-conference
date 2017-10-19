import React, { Component } from 'react';
var soundEffect = require('./resources/tick-tock.mp3')

const Interval = 100;

class Timer extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            timeLeft: this.props.match.params.duration*60000,
            paused: true,
        }

        this.timeout = null;

        this.tick = this.tick.bind(this);
        this.startCountdown = this.startCountdown.bind(this);
        this.toggleCounter = this.toggleCounter.bind(this);
    }

    toggleCounter(){
        if (this.state.paused){
            this.startCountdown();
        } else {
            this.pauseCountdown();
        }
    }

    startCountdown(){
        this.tick();
        this.setState({
            paused: false,
        });
    }

    pauseCountdown(){
        if (this.timeout){
            clearTimeout(this.timeout)
            this.timeout = null;
        }
        this.setState({
            paused: true,
        });
    }

    tick(){
        this.setState({
            timeLeft: this.state.timeLeft - Interval,
        })
        this.timeout = setTimeout(this.tick, Interval)
    }


    render() {
        const firstReminderMinutes = 5;
        const secondReminderMinutes = 2;

        let minutes = Math.abs(this.state.timeLeft < 0 ? Math.ceil(this.state.timeLeft/60000) : Math.floor(this.state.timeLeft/60000));
        minutes = minutes < 10 ? '0'+minutes : minutes;

        let seconds = Math.abs(Math.floor(this.state.timeLeft/1000)%60);
        seconds = seconds < 10 ? '0'+seconds : seconds;

        const overtime = this.state.timeLeft < 0;
        const firstReminder = overtime || minutes < firstReminderMinutes;
        const secondReminder = overtime || minutes < secondReminderMinutes;

        let backgroundColor = secondReminder ? 'orange-background-transition ' : firstReminder ? 'blue-background-transition' : 'white-background';
        const mainTextColor = firstReminder ? 'white-transition' : 'orange';
        const additionalTextColor = firstReminder ? secondReminder ? 'white-transition' : 'blue-transition' : 'white';
        
        const mainText = overtime ? 'Maja Nedučić te ljutito gleda!' : 'Preostalo vreme';
        const additionalText = overtime ? 'Vreme je za pitanja' : 'Polako privedite Vaše predavanje kraju';

        const soundPlaying = !this.state.paused && !overtime && seconds < 10 && minutes < 1;

        if (overtime){
            if(seconds%2 < 1)
                backgroundColor = 'blue-background-transition';
            else
                backgroundColor = 'orange-background-transition';
        }

        return (
            <div className={`fullscreen ${backgroundColor} uppercase`} onClick={this.toggleCounter}>
                <div className="timer">
                    <div className={`${mainTextColor} bottom-right timer-additional-text`}>
                        {this.state.paused ? `▶` : `❚❚`}
                    </div>
                    <h3 className={`${mainTextColor} timer-main-text`}>{mainText}</h3>
                    <h1 className={`${mainTextColor} timer-numbers`}>
                        {`${minutes} : ${seconds}`}
                    </h1>
                    <h5 className={`${additionalTextColor} timer-additional-text`}>{additionalText}</h5>
                </div>
                {/* {soundPlaying ? <audio src={soundEffect} type="audio/mp3" autoPlay /> : null } */}
            </div>
        );
      }
    }
    
export default Timer;
    