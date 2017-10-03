import React, { Component } from 'react';
import style from 'styled-components';
import SessionItem from './SessionItem.js';
import { List, Spinner } from 'react-mdl';

const Loader = style.div`
    position: absolute;
    left: 50%;
    top: 50%;
`;

const timeToMinutes = function(timeString)
{
    return timeString.split`:`.map((part, index)=>{
        return index ? +part : 60*part
    }).reduce((minutes, sum) => {
        return sum+=minutes;
    }, 0);
}

class Timeline extends Component {

    constructor(props){
        super(props);
        this.state = {sessions: []}
        this.state = {loading: true}
    }

    componentDidMount(){
        fetch(`/sessions`)
        .then(data => data.json())
        .then(items => {
            this.setState({
                sessions: items,
                loading: false
            })
        })
    }

    render() {
        if(this.state.loading && !this.props.hide){
            return (
                <Loader>
                    <Spinner/>
                </Loader>
            );
        }else{
            if(this.props.hide){
                return null;
            }else{
                return (
                    <List>
                    {
                        this.state.sessions.sort((a,b)=>{
                            //TimeFormat YYYY-MM-DDTHH:MM:SS.SSSZ
                            return timeToMinutes(a.time__c.substring(11,16)) > timeToMinutes(b.time__c.substring(11,16));
                        })
                        .map((session, i) => {
                            return <SessionItem title={session.title__c} 
                                                time={session.time__c.substring(11, 16)}
                                                stars={session.stars__c}
                                                rated={false} //TODO: READ COOKIE!
                                                id={session.id}/>
                        })
                    }
                    </List>
                );
            }
        }
    }
  }
  
export default Timeline;
  