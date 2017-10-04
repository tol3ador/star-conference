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
    let ratings = localStorage.getItem('ratings')||"";
    localStorage.setItem('ratings', ratings+"|"+name);
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
            <ListItem twoLine>
                <ListItemContent avatar="stars" subtitle={this.props.time} >
                    {this.props.title}
                </ListItemContent>
                <ListItemAction>
                    <Badge text={this.state.stars}>
                        <Icon name={this.state.rated ? "star" : "star_border"} onClick={() => {
                            if(this.state.rated)
                                return;
                            this.setState({
                                rated: true,
                                stars: this.state.stars+1
                                });
                            pushStars(this.props.id, this.props.name);
                        }}/>
                    </Badge> 
                </ListItemAction>
            </ListItem>
        );
      }
}

export default SessionItem;