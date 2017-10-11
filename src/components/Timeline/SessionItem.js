import React, { Component } from 'react';
import { ListItem, ListItemContent, ListItemAction, Icon, Badge } from 'react-mdl';

const postStars = function(value, name){
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
            <ListItem twoLine className={`session-item-type`}>
                <ListItemContent avatar="stars">
                    {this.props.title}
                    <span className="mdl-list__item-sub-title">{this.props.time}{this.props.speaker !== null ? ` | ${this.props.speaker}` : ``}</span>
                </ListItemContent>
                <ListItemAction>
                    {
                        this.props.type === "Break" ? 
                        (
                        <h4 className="margin-right-24 blue">
                            {this.props.duration}
                        </h4> 
                        ):(
                            this.props.type === "Party" ?
                            (
                                <Badge text={this.state.stars} >
                                    <Icon name={this.state.rated ? "favorite" : "favorite_border"} onClick={() => {
                                        if(this.state.rated)
                                            return;
                                        this.setState({
                                            rated: true,
                                            stars: this.state.stars+1
                                            });
                                        postStars(this.props.id, this.props.name);
                                    }} className={this.state.rated ? "orange" : "link blue"}/>
                                </Badge>
                            ) : (
                                <Icon name={this.state.rated ? "favorite" : "favorite_border"} onClick={() => {
                                    if(this.state.rated)
                                        return;
                                    this.setState({
                                        rated: true,
                                        stars: this.state.stars+1
                                        });
                                    postStars(this.props.id, this.props.name);
                                }} className={this.state.rated ? "margin-right-24 orange" : "margin-right-24 blue link"}/>
                            ) 
                        )
                    }
                </ListItemAction>
            </ListItem>
        );
      }
}

export default SessionItem;