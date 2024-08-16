
import { useState } from "react";

let Product = () => {
    let [msg, setMsg] = useState("Hello");
    let [bgColour, setBgColour] = useState('red');
  

    let updateHandler = (value) => {
        setMsg(value);
        setBgColour(`rgb(${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)})`);
        
    };

    // Inline style for background color
    const divStyle = {
        backgroundColor: bgColour,
        padding: '20px',
        borderRadius: '5px',
        textAlign: 'center'
    };

    return (
        <div style={divStyle}>
            <h1>This is a Product component</h1>
            <h2>Value: {msg}</h2>
            <h3>{bgColour}</h3>
            <button onClick={() => updateHandler("Good morning")}>GM</button>
            <button onClick={() => updateHandler("Good night")}>GN</button>
            <button onClick={() => updateHandler("Good afternoon")}>GA</button>
            <button onClick={() => updateHandler("Good evening")}>GE</button>
        </div>
    );
};

export default Product;
