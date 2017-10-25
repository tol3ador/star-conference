import React, { Component } from 'react';
//var soundEffect = require('./resources/tick-tock.mp3')

const Interval = 100;

class Timer extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            timeLeft: this.props.match.params.duration*60000,
            paused: true,
            showText: true,
        }

        this.timeout = null;

        this.tick = this.tick.bind(this);
        this.startCountdown = this.startCountdown.bind(this);
        this.toggleText = this.toggleText.bind(this);
        this.toggleCounter = this.toggleCounter.bind(this);
    }

    toggleText(event){
        event.preventDefault();
        if (this.state.showText) {
            this.setState({
                showText: false,
            })
        } else {
            this.setState({
                showText: true,
            })
        }
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
        let mainTextColor = firstReminder ? 'white-transition' : 'orange-transition';
        const controlsColor = mainTextColor;
        const additionalTextColor = firstReminder ? secondReminder ? 'white-transition' : 'blue-transition' : 'white';
        
        const mainText = overtime ? 'Maja Nedučić te ljutito gleda!' : 'Preostalo vreme';
        const additionalText = overtime ? 'Vreme je za pitanja' : 'Polako privedite Vaše predavanje kraju';

        if (overtime){
            if(seconds%2 < 1)
                backgroundColor = 'blue-background-transition';
            else
                backgroundColor = 'orange-background-transition';
        }

        if (!this.state.showText) {
            mainTextColor = 'white-transition';
        }

        return (
            <div className={`fullscreen ${backgroundColor} uppercase`} onClick={this.toggleCounter} >
                <div className="timer">
                    <div className={`${controlsColor} bottom-right timer-additional-text`}>
                        {this.state.showText ? null : !firstReminder ? <i class="material-icons">remove_red_eye</i> : null}
                        {this.state.paused ? <i class="material-icons">play_circle_outline</i> : <i class="material-icons">pause</i>}
                    </div>
                    <h3 className={`${mainTextColor} timer-main-text`}>{mainText}</h3>
                    <h1 className={`${mainTextColor} timer-numbers`}>
                        {`${minutes} : ${seconds}`}
                    </h1>
                    <h5 className={`${additionalTextColor} timer-additional-text`}>{additionalText}</h5>
                </div>
            </div>
        );
      }
    }
    
export default Timer;
    