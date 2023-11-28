import React, { useState, useEffect } from 'react';
const PhotoList = ({ itemArray }) => {
    return (
        <div>
             <div>
                <img src={itemArray.image}></img>
            </div>
            <h6>{itemArray.name}</h6>
        </div>
    );
}

export default PhotoList;