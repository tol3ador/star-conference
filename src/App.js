import React, { Component } from 'react';
import logo from './resources/logo.svg';
import Speakers from './components/Speakers/Speakers.js';
import Timeline from './components/Timeline/Timeline.js';
import { Tabs, Tab } from 'react-mdl';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {activeTab: 0};
  }

  render() {
    return (
      <div>
        <div className="header">
          <img src={logo} alt="logo" className="logo"/>
          <h1 className="title">Star</h1>
          <p className="subtitle">Conference</p>
        </div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId)=> this.setState({activeTab: tabId})} ripple>
            <Tab>Star Track</Tab>
            <Tab>Predavači</Tab>
          </Tabs>
        <div className="content">
          <Timeline hide={this.state.activeTab !== 0} />
          <Speakers hide={this.state.activeTab !== 1} />
        </div>
      </div>
    );
  }
}

export default App;
