import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function Board(props) {
    return(
        <div className = 'board-container'>
            <Helmet>
                <style>{'.board-container { background-color: ' + props.hex + '; }'}</style>
            </Helmet>
        </div>
    );
}