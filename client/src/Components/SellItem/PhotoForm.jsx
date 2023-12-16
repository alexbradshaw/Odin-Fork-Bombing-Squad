import './PhotoForm.css';

import { useState } from 'react';

const PhotoForm = ({ set, setter }) => {

    const [inputValue, setInputValue] = useState('');

    const handleButtonClick = (event) => {
        set(inputValue);
        setter(false);
        event.target.reset();
        // handle(clearPhoto);  
        //   Need function that resets the contents of this form 
    }

    return (
        <div className='photoForm'>
            <form onSubmit={handleButtonClick}>
                <div className='form-body'>
                    <h4>Image URL: </h4>
                    <input type='text' id='image_input' onChange={(e) => setInputValue(e.target.value)}></input>
                    <button type='submit'>Save URL</button>
                </div>
            </form>
        </div>
    );
};

export default PhotoForm;