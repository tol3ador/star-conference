import React, { Component } from 'react'
import style, { keyframes }from 'styled-components'
import Creature from './Creature'

const _INTERVAL = 15;
const _SLIDES = 11;

const tips = require('./resources/static_tips.json')
const logo = require('./resources/logo.png')
const image1 = require('./resources/img/1.jpg')

class MagicMirror extends Component {
    render(){
    return (
      <Container>
        <Logo src={logo}/>
        <Creature />
        <Slider>
          <Figure>
            {
                tips.map(tip => {
                    return (
                        <Slide>
                            <Title>
                                {tip.title}
                            </Title>
                            <Details>
                                <h1>{tip.header}</h1>
                                <div>
                                {
                                    tip.items.map(item => {
                                        return <p>{item}</p>
                                    })
                                }
                                </div>
                                <div>
                                    <Image src={image1} alt={tip.title}/>
                                </div>
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
`;

const Logo = style.img`
  position: fixed;
  top: 3em;
  right: 3em;
  width: 12em;
`

const Container = style.div`
  position: absolute;
  top: 0; right: 0; bottom: 0; left: 0;
  padding: 3em 7em;
  background: black;
  color: white;

  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: default;
`

const Slider = style.div`
  padding: 0;
  margin: 0;

  overflow: hidden;
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

const Title = style.h1`
  font-family: 'Indie Flower', cursive;
  font-size: 7em;
`

const Details = style.div`
  padding-top: 3em;

  > h1 {
    font-family: 'Indie Flower', cursive;
    font-size: 5em
  }

   p {
    font-family: 'Raleway', sans-serif;
    font-size: 36px;
    line-height: 50px;
    margin-bottom: 20px;
    display: block;

  }
`
const Image = style.img`
    width: 100%;
`;

export default MagicMirror;