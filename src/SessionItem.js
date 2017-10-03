import React, { Component } from 'react';
import { ListItem, ListItemContent, ListItemAction, Icon, Badge } from 'react-mdl';

const pushStars = function(id){
    fetch('/rate', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: id,
        })
      })
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
                <ListItemContent avatar="stars" subheader={this.props.time} >
                    {this.props.session}
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
                            pushStars(this.props.name);
                        }}/>
                    </Badge> 
                </ListItemAction>
            </ListItem>
        );
      }
}

export default SessionItem;