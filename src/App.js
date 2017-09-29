import React, { Component } from 'react';
import logo from './logo.svg';
import style from 'styled-components';
import Speakers from './Speakers.js';

const Container = style.div`
  text-align: center;
`;
const Header = style.div`
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
  font-size: 0.3em;
  letter-spacing: 2px;
  text-transform: uppercase;
`;

class App extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Logo src={logo} alt="logo"/>
          <Title>Star</Title>
          <Subtitle>Conference</Subtitle>
        </Header>
        <Speakers/>
      </Container>
    );
  }
}

export default App;
