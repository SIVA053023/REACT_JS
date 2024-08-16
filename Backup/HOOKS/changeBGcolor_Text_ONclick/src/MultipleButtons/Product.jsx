import { useState } from "react";
import Afternoon from './images/Afternoon.jpeg';
import Morning from './images/morning.jpg';
import Evening from './images/Evening.jpg';
import Night from './images/night.jpeg';

let Product = () => {
    let [msg, setMsg] = useState("Hello");
    let [bgImage, setBgImage] = useState(''); // State for background image

    let updateHandler = (value, imgSrc) => {
        setMsg(value);
        setBgImage(`url(${imgSrc})`); // Set the background image
    };

    // Inline style for background image
    const divStyle = {
        backgroundImage: bgImage,
        backgroundSize: 'cover', // Cover the entire div
        backgroundPosition: 'center', // Center the image
        padding: '20px',
        borderRadius: '5px',
        textAlign: 'center',
        height: '400px', // Adjust as needed
        color: '#fff' // Text color to be visible against the background
    };

    return (
        <div style={divStyle}>
            <h1>This is a Product component</h1>
            <h2>Value: {msg}</h2>
            <button onClick={() => updateHandler("Good morning", Morning)}>GM</button>
            <button onClick={() => updateHandler("Good afternoon", Afternoon)}>GA</button>
            <button onClick={() => updateHandler("Good evening", Evening)}>GE</button>
            <button onClick={() => updateHandler("Good night", Night)}>GN</button>
        </div>
    );
};

export default Product;
