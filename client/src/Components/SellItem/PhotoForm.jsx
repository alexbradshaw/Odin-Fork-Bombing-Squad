import React, { useState } from 'react';
import './PhotoForm.css';

const PhotoForm = ({ handle }) => {

    const [inputValue, setInputValue] = useState('');

    const handleButtonClick = () => {
        handle(inputValue);
    }

    return (
        <div className='form'>
            <div className='form-body'>
                <h5>Image URL: </h5>
                <input type='text' id='image_input' onChange={(e) => setInputValue(e.target.value)}></input>
                <button onClick={handleButtonClick}>Save URL</button>
            </div>
        </div>
    );
};

export default PhotoForm;