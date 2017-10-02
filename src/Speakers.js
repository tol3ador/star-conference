import React, { Component } from 'react';
//import style from 'styled-components';
import SpeakerItem from './SpeakerItem.js';
import { List } from 'react-mdl';

class Speakers extends Component {

    constructor(){
        super();
        this.state = {speakers: []}
    }

    componentDidMount(){
        fetch(`/speakers`)
        .then(data => data.json())
        .then(items => {
            this.setState({
                speakers: items
            })
        });
    }

    render() {
      return (
        <List>
        {
            this.state.speakers.map((speaker, i) => {
                return <SpeakerItem name={speaker.full_name__c} 
                                    image="https://www.vegaitsourcing.rs/media/1899/nenad-percic_website.jpg"
                                    session={speaker.session_title__c}/>
            })
        }
        </List>
      );
    }
  }
  
export default Speakers;
  