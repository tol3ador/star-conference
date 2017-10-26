import React, { Component } from 'react';
import logo from './resources/logo.png';
import Speakers from './components/Speakers/Speakers.js';
import Timeline from './components/Timeline/Timeline.js';
import FeedbackDialog from './components/FeedbackDialog.js';
import { Tabs, Tab } from 'react-mdl';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      activeTab: 0,
      openDialog: false,
    };

    this.handleOpenDialog = this.handleOpenDialog.bind(this);
    this.handleCloseDialog = this.handleCloseDialog.bind(this);
  }

  handleOpenDialog(data) {
    this.dialogTitle = data.Title;
    this.speakerId = data.Id;
      this.setState({
          openDialog: true,
      });
  }

  handleCloseDialog() {
    this.dialogData = null;
    this.speakerId = null;
      this.setState({
          openDialog: false,
      });
  }
  

  render() {
    return (
      <div className="scroll">
        <FeedbackDialog show={this.state.openDialog} close={this.handleCloseDialog} submit={this.handleCloseDialog} title={this.dialogTitle} submitId={this.speakerId} />
        <div className="header">
          <img src={logo} alt="logo" className="logo"/>
        </div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId)=> this.setState({activeTab: tabId})} ripple>
            <Tab>Star Track</Tab>
            <Tab>Predavači</Tab>
          </Tabs>
        <div className="content">
          <Timeline hide={this.state.activeTab !== 0} />
          <Speakers hide={this.state.activeTab !== 1} openDialog={this.handleOpenDialog} />
        </div>
      </div>
    );
  }
}

export default App;
