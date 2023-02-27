import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

export default function Color(props) {
    const [color, setColor] = useState(props.color);

    function updateColor(event) {
        setColor(event.target.value);
    }
    
    return(
        <div className = {`color-container-${props.number}`}>
        <Helmet>
            <style>{'.color-container-' + props.number + ' { background-color: ' + color + '; }'}</style>
        </Helmet>
         <input type="color" className="color-input" onChange={function(event){ updateColor(event); 
            props.addNewColor(event.target.value, props.number)}}/>
        </div>
    );
}
