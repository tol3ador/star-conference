import React, { Component } from 'react';
import style from 'styled-components';
import SessionItem from './SessionItem.js';
import { List, Spinner } from 'react-mdl';

const Loader = style.div`
    position: absolute;
    left: 50%;
    top: 50%;
`;

class Timeline extends Component {

    constructor(props){
        super(props);
        this.state = {sessions: []}
        this.state = {loading: true}
    }

    componentDidMount(){
        if(process.env.NODE_ENV !== 'production'){
            let data = [{"id":4,"name":"SE-013","time__c":"2017-11-04T18:00:00.000Z","duration__c":30,"title__c":"Authentication & Authorization - oAuth2 and Open ID Protocols (demonstration of Implicit Flow)","type__c":"Talk","description__c":null,"stars__c":13,"speaker_name__c":"Miroslav Stojaković"},{"id":8,"name":"SE-017","time__c":"2017-11-04T16:30:00.000Z","duration__c":30,"title__c":"BDD & TDD kroz primere u C#","type__c":"Talk","description__c":null,"stars__c":3,"speaker_name__c":"Ognjen Stanić"},{"id":6,"name":"SE-015","time__c":"2017-11-04T16:00:00.000Z","duration__c":30,"title__c":"Get Real(time) With Websockets","type__c":"Talk","description__c":null,"stars__c":13,"speaker_name__c":"Miloš Davidović"},{"id":3,"name":"SE-012","time__c":"2017-11-04T09:15:00.000Z","duration__c":30,"title__c":"Visitor Pattern Explained","type__c":"Talk","description__c":null,"stars__c":33,"speaker_name__c":"Milan Kosanović"},{"id":11,"name":"SE-020","time__c":"2017-11-04T09:00:00.000Z","duration__c":15,"title__c":"Welcome Words","type__c":"Break","description__c":null,"stars__c":0,"speaker_name__c":null},{"id":5,"name":"SE-014","time__c":"2017-11-04T11:00:00.000Z","duration__c":30,"title__c":"MVC 5 – Custom model binding","type__c":"Talk","description__c":null,"stars__c":16,"speaker_name__c":"Miroljub Enjaković"},{"id":2,"name":"SE-011","time__c":"2017-11-04T10:30:00.000Z","duration__c":30,"title__c":"Angular 2 Fundamentals & Best practices","type__c":"Talk","description__c":null,"stars__c":24,"speaker_name__c":"Ivana Tešanović"},{"id":7,"name":"SE-016","time__c":"2017-11-04T12:30:00.000Z","duration__c":30,"title__c":"Umbraco - Tip & Tricks","type__c":"Talk","description__c":null,"stars__c":15,"speaker_name__c":"Nenad Maljugić"},{"id":1,"name":"SE-010","time__c":"2017-11-04T09:30:00.000Z","duration__c":30,"title__c":"HTTP Caching","type__c":"Talk","description__c":null,"stars__c":25,"speaker_name__c":"Dejan Ostojić"},{"id":10,"name":"SE-019","time__c":"2017-11-04T19:30:00.000Z","duration__c":30,"title__c":"Mystery Talk","type__c":"Talk","description__c":null,"stars__c":1,"speaker_name__c":"Mystery Speaker"},{"id":9,"name":"SE-018","time__c":"2017-11-04T20:00:00.000Z","duration__c":60,"title__c":"DEVELOPERS’ TALK","type__c":"Panel Discussion","description__c":"1. Principi kvalitetnog dizajna I programiranja\n2. Dizajn šabloni\n3. Unit testiranje\n4. Refaktorisanje","stars__c":1,"speaker_name__c":"Nikola Živković"}];
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
                    this.state.sessions.map((session, i) => {
                        return <SessionItem title={session.title__c} 
                                            time={session.time__c.substring(11, 16)}
                                            stars={session.stars__c}
                                            name={session.name}
                                            type={session.type__c}
                                            duration={session.duration__c}
                                            id={session.id}/>
                    })
                }
                </List>
            );
        }
    }
  }
  
export default Timeline;
  