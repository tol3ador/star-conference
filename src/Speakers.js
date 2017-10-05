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
        if(process.env.NODE_ENV !== 'production'){
            let data = [{"name":"SP-013","name__c":"Ivana Tešanović","image__c":"https://star-conference-dev-ed.my.salesforce.com/sfc/p/0Y0000035OaM/a/0Y000000CjE4/pO3f04NqZwvz8cNDk38ksmRBBj0byINJsdUx34N_jdQ","session_title__c":"Angular 2 Fundamentals & Best practices"},{"name":"SP-019","name__c":"Ognjen Stanić","image__c":"https://star-conference-dev-ed.my.salesforce.com/sfc/p/0Y0000035OaM/a/0Y000000CjE9/6SQ0QmAeLhuIuhDAAvFdpHrYF1HaDHQd7E_V2kLNErQ","session_title__c":"BDD & TDD kroz primere u C#"},{"name":"SP-016","name__c":"Miroljub Enjaković","image__c":"https://star-conference-dev-ed.my.salesforce.com/sfc/p/0Y0000035OaM/a/0Y000000CjEE/VhxeBTezAgsiRfpwYePOtzUSlt6c6UfziFxaSpnPO3g","session_title__c":"MVC 5 – Custom model binding"},{"name":"SP-018","name__c":"Nenad Maljugić","image__c":"https://star-conference-dev-ed.my.salesforce.com/sfc/p/0Y0000035OaM/a/0Y000000CjDz/brzpvEbxY.3OlRykuXocOkcWBFkQCxiJQdXM2rCnYX4","session_title__c":"Umbraco - Tip & Tricks"},{"name":"SP-017","name__c":"Miloš Davidović","image__c":"https://star-conference-dev-ed.my.salesforce.com/sfc/p/0Y0000035OaM/a/0Y000000CjEJ/RI6kbfZY8ACVSsZMtZqcigHIkk1O_bFwHzaxTyKWxus","session_title__c":"Get Real(time) With Websockets"},{"name":"SP-020","name__c":"Miroslav Stojaković","image__c":"https://star-conference-dev-ed.my.salesforce.com/sfc/p/0Y0000035OaM/a/0Y000000CjEO/Z67l85xKqSEonXRWfGsSD6eJTxiWH6zWVjGdq0upyYY","session_title__c":"Authentication & Authorization - oAuth2 and Open ID Protocols (demonstration of Implicit Flow)"},{"name":"SP-012","name__c":"Dejan Ostojić","image__c":"https://star-conference-dev-ed.my.salesforce.com/sfc/p/0Y0000035OaM/a/0Y000000CjET/bg7KjPctar8npg0qJ_yeOWa7IfYhIuhy3ois6FDpGHg","session_title__c":"HTTP Caching"},{"name":"SP-014","name__c":"Milan Kosanović","image__c":"https://star-conference-dev-ed.my.salesforce.com/sfc/p/0Y0000035OaM/a/0Y000000CjEY/Dcz1_gZYWoTFyEgeL8Dmvyi6uWc6RYMAtirRdgKxEzU","session_title__c":"Visitor Pattern Explained"}];
            this.setState({
                speakers: data,
                loading: false
            })
        }else{
            fetch(`/speakers`)
            .then(data => data.json())
            .then(items => {
                this.setState({
                    speakers: items,
                    loading: false
                })
            })
        }
    }

    render() {
        if(this.state.loading && !this.state.hide){
            return ( 
                <Loader>
                    <Spinner/>
                </Loader>
            );
        }else{
            return this.props.hide ? null : (
                <List>
                {
                    this.state.speakers.sort((a,b)=>{
                        return a.name__c.charAt(0) > b.name__c.charAt(0);
                    })
                    .map(speaker => {
                        return <SpeakerItem name={speaker.name__c} 
                                            image={speaker.image__c} />
                    })
                }
                </List>
            );
        }
    }
  }
  
export default Speakers;
  