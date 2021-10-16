import React from 'react';

const Band = props => (

    <div>
        <li>{props.band.name}</li>
        <button onClick={() => props.deleteBand(props.band.id)}>Delete</button>
    </div>
    
)

export default Band;
