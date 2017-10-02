import React, { Component } from 'react';
//import style from 'styled-components';
import SpeakerItem from './SpeakerItem.js';
import { List } from 'react-mdl';

const speakersList = [
    {"full_name__c":"Miloš Davidović","picture_path__c":null,"session_title__c":"Get Real(time) With Websockets"},
    {"full_name__c":"Nenad Maljugić","picture_path__c":null,"session_title__c":"Umbraco - Tip & Tricks"},
    {"full_name__c":"Milan Kosanović","picture_path__c":null,"session_title__c":"Visitor Pattern Explained"},
    {"full_name__c":"Ivana Tešanović","picture_path__c":null,"session_title__c":"Angular 2 Fundamentals & Best practices"},
    {"full_name__c":"Ognjen Stanić","picture_path__c":null,"session_title__c":"BDD & TDD kroz primere u C#"},
    {"full_name__c":"Miroslav Stojaković","picture_path__c":null,"session_title__c":"Authentication & Authorization - oAuth2 and Open ID protocols (demonstration of implicit Flow)"},
    {"full_name__c":"Dejan Ostojić","picture_path__c":null,"session_title__c":"HTTP Caching"},
    {"full_name__c":"Miroljub Enjaković","picture_path__c":"/servlet/servlet.FileDownload?file=00P0Y000008K7OlUAK","session_title__c":"MVC 5 - Custom model binding"}
    ];

class Speakers extends Component {

    constructor(){
        super();
        this.state = {speakerList: []}
    }

    componentDidMount(){
        fetch(`https://star-conference.herokuapp.com/speakers`)
        .then(data => data.json())
        .then(items => {
            this.setState({
                speakersList: items
            })
        });
    }

    render() {
      return (
        <List>
        {
            speakersList.sort((a, b)=>{
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
  
export default Speakers;
  