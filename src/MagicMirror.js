import React, { Component } from 'react'
import style, { keyframes }from 'styled-components'

const _INTERVAL = 7;
const _SLIDES = 11;

const tips = require('./resources/static_tips.json')
const logo = require('./resources/logo.png')

class MagicMirror extends Component {
    render(){
    return (
      <Container>
        <LogoContainer>
          <Logo src={logo}/>
        </LogoContainer>
        <Slider>
          <Figure>
            {
                tips.map(tip => {
                    return (
                        <Slide>
                            <Details>
                              <Content>
                                <h1>{tip.header}</h1>
                              </Content>
                              <Content>
                                <Text>
                                {
                                    tip.items.map(item => {
                                        return <p>{item}</p>
                                    })
                                }
                                </Text>
                                <ImageContainer>
                                    <img src={require(`./resources/img/${tip.id}.jpg`)} alt={tip.title}/>
                                </ImageContainer>
                              </Content>
                            </Details>
                        </Slide>
                    )
                })
            }
          </Figure>
        </Slider>
      </Container>
    )
  }
}
const Sidenav = style.div`
  position: fixed;
  background: papayawhip;
  color: black;
  top: 0; left: 0; bottom: 0;
  width: 250px;
  box-sizing: border-box;
  padding: 30px;
`

const LogoContainer = style.div `
  width: 170px;
  position: fixed;
  right: 5px;
  top: 20px;
  z-index: 2;
  background-color: #000;
  @media only screen and (max-width: 991px) {
    width: 80px;
    top: 15px;
  }
`
const Logo = style.img`
  width: 100%;
` 
const Content = style.div `
  display: flex;
  align-items: center;
  flex-wrap : wrap;
  min-height: 100%;
	max-width: 1400px;
	margin: 0 auto;
  * {
    box-sizing: border-box;
  }
`
const Text = style.div `
  width: 50%;
  padding: 20px;
  p {
    font-family: 'Raleway', sans-serif;
    font-size: 36px;
    line-height: 38px;
    margin-bottom: 20px;
    display: block;
    text-align: left;
  }
  @media only screen and (max-width: 991px) {
    width: 100%;
    p {
      font-size: 18px;
      line-height: 28px;
      text-align: center;
    }
  }
`
const slide = keyframes`
  0%, 8%, 100% { left: 0%; opacity: 1; }
  9%, 17% { left: -100%; opacity: 1; }
  18%, 26% { left: -200%; opacity: 1; }
  27%, 35% { left: -300%; opacity: 1; }
  36%, 44% { left: -400%; opacity: 1; }
  45%, 53% { left: -500%; opacity: 1; }
  54%, 62% { left: -600%; opacity: 1; }
  63%, 71% { left: -700%; opacity: 1; }
  72%, 80% { left: -800%; opacity: 1; }
  81%, 89% { left: -900%; opacity: 1; }
  90%, 98% { left: -1000%; opacity: 1; }
  8.3%, 8.8%, 17.3%, 17.8%, 26.3%, 26.8%, 35.3%, 35.8%, 44.3%, 44.8%, 53.3%, 53.8%, 62.3%, 62.8%, 71.3%, 71.8%, 80.3%, 80.8%, 89.3%, 89.8%, 98.6%, 99.99% { opacity: 0; }
`
const Container = style.div`
  position: absolute;
  top: 0; right: 0; bottom: 0; left: 0;
  background: black;
  color: white;
  min-height: 100%;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: default;
  @media only screen and (max-width: 991px) {
    //padding 20px;
  }
`
const Slider = style.div`
  padding: 0;
  margin: 0;
  //margin-left: 250px; //Enabled if sidenav is rendered
  overflow: hidden;
  background: black;
`
const Figure = style.div`
  position: relative;
  width: ${_SLIDES*100}%;
  margin: 0;
  left: 0;
  animation: ${slide} ${_INTERVAL*_SLIDES}s infinite;
`
const Slide = style.div`
  box-sizing: border-box;
  width: ${100.0/_SLIDES}%;
  float: left;
  text-align: center;
`
const Details = style.div`
  padding-top: 40px;
   h1 {
    font-family: 'Indie Flower', cursive;
    font-size: 5em;
    margin: 25px auto;
    display: block;
    color: #fff832;
  }
  @media only screen and (max-width: 991px) {
    h1 {
    font-size: 36px;
    line-height: 42px;
    margin: 60px auto 0;
    }
  }
`
const ImageContainer = style.div`
  width: 50%;
  img {
  width: 100%;
  }
  @media only screen and (max-width: 991px) {
    width: 100%;
  }
`
export default MagicMirror;