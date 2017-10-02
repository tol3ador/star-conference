import React, { Component } from 'react';
import logo from './logo.svg';
import style from 'styled-components';
import Speakers from './Speakers.js';
import { Tabs, Tab } from 'react-mdl';

const Content = style.div`
`;
const Header = style.div`
  text-align: center;
  background-color: #31566D;
  height: 130px;
  padding: 20px;
  color: white;  
`;
const Logo = style.img`
  height: 90px;
`;
const Title = style.h1`
  font-size: 1.5em;
  text-transform: uppercase;
  margin-bottom: 0px;
  margin-top: 0px;
`;
const Subtitle = style.div`
  font-size: 0.35em;
  letter-spacing: 2px;
  text-transform: uppercase;
`;

class App extends Component {

  constructor(props){
    super(props);
    this.state = {activeTab: 0};
  }

  render() {
    return (
      <div>
        <Header>
          <Logo src={logo} alt="logo"/>
          <Title>Star</Title>
          <Subtitle>Conference</Subtitle>
        </Header>
        <Content>
          <Tabs activeTab={this.state.activeTab} onChange={(tabId)=> this.setState({activeTab: tabId})} ripple>
            <Tab>Speakers</Tab>
            <Tab>Sessions</Tab>
          </Tabs>
         <Speakers hide={activeTab != 0}/>
         <Sessions hide={activeTab != 1}/>
        </Content>
      </div>
    );
  }
}

export default App;
