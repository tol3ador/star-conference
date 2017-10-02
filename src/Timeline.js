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
        if(this.state.loading){
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
                            a.split`:`[0] < b.split`:`[0];
                        })
                        .map((session, i) => {
                            return <SessionItem session={session.session_title__c} 
                                                time={session.time__c}/>
                        })
                    }
                    </List>
                );
            }
        }
    }
  }
  
export default Timeline;
  