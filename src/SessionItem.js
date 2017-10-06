import React, { Component } from 'react';
import { ListItem, ListItemContent, ListItemAction, Icon, Badge } from 'react-mdl';

const pushStars = function(value, name){
    fetch('/rate', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: value,
        })
      })
    let items = localStorage.getItem('ratings')||"";
    localStorage.setItem('ratings', items+name);
}

class SessionItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            rated: false,
            stars: 0
        }
    }

    componentDidMount(){
        this.setState({
           rated: (localStorage.getItem('ratings')||"").indexOf(this.props.name) !== -1, 
           stars: this.props.stars
        })
    }

    render() {

        return (        
            <ListItem twoLine style={{backgroundColor: this.props.type === "Break" ? '' : this.props.type === "Party" ? '#F15A2B' : '#407492'}}>
                <ListItemContent avatar="stars" subtitle={this.props.time} >
                    {this.props.title}
                </ListItemContent>
                <ListItemAction>
                    {
                        this.props.type === "Break" ? <h4 style={{marginRight: '24px'}}>{this.props.duration}</h4> :
                        <Badge text={this.state.stars}>
                                <Icon name={this.state.rated ? "favorite" : "favorite_border"} onClick={() => {
                                    if(this.state.rated)
                                        return;
                                    this.setState({
                                        rated: true,
                                        stars: this.state.stars+1
                                        });
                                    pushStars(this.props.id, this.props.name);
                                }}/>
                        </Badge> 
                    }
                </ListItemAction>
            </ListItem>
        );
      }
}

export default SessionItem;