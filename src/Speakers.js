import React, { Component } from 'react';
import SpeakerItem from './SpeakerItem.js';
import { Spinner, Grid, Cell } from 'react-mdl';

class Speakers extends Component {
    constructor(props){
        super(props);
        this.state = {speakers: []}
        this.state = {loading: true}
    }
    componentDidMount(){
        if(process.env.NODE_ENV !== 'production'){
            let data = [{"name":"SP-013","name__c":"Ivana Tešanović","image__c":"https://star-conference-dev-ed--c.eu11.content.force.com/sfc/dist/version/download/?oid=00D0Y0000035OaM&ids=0680Y000001lzdk&d=/a/0Y000000CjE4/pO3f04NqZwvz8cNDk38ksmRBBj0byINJsdUx34N_jdQ&operationContext=DELIVERY&dpt=null","session_title__c":"Angular 2 Fundamentals & Best practices"},{"name":"SP-019","name__c":"Ognjen Stanić","image__c":"https://star-conference-dev-ed--c.eu11.content.force.com/sfc/dist/version/download/?oid=00D0Y0000035OaM&ids=0680Y000001lzdp&d=/a/0Y000000CjE9/6SQ0QmAeLhuIuhDAAvFdpHrYF1HaDHQd7E_V2kLNErQ&operationContext=DELIVERY&dpt=null","session_title__c":"BDD & TDD kroz primere u C#"},{"name":"SP-016","name__c":"Miroljub Enjaković","image__c":"https://star-conference-dev-ed--c.eu11.content.force.com/sfc/dist/version/download/?oid=00D0Y0000035OaM&ids=0680Y000001lze4&d=/a/0Y000000CjEE/VhxeBTezAgsiRfpwYePOtzUSlt6c6UfziFxaSpnPO3g&operationContext=DELIVERY&dpt=null","session_title__c":"MVC 5 – Custom model binding"},{"name":"SP-018","name__c":"Nenad Maljugić","image__c":"https://star-conference-dev-ed--c.eu11.content.force.com/sfc/dist/version/download/?oid=00D0Y0000035OaM&ids=0680Y000001lzcw&d=/a/0Y000000CjDz/brzpvEbxY.3OlRykuXocOkcWBFkQCxiJQdXM2rCnYX4&operationContext=DELIVERY&dpt=null","session_title__c":"Umbraco - Tip & Tricks"},{"name":"SP-017","name__c":"Miloš Davidović","image__c":"https://star-conference-dev-ed--c.eu11.content.force.com/sfc/dist/version/download/?oid=00D0Y0000035OaM&ids=0680Y000001lzeO&d=/a/0Y000000CjEJ/RI6kbfZY8ACVSsZMtZqcigHIkk1O_bFwHzaxTyKWxus&operationContext=DELIVERY&dpt=null","session_title__c":"Get Real(time) With Websockets"},{"name":"SP-020","name__c":"Miroslav Stojaković","image__c":"https://star-conference-dev-ed--c.eu11.content.force.com/sfc/dist/version/download/?oid=00D0Y0000035OaM&ids=0680Y000001lzbB&d=/a/0Y000000CjEO/Z67l85xKqSEonXRWfGsSD6eJTxiWH6zWVjGdq0upyYY&operationContext=DELIVERY&dpt=null","session_title__c":"Authentication & Authorization - oAuth2 and Open ID Protocols (demonstration of Implicit Flow)"},{"name":"SP-012","name__c":"Dejan Ostojić","image__c":"https://star-conference-dev-ed--c.eu11.content.force.com/sfc/dist/version/download/?oid=00D0Y0000035OaM&ids=0680Y000001lzbo&d=/a/0Y000000CjET/bg7KjPctar8npg0qJ_yeOWa7IfYhIuhy3ois6FDpGHg&operationContext=DELIVERY&dpt=null","session_title__c":"HTTP Caching"},{"name":"SP-014","name__c":"Milan Kosanović","image__c":"https://star-conference-dev-ed--c.eu11.content.force.com/sfc/dist/version/download/?oid=00D0Y0000035OaM&ids=0680Y000001lzcm&d=/a/0Y000000CjEY/Dcz1_gZYWoTFyEgeL8Dmvyi6uWc6RYMAtirRdgKxEzU&operationContext=DELIVERY&dpt=null","session_title__c":"Visitor Pattern Explained"},{"name":"SP-021","name__c":"Ivan Nemeš","image__c":"https://star-conference-dev-ed--c.eu11.content.force.com/sfc/dist/version/download/?oid=00D0Y0000035OaM&ids=0680Y000001lznz&d=/a/0Y000000CjFC/4Cs0s63rqWOjw96gIxGKDNkRFNmyf29QIkl7ymccyWA&operationContext=DELIVERY&dpt=null","session_title__c":"DEVELOPERS’ TALK"},{"name":"SP-022","name__c":"Saša Novaković","image__c":"https://star-conference-dev-ed--c.eu11.content.force.com/sfc/dist/version/download/?oid=00D0Y0000035OaM&ids=0680Y000001lzoE&d=/a/0Y000000CjFH/L0rqv7Rb.lkADWmURTXnT.6RejYaowOGYzwE4iM.mY8&operationContext=DELIVERY&dpt=null","session_title__c":"DEVELOPERS’ TALK"},{"name":"SP-023","name__c":"Nikola Živković","image__c":"https://star-conference-dev-ed--c.eu11.content.force.com/sfc/dist/version/download/?oid=00D0Y0000035OaM&ids=0680Y000001lzoT&d=/a/0Y000000CjFM/3GwxTTSxSgE6Z.vdxiHvqxh9IocDVRqRiOnX0ooIJuw&operationContext=DELIVERY&dpt=null","session_title__c":"DEVELOPERS’ TALK"},{"name":"SP-024","name__c":"Mystery Speaker","image__c":"https://star-conference-dev-ed--c.eu11.content.force.com/sfc/dist/version/download/?oid=00D0Y0000035OaM&ids=0680Y000001lzt2&d=/a/0Y000000CjFW/nr.rcnOpo.SuVap9HTU1597gODGFZu2i9olOTkea9Zg&operationContext=DELIVERY&dpt=null","session_title__c":"Mystery Talk"}];
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
                <div className="loader">
                    <Spinner/>
                </div>
            );
        }else{
            return this.props.hide ? null : (
                <Grid>
                {
                    this.state.speakers.map(speaker => {
                        return (
                            <Cell col = {2} >
                                <SpeakerItem name={speaker.name__c} image={speaker.image__c} />
                            </Cell>
                        );
                    })
                }
                </Grid>
            );
        }
    }
  }
  
export default Speakers;
  