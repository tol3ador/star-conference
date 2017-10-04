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
            let data = [{"name":"SP-013","name__c":"Ivana Tešanović","image__c":null},{"name":"SP-014","name__c":"Milan Kosanović","image__c":null},{"name":"SP-015","name__c":"Milan Kosanović","image__c":null},{"name":"SP-016","name__c":"Miroljub Enjaković","image__c":null},{"name":"SP-017","name__c":"Miloš Davidović","image__c":null},{"name":"SP-018","name__c":"Nenad Maljugić","image__c":null},{"name":"SP-012","name__c":"Dejan Ostojić","image__c":null},{"name":"SP-019","name__c":"Ognjen Stanić","image__c":null}];
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
                    .map((speaker, i) => {
                        return <SpeakerItem name={speaker.name__c} 
                                            image="https://www.vegaitsourcing.rs/media/1899/nenad-percic_website.jpg" />
                    })
                }
                </List>
            );
        }
    }
  }
  
export default Speakers;
  