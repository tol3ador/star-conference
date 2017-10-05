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
    //Time Format HH:MM
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
        if(process.env.NODE_ENV !== 'production'){
            let data = [{"id":4,"name":"SE-013","time__c":"2017-11-04T18:00:00.000Z","duration__c":30,"title__c":"Authentication & Authorization - oAuth2 and Open ID Protocols","type__c":"Talk","description__c":null,"stars__c":11,"speakers__c":"a000Y00000InD8kQAF"},{"id":8,"name":"SE-017","time__c":"2017-11-04T16:30:00.000Z","duration__c":30,"title__c":"BDD & TDD kroz primere u C#","type__c":"Talk","description__c":null,"stars__c":10,"speakers__c":"a000Y00000InD9JQAV"},{"id":3,"name":"SE-012","time__c":"2017-11-04T09:15:00.000Z","duration__c":30,"title__c":"Visitor Pattern Explained","type__c":"Talk","description__c":null,"stars__c":28,"speakers__c":"a000Y00000InD8fQAF"},{"id":1,"name":"SE-010","time__c":"2017-11-04T09:30:00.000Z","duration__c":30,"title__c":"HTTP Caching","type__c":"Talk","description__c":null,"stars__c":23,"speakers__c":"a000Y00000InD8VQAV"},{"id":2,"name":"SE-011","time__c":"2017-11-04T10:30:00.000Z","duration__c":30,"title__c":"Angular 2 Fundamentals & Best practices","type__c":"Talk","description__c":null,"stars__c":22,"speakers__c":"a000Y00000InD8aQAF"},{"id":7,"name":"SE-016","time__c":"2017-11-04T12:30:00.000Z","duration__c":30,"title__c":"Umbraco - Tip & Tricks","type__c":"Talk","description__c":null,"stars__c":12,"speakers__c":"a000Y00000InD9EQAV"},{"id":5,"name":"SE-014","time__c":"2017-11-04T11:00:00.000Z","duration__c":30,"title__c":"MVC 5 – Custom model binding","type__c":"Talk","description__c":null,"stars__c":13,"speakers__c":"a000Y00000InD8zQAF"},{"id":6,"name":"SE-015","time__c":"2017-11-04T16:00:00.000Z","duration__c":30,"title__c":"Get Real(time) With Websockets","type__c":"Talk","description__c":null,"stars__c":11,"speakers__c":"a000Y00000InD94QAF"}];
            this.setState({
                sessions: data,
                loading: false
            })
        }else{
            fetch(`/sessions`)
            .then(data => data.json())
            .then(items => {
                this.setState({
                    sessions: items,
                    loading: false
                })
            })
        }
    }

    render() {
        if(this.state.loading && !this.props.hide){
            return (
                <Loader>
                    <Spinner/>
                </Loader>
            );
        }else{
            return this.props.hide ? null : (
                <List>
                {
                    this.state.sessions.sort((a,b)=>{
                        //TimeDate Format YYYY-MM-DDTHH:MM:SS.SSSZ
                        return timeToMinutes(a.time__c.substring(11, 16)) > timeToMinutes(b.time__c.substring(11,16));
                    })
                    .map((session, i) => {
                        return <SessionItem title={session.title__c} 
                                            time={session.time__c.substring(11, 16)}
                                            stars={session.stars__c}
                                            name={session.name}
                                            id={session.id}/>
                    })
                }
                </List>
            );
        }
    }
  }
  
export default Timeline;
  