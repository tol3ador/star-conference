import React, { Component } from 'react'
import style, { keyframes }from 'styled-components'

const _INTERVAL = 3;
const _SLIDES = 11;

const _KEY_DOWN = 40
const _KEY_UP = 38

const tips = require('./resources/static_tips.json')
const logo = require('./resources/logo.png')

class MagicMirror extends Component {
  constructor(props){
    super(props)

    this.state = {
      active: 0,
    }
    this.tick = this.tick.bind(this)
    this.changeSlide = this.changeSlide.bind(this)

    this.tick();
  }

  changeSlide(event) {
    alert(event.key)
    if(event.key === `${_KEY_DOWN}`){
      this.setState({
        active: (this.state.active-1)%11
      })
      clearTimeout(this.timeout)
      this.tick();
    }
    if(event.key === `${_KEY_UP}`){
      this.setState({
        active: (this.state.active+1)%11
      })
      clearTimeout(this.timeout)
      this.tick();
    }
  }

  tick(){
    this.setState({
        active: (this.state.active+1)%_SLIDES,
    })
    this.timeout = setTimeout(this.tick, _INTERVAL*1000)
  }

  render(){
    return (
      <Container onKeyDown={this.changeSlide}>
        <Sidenav active={this.state.active}>
        <ul>
          {
            tips.map(tip => {
              return (
                <li id={tip.id}>
                  <a>{tip.header}</a>
                </li>
              )
            })
          }
          </ul>
        </Sidenav>
        <LogoContainer>
          <Logo src={logo}/>
        </LogoContainer>
        <Slider>
          <Figure active={this.state.active}>
            {
              tips.map(tip => {
                return (
                  <Slide>
                    <Details>
                        <h1>{tip.header}</h1>
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

const Sidenav = style.nav`
position: fixed;
background: papayawhip;
background-color: black;
top: 0; left: 0; bottom: 0;
width: 250px;
box-sizing: border-box;
padding: 30px;
display: flex;
align-items: center;
ul {
  list-style: none;
  padding-left: 0;
  li:nth-child(${props => props.active ? props.active+1 : 1}) a {
    color: #fff;
  }
}
a {
  font-family: 'Indie Flower', cursive;
  text-decoration: none;
  font-size: 19px;
  line-height: 21px;
 color: #ffa200;
 color: #fff832;
  display: block;
  margin: 20px 0;
}

@media only screen and (max-width: 991px) {
  display: none;
}

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
min-height: calc(100% - 180px);
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
line-height: 44px;
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

const Container = style.div`
position: absolute;
top: 0; right: 0; bottom: 0; left: 180px;
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
left: 0;
}
`

const Slider = style.div`
padding: 0;
margin: 0;
overflow: hidden;
background: black;
height: 100%;
`
const Figure = style.div`
position: relative;
width: ${_SLIDES*100}%;
margin: 0;
left: 0;
height: 100%;
left: ${props => props.active ? -100*props.active : 0}%;
transition: all 0.5s ease-in-out;
`

const Slide = style.div`
height 100%;
box-sizing: border-box;
width: ${100.0/_SLIDES}%;
float: left;
text-align: center;
`


const Details = style.div`
padding-top: 40px;
height calc(100% - 40px);
h1 {
font-family: 'Indie Flower', cursive;
font-size: 5em;
margin: 25px auto;
margin-right: 200px;
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