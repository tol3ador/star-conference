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
            this.setState({
                speakers: require('./../../resources/static_speakers.json'),
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
                                <SpeakerItem name={speaker.name__c} image={speaker.image__c} speakerId={speaker.sfid} />
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
  