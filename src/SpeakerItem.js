import React, { Component } from 'react';
import { Card, CardTitle, CardActions, Icon } from 'react-mdl';
import style from 'styled-components';

const One = style.div`
    width: 256px;
    height: 256px;
    background: url('https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAArbAAAAJGRlMmZjYmViLWUyNDItNDUxZC1hZGJmLTgyOGVjZTFmZjQzNA.jpg') center / cover;
`;

const Two = style.div`
    height: 52px;
    padding: 16px;
    background: rgba(0, 0, 0, 0.2);
`;
const Three = style.div`
    color: #fff;
    font-size: 14px;
    font-weight: 500;
`;

class SpeakerItem extends Component {
    render() {
        return (        
            <One className="demo-card-image mdl-card mdl-shadow--2dp">
                <div className="mdl-card__title mdl-card--expand"></div>
                <Three className="mdl-card__actions">
                    <Two className="demo-card-image__filename">Image.jpg</Two>
                </Three>
            </One>
        );
      }
}

export default SpeakerItem;