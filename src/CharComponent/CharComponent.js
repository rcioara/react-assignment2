import React from 'react';
import './CharComponent.css';

const CharComponent = (props) => {
    return (
        <div className="CharComponent" onClick={props.clickDeleteChar}>{props.letter}</div>
    );
}

export default CharComponent;