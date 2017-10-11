import React, { Component } from 'react';
import SessionItem from './SessionItem.js';
import { Spinner } from 'react-mdl';

class Timeline extends Component {
    constructor (props) {
        super(props);
        this.state = {sessions: []}
        this.state = {loading: true}
    }
    componentDidMount(){
        if(process.env.NODE_ENV !== 'production'){
            this.setState({
                sessions: require('./../../resources/static_sessions.json'),
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
                <div className="loader">
                    <Spinner/>
                </div>
            );
        }else{
            return this.props.hide ? null : (
                <div>
                {
                    this.state.sessions.map(session => {
                        return <SessionItem title={session.title__c} 
                                            time={session.time__c.substring(11, 16)}
                                            speaker={session.speaker_name__c}
                                            stars={session.stars__c}
                                            name={session.name}
                                            type={session.type__c}
                                            duration={session.duration__c}
                                            id={session.id}/>
                    })
                }
                </div>
            );
        }
    }
  }
  
export default Timeline;
  