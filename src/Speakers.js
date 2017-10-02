import React, { Component } from 'react';
import style from 'styled-components';
import SpeakerItem from './SpeakerItem.js';
import { List, Spinner } from 'react-mdl';

const Loader = style.div`
    position: absolute;
    left: 50%;
    top: 50%;
`;

class Speakers extends Component {

    constructor(props){
        super(props);
        this.state = {speakers: []}
        this.state = {loading: true}
    }

    componentDidMount(){
        fetch(`/speakers`)
        .then(data => data.json())
        .then(items => {
            this.setState({
                speakers: items,
                loading: false
            })
        })
    }

    render() {
        if(this.state.loading && !this.state.hide){
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
                        this.state.speakers.sort((a,b)=>{
                            return a.full_name__c.charAt(0) > b.full_name__c.charAt(0);
                        })
                        .map((speaker, i) => {
                            return <SpeakerItem name={speaker.full_name__c} 
                                                image="https://www.vegaitsourcing.rs/media/1899/nenad-percic_website.jpg"
                                                session={speaker.session_title__c}/>
                        })
                    }
                    </List>
                );
            }
        }
    }
  }
  
export default Speakers;
  