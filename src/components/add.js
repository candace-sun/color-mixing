import React from 'react';

export default function Add(props) {
    const {state, setState} = props.pState;

    return(
        <div className = 'add-container'>
            <button className = 'add-button' onClick={() => {
                const colors = state.colors.slice();
                colors.push("#000000");
                setState({hex: state.hex, colors: colors, count: 
                    [...state.count, state.count.length]}); }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" viewBox="0 0 16 16">
                        <path d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
                    </svg>
            </button>
        </div>
    );
}