import React, { Component } from 'react'
import style, { keyframes } from 'styled-components'

class Creature extends Component {
  render(){
    return (
      <Smiley>
        <Eyes>
          <Eye />
          <Eye />
        </Eyes>
        <Mouth />
      </Smiley>
    )
  }
}

const Lean = keyframes`
  0%, 100% { transform: rotate3d(0,0,1,-5deg); }
  50% { transform: rotate3d(0,0,1,5deg); }
`

const Smiley = style.div`
  position: fixed;
  top: 2em;
  left: 2em;

  width: 10em;
  height: 10em;

  border-radius: 50%;

  background: #f9b522;

  animation: ${Lean} 3s ease-in-out infinite;

  z-index: 10000;
`

const Eyes = style.div`
	position: absolute;
	top: 22%;
	width: 100%;
  height: 14%;
`

const Eye = style.div`
  animation: blink 5s linear infinite;
  position: absolute;
  height: 100%;
  width: 14%;
  background: #d08215;
  border-radius: 50%;

    &:before, &:after {
      background-color: #fff;
      border-radius: 50%;
      content: '';
      position: absolute;
    }
    
    &:before {
      height: 33%;
      top: 20%;
      right: 20%;
      width: 33%;
    }

    &:after {
      height: 15%;
      top: 50%;
      right: 15%;
      width: 15%;
    }
    
    &:nth-child(1) {
      left: 25%;
    }

    &:nth-child(2) {
      right: 25%;
    }
`

const Mouth = style.div`
  position: absolute;
  background: #d08215;
  top: 55%;
  left: 22%;
  right: 22%;
  bottom: 15%;
  border-radius: 0 0 200px 200px;
  transform-origin: center top;
  overflow: hidden;
`

export default Creature