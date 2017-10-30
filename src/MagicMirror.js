import React, { Component } from 'react'
import style, { keyframes }from 'styled-components'
import Creature from './Creature'

const _INTERVAL = 5;
const _SLIDES = 11;

class MagicMirror extends Component {
  render(){
    return (
      <Grid>
        <Creature />
        <Slider>
          <Figure>
            <Slide>
              <Title>
                Tip #1
              </Title>
              <Details>
                <h1>Give up the belief that you have to be perfect.</h1>
              </Details>
            </Slide>
            <Slide>
              <Title>
                Tip #2
              </Title>
              <Details>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed mollis justo. Mauris tempor bibendum orci et rutrum. Nulla facilisi. Suspendisse non vehicula odio. Etiam in dui ornare, ultrices odio non, commodo risus. Suspendisse consectetur felis justo, viverra ornare quam pellentesque ac. Aliquam mollis iaculis justo, non commodo sem placerat quis. Suspendisse a molestie leo. Nullam pretium venenatis purus, eu molestie ligula efficitur vitae. Aenean sollicitudin convallis massa, vel pharetra massa sollicitudin id. Proin luctus libero lobortis dui vestibulum vestibulum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi vel ex in sem consequat placerat id et sapien. Fusce vel viverra diam. Donec efficitur, urna non varius viverra, orci sapien dapibus arcu, at placerat odio orci non odio.
                <br/>
                Aliquam interdum at dolor nec euismod. Duis quis lacus sed eros vestibulum mollis. Vestibulum convallis sagittis lacus, ut suscipit tortor ullamcorper at. Suspendisse convallis dolor vel malesuada sodales. Curabitur a lectus vulputate, imperdiet nisi ac, aliquam augue. Fusce suscipit nisl sed nibh consequat facilisis. Maecenas pretium magna sit amet varius pharetra. Quisque elementum dictum purus. Donec quis enim ac metus tempor consequat vel luctus justo. Vestibulum mollis tortor elit, consequat aliquet risus hendrerit ac. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla vitae mattis tellus, non blandit ligula. Quisque a mauris nisi. Proin tincidunt facilisis odio id ornare. Ut augue est, dapibus non tempor ac, maximus et mauris. Aenean imperdiet quam tellus, in feugiat nibh bibendum sit amet.
              </Details>
            </Slide>
            <Slide>
              <Title>
                Tip #3
              </Title>
              <Details>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed mollis justo. Mauris tempor bibendum orci et rutrum. Nulla facilisi. Suspendisse non vehicula odio. Etiam in dui ornare, ultrices odio non, commodo risus. Suspendisse consectetur felis justo, viverra ornare quam pellentesque ac. Aliquam mollis iaculis justo, non commodo sem placerat quis. Suspendisse a molestie leo. Nullam pretium venenatis purus, eu molestie ligula efficitur vitae. Aenean sollicitudin convallis massa, vel pharetra massa sollicitudin id. Proin luctus libero lobortis dui vestibulum vestibulum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi vel ex in sem consequat placerat id et sapien. Fusce vel viverra diam. Donec efficitur, urna non varius viverra, orci sapien dapibus arcu, at placerat odio orci non odio.
                <br/>
                Aliquam interdum at dolor nec euismod. Duis quis lacus sed eros vestibulum mollis. Vestibulum convallis sagittis lacus, ut suscipit tortor ullamcorper at. Suspendisse convallis dolor vel malesuada sodales. Curabitur a lectus vulputate, imperdiet nisi ac, aliquam augue. Fusce suscipit nisl sed nibh consequat facilisis. Maecenas pretium magna sit amet varius pharetra. Quisque elementum dictum purus. Donec quis enim ac metus tempor consequat vel luctus justo. Vestibulum mollis tortor elit, consequat aliquet risus hendrerit ac. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla vitae mattis tellus, non blandit ligula. Quisque a mauris nisi. Proin tincidunt facilisis odio id ornare. Ut augue est, dapibus non tempor ac, maximus et mauris. Aenean imperdiet quam tellus, in feugiat nibh bibendum sit amet.
              </Details>
            </Slide>
            <Slide>
              <Title>
                Tip #4
              </Title>
              <Details>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed mollis justo. Mauris tempor bibendum orci et rutrum. Nulla facilisi. Suspendisse non vehicula odio. Etiam in dui ornare, ultrices odio non, commodo risus. Suspendisse consectetur felis justo, viverra ornare quam pellentesque ac. Aliquam mollis iaculis justo, non commodo sem placerat quis. Suspendisse a molestie leo. Nullam pretium venenatis purus, eu molestie ligula efficitur vitae. Aenean sollicitudin convallis massa, vel pharetra massa sollicitudin id. Proin luctus libero lobortis dui vestibulum vestibulum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi vel ex in sem consequat placerat id et sapien. Fusce vel viverra diam. Donec efficitur, urna non varius viverra, orci sapien dapibus arcu, at placerat odio orci non odio.
                <br/>
                Aliquam interdum at dolor nec euismod. Duis quis lacus sed eros vestibulum mollis. Vestibulum convallis sagittis lacus, ut suscipit tortor ullamcorper at. Suspendisse convallis dolor vel malesuada sodales. Curabitur a lectus vulputate, imperdiet nisi ac, aliquam augue. Fusce suscipit nisl sed nibh consequat facilisis. Maecenas pretium magna sit amet varius pharetra. Quisque elementum dictum purus. Donec quis enim ac metus tempor consequat vel luctus justo. Vestibulum mollis tortor elit, consequat aliquet risus hendrerit ac. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla vitae mattis tellus, non blandit ligula. Quisque a mauris nisi. Proin tincidunt facilisis odio id ornare. Ut augue est, dapibus non tempor ac, maximus et mauris. Aenean imperdiet quam tellus, in feugiat nibh bibendum sit amet.
              </Details>
            </Slide>
            <Slide>
              <Title>
                Tip #5
              </Title>
              <Details>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed mollis justo. Mauris tempor bibendum orci et rutrum. Nulla facilisi. Suspendisse non vehicula odio. Etiam in dui ornare, ultrices odio non, commodo risus. Suspendisse consectetur felis justo, viverra ornare quam pellentesque ac. Aliquam mollis iaculis justo, non commodo sem placerat quis. Suspendisse a molestie leo. Nullam pretium venenatis purus, eu molestie ligula efficitur vitae. Aenean sollicitudin convallis massa, vel pharetra massa sollicitudin id. Proin luctus libero lobortis dui vestibulum vestibulum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi vel ex in sem consequat placerat id et sapien. Fusce vel viverra diam. Donec efficitur, urna non varius viverra, orci sapien dapibus arcu, at placerat odio orci non odio.
                <br/>
                Aliquam interdum at dolor nec euismod. Duis quis lacus sed eros vestibulum mollis. Vestibulum convallis sagittis lacus, ut suscipit tortor ullamcorper at. Suspendisse convallis dolor vel malesuada sodales. Curabitur a lectus vulputate, imperdiet nisi ac, aliquam augue. Fusce suscipit nisl sed nibh consequat facilisis. Maecenas pretium magna sit amet varius pharetra. Quisque elementum dictum purus. Donec quis enim ac metus tempor consequat vel luctus justo. Vestibulum mollis tortor elit, consequat aliquet risus hendrerit ac. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla vitae mattis tellus, non blandit ligula. Quisque a mauris nisi. Proin tincidunt facilisis odio id ornare. Ut augue est, dapibus non tempor ac, maximus et mauris. Aenean imperdiet quam tellus, in feugiat nibh bibendum sit amet.
              </Details>
            </Slide>
            <Slide>
              <Title>
                Tip #6
              </Title>
              <Details>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed mollis justo. Mauris tempor bibendum orci et rutrum. Nulla facilisi. Suspendisse non vehicula odio. Etiam in dui ornare, ultrices odio non, commodo risus. Suspendisse consectetur felis justo, viverra ornare quam pellentesque ac. Aliquam mollis iaculis justo, non commodo sem placerat quis. Suspendisse a molestie leo. Nullam pretium venenatis purus, eu molestie ligula efficitur vitae. Aenean sollicitudin convallis massa, vel pharetra massa sollicitudin id. Proin luctus libero lobortis dui vestibulum vestibulum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi vel ex in sem consequat placerat id et sapien. Fusce vel viverra diam. Donec efficitur, urna non varius viverra, orci sapien dapibus arcu, at placerat odio orci non odio.
                <br/>
                Aliquam interdum at dolor nec euismod. Duis quis lacus sed eros vestibulum mollis. Vestibulum convallis sagittis lacus, ut suscipit tortor ullamcorper at. Suspendisse convallis dolor vel malesuada sodales. Curabitur a lectus vulputate, imperdiet nisi ac, aliquam augue. Fusce suscipit nisl sed nibh consequat facilisis. Maecenas pretium magna sit amet varius pharetra. Quisque elementum dictum purus. Donec quis enim ac metus tempor consequat vel luctus justo. Vestibulum mollis tortor elit, consequat aliquet risus hendrerit ac. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla vitae mattis tellus, non blandit ligula. Quisque a mauris nisi. Proin tincidunt facilisis odio id ornare. Ut augue est, dapibus non tempor ac, maximus et mauris. Aenean imperdiet quam tellus, in feugiat nibh bibendum sit amet.
              </Details>
            </Slide>
            <Slide>
              <Title>
                Tip #7
              </Title>
              <Details>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed mollis justo. Mauris tempor bibendum orci et rutrum. Nulla facilisi. Suspendisse non vehicula odio. Etiam in dui ornare, ultrices odio non, commodo risus. Suspendisse consectetur felis justo, viverra ornare quam pellentesque ac. Aliquam mollis iaculis justo, non commodo sem placerat quis. Suspendisse a molestie leo. Nullam pretium venenatis purus, eu molestie ligula efficitur vitae. Aenean sollicitudin convallis massa, vel pharetra massa sollicitudin id. Proin luctus libero lobortis dui vestibulum vestibulum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi vel ex in sem consequat placerat id et sapien. Fusce vel viverra diam. Donec efficitur, urna non varius viverra, orci sapien dapibus arcu, at placerat odio orci non odio.
                <br/>
                Aliquam interdum at dolor nec euismod. Duis quis lacus sed eros vestibulum mollis. Vestibulum convallis sagittis lacus, ut suscipit tortor ullamcorper at. Suspendisse convallis dolor vel malesuada sodales. Curabitur a lectus vulputate, imperdiet nisi ac, aliquam augue. Fusce suscipit nisl sed nibh consequat facilisis. Maecenas pretium magna sit amet varius pharetra. Quisque elementum dictum purus. Donec quis enim ac metus tempor consequat vel luctus justo. Vestibulum mollis tortor elit, consequat aliquet risus hendrerit ac. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla vitae mattis tellus, non blandit ligula. Quisque a mauris nisi. Proin tincidunt facilisis odio id ornare. Ut augue est, dapibus non tempor ac, maximus et mauris. Aenean imperdiet quam tellus, in feugiat nibh bibendum sit amet.
              </Details>
            </Slide>
            <Slide>
              <Title>
                Tip #8
              </Title>
              <Details>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed mollis justo. Mauris tempor bibendum orci et rutrum. Nulla facilisi. Suspendisse non vehicula odio. Etiam in dui ornare, ultrices odio non, commodo risus. Suspendisse consectetur felis justo, viverra ornare quam pellentesque ac. Aliquam mollis iaculis justo, non commodo sem placerat quis. Suspendisse a molestie leo. Nullam pretium venenatis purus, eu molestie ligula efficitur vitae. Aenean sollicitudin convallis massa, vel pharetra massa sollicitudin id. Proin luctus libero lobortis dui vestibulum vestibulum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi vel ex in sem consequat placerat id et sapien. Fusce vel viverra diam. Donec efficitur, urna non varius viverra, orci sapien dapibus arcu, at placerat odio orci non odio.
                <br/>
                Aliquam interdum at dolor nec euismod. Duis quis lacus sed eros vestibulum mollis. Vestibulum convallis sagittis lacus, ut suscipit tortor ullamcorper at. Suspendisse convallis dolor vel malesuada sodales. Curabitur a lectus vulputate, imperdiet nisi ac, aliquam augue. Fusce suscipit nisl sed nibh consequat facilisis. Maecenas pretium magna sit amet varius pharetra. Quisque elementum dictum purus. Donec quis enim ac metus tempor consequat vel luctus justo. Vestibulum mollis tortor elit, consequat aliquet risus hendrerit ac. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla vitae mattis tellus, non blandit ligula. Quisque a mauris nisi. Proin tincidunt facilisis odio id ornare. Ut augue est, dapibus non tempor ac, maximus et mauris. Aenean imperdiet quam tellus, in feugiat nibh bibendum sit amet.
              </Details>
            </Slide>
            <Slide>
              <Title>
                Tip #9
              </Title>
              <Details>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed mollis justo. Mauris tempor bibendum orci et rutrum. Nulla facilisi. Suspendisse non vehicula odio. Etiam in dui ornare, ultrices odio non, commodo risus. Suspendisse consectetur felis justo, viverra ornare quam pellentesque ac. Aliquam mollis iaculis justo, non commodo sem placerat quis. Suspendisse a molestie leo. Nullam pretium venenatis purus, eu molestie ligula efficitur vitae. Aenean sollicitudin convallis massa, vel pharetra massa sollicitudin id. Proin luctus libero lobortis dui vestibulum vestibulum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi vel ex in sem consequat placerat id et sapien. Fusce vel viverra diam. Donec efficitur, urna non varius viverra, orci sapien dapibus arcu, at placerat odio orci non odio.
                <br/>
                Aliquam interdum at dolor nec euismod. Duis quis lacus sed eros vestibulum mollis. Vestibulum convallis sagittis lacus, ut suscipit tortor ullamcorper at. Suspendisse convallis dolor vel malesuada sodales. Curabitur a lectus vulputate, imperdiet nisi ac, aliquam augue. Fusce suscipit nisl sed nibh consequat facilisis. Maecenas pretium magna sit amet varius pharetra. Quisque elementum dictum purus. Donec quis enim ac metus tempor consequat vel luctus justo. Vestibulum mollis tortor elit, consequat aliquet risus hendrerit ac. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla vitae mattis tellus, non blandit ligula. Quisque a mauris nisi. Proin tincidunt facilisis odio id ornare. Ut augue est, dapibus non tempor ac, maximus et mauris. Aenean imperdiet quam tellus, in feugiat nibh bibendum sit amet.
              </Details>
            </Slide>
            <Slide>
              <Title>
                Tip #10
              </Title>
              <Details>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed mollis justo. Mauris tempor bibendum orci et rutrum. Nulla facilisi. Suspendisse non vehicula odio. Etiam in dui ornare, ultrices odio non, commodo risus. Suspendisse consectetur felis justo, viverra ornare quam pellentesque ac. Aliquam mollis iaculis justo, non commodo sem placerat quis. Suspendisse a molestie leo. Nullam pretium venenatis purus, eu molestie ligula efficitur vitae. Aenean sollicitudin convallis massa, vel pharetra massa sollicitudin id. Proin luctus libero lobortis dui vestibulum vestibulum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi vel ex in sem consequat placerat id et sapien. Fusce vel viverra diam. Donec efficitur, urna non varius viverra, orci sapien dapibus arcu, at placerat odio orci non odio.
                <br/>
                Aliquam interdum at dolor nec euismod. Duis quis lacus sed eros vestibulum mollis. Vestibulum convallis sagittis lacus, ut suscipit tortor ullamcorper at. Suspendisse convallis dolor vel malesuada sodales. Curabitur a lectus vulputate, imperdiet nisi ac, aliquam augue. Fusce suscipit nisl sed nibh consequat facilisis. Maecenas pretium magna sit amet varius pharetra. Quisque elementum dictum purus. Donec quis enim ac metus tempor consequat vel luctus justo. Vestibulum mollis tortor elit, consequat aliquet risus hendrerit ac. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla vitae mattis tellus, non blandit ligula. Quisque a mauris nisi. Proin tincidunt facilisis odio id ornare. Ut augue est, dapibus non tempor ac, maximus et mauris. Aenean imperdiet quam tellus, in feugiat nibh bibendum sit amet.
              </Details>
            </Slide>
            <Slide>
              <Title>
                Tip #11
              </Title>
              <Details>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed mollis justo. Mauris tempor bibendum orci et rutrum. Nulla facilisi. Suspendisse non vehicula odio. Etiam in dui ornare, ultrices odio non, commodo risus. Suspendisse consectetur felis justo, viverra ornare quam pellentesque ac. Aliquam mollis iaculis justo, non commodo sem placerat quis. Suspendisse a molestie leo. Nullam pretium venenatis purus, eu molestie ligula efficitur vitae. Aenean sollicitudin convallis massa, vel pharetra massa sollicitudin id. Proin luctus libero lobortis dui vestibulum vestibulum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi vel ex in sem consequat placerat id et sapien. Fusce vel viverra diam. Donec efficitur, urna non varius viverra, orci sapien dapibus arcu, at placerat odio orci non odio.
                <br/>
                Aliquam interdum at dolor nec euismod. Duis quis lacus sed eros vestibulum mollis. Vestibulum convallis sagittis lacus, ut suscipit tortor ullamcorper at. Suspendisse convallis dolor vel malesuada sodales. Curabitur a lectus vulputate, imperdiet nisi ac, aliquam augue. Fusce suscipit nisl sed nibh consequat facilisis. Maecenas pretium magna sit amet varius pharetra. Quisque elementum dictum purus. Donec quis enim ac metus tempor consequat vel luctus justo. Vestibulum mollis tortor elit, consequat aliquet risus hendrerit ac. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla vitae mattis tellus, non blandit ligula. Quisque a mauris nisi. Proin tincidunt facilisis odio id ornare. Ut augue est, dapibus non tempor ac, maximus et mauris. Aenean imperdiet quam tellus, in feugiat nibh bibendum sit amet.
              </Details>
            </Slide>
          </Figure>
        </Slider>
      </Grid>
    )
  }
}

const slide = keyframes`
  0% { left: 0%; }
  8% { left: 0%; }

  9% { left: -100%; }
  17% { left: -100%; }

  18% { left: -200%; }
  26% { left: -200%; }

  27% { left: -300%; }
  35% { left: -300%; }

  36% { left: -400%; }
  44% { left: -400%; }

  45% { left: -500%; }
  53% { left: -500%; }

  54% { left: -600%; }
  62% { left: -600%; }

  63% { left: -700%; }
  71% { left: -700%; }

  72% { left: -800%; }
  80% { left: -800%; }

  81% { left: -900%; }
  89% { left: -900%; }

  90% { left: -1000%; }
  98% { left: -1000%; }

  100% { left: 0%; }
`;

const Grid = style.div`
  position: absolute;
  top: 0; right: 0; bottom: 0; left: 0;
  padding: 3em;
  background: black;
  color: white;

  display: grid;
  grid-template-rows: auto 5fr;

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
`

export default MagicMirror;