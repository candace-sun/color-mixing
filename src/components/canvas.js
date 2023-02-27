import React, { useRef, useEffect } from 'react';

export default function Canvas(props) {
    const {state, setState} = props.pState;
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        context.fillStyle = 'rgba(0,0,0,0)';
        context.fillRect(0, 0, context.canvas.width, context.canvas.height);
      }, [])

    function animate() {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        const imgData = context.getImageData(0, 0, canvas.width, canvas.height);
        const data = imgData.data;

        var [r,g,b] = props.rgbToHex();

        for(let i = 0; i < data.length; i += 4) {
            const red = data[i];
            const green = data[i + 1];
            const blue = data[i + 2];
            data[i] = 255;
            data[i+3] = 255;
        }

        context.putImageData(imgData, 0, 0);
    }
    
    return(
        <div className = 'canvas-container'>
            <button className = 'canvas-button' onClick={animate}>Animate</button>
            <canvas className = 'canvas' ref={canvasRef}/>
        </div>
    );
}