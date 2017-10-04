import React, { Component } from 'react';
import { ListItem, ListItemContent, ListItemAction, Icon, Badge } from 'react-mdl';

const pushStars = function(value){
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

    localStorage.setItem(value, true);
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
           rated: this.props.rated, 
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
                            pushStars(this.props.id);
                        }}/>
                    </Badge> 
                </ListItemAction>
            </ListItem>
        );
      }
}

export default SessionItem;