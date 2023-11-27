import './SellItem.css'
import React, { useState } from 'react';
import PhotoForm from '../../Components/SellItem/PhotoForm.jsx';
import '../../utils/API.js';
import { createNewItem } from '../../utils/API.js';


const SellItem = () => {
    // State for handling user input
    const [name, setName] = useState('');
    // const [showForm, setShowForm] = useState(false);
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [pricing, setPricing] = useState(0.00);
    const [address, setAddress] = useState('');
    const [quantity, setQuantity] = useState(0);
    const [imageURL, setImageURL] = useState('');

    const submitForm = (event) => {

      event.preventDefault();
      
      createNewItem(
        name, description, category, pricing, address, quantity, imageURL
      );
      // From the parent class of App we are passing the handler thorugh props to add a new user to a list of users
  
      setName("");
      setDescription("");
      setCategory("");
      setPricing(0.00);
      setAddress("");
      setQuantity(0);
      setImageURL("");
      // var form = document.getElementsByClassName("form");
      event.target.reset()
      // event.target allows us to isolate the element of the page that is calling this handler that we are in which
      // is the form
    }
    //h
  
    // const submitLogin = (e) => {
    //   e.preventDefault(); // prevents page from refreshing
    //   login({ userOrEmail, password });
    // };

  //This method needs to return a landing object that can be posted in the database.
  //Once I have created a new landing object I need to see if I need to call either createNewItem or UpdateItem 
  //so the database changes accordingly with the new Item
    return (
      <div id='sell_item_page'> 
        <div className='header'>
            <h2>Sell Item</h2>
        </div>  

          <div id='photo_box'>
                <div id='grid_item_1'>
                    <div className='photo_title' id='title_1'>
                        <h3>Photo</h3>
                    </div>
                    <div className='photo'>

                        <img src={imageURL}></img>
                            
                            {/* add onSubmit property to call uploadImage method*/}
                            {/* <UploadPhoto img = {imageUrl}/> */}
                    </div>
                    <button className='uploadButton'>Upload Image</button>
                </div>
          </div>

          <div className='product_box'>
            <PhotoForm handle = {setImageURL} />
          </div>

          <div className='product_box'>
            <div id='product_grid'>
                {/* <div className='' */}
                <div className='product_text'>
                    <h6>Name:</h6>
                    <input type='text' onChange={(e) => setName(e.target.value)}></input>
                    {/* Every time the text field for Title changes then so does the state value*/}
                </div>
                <div className='product_text'>
                    <h6>Description:</h6>
                    <input type='text' onChange={(e) => setDescription(e.target.value)}></input>
                </div>
                <div className='product_text'>
                    <h6>Category:</h6>
                    <input type='text' onChange={(e) => setCategory(e.target.value)}></input>
                </div>
                <div className='product_text'>
                    <h6>Pricing: </h6>
                    <input type='text' onChange={(e) => setPricing(e.target.value)}></input>
                </div>
                <div className='product_text'>
                    <h6>Address: </h6>
                    <input type='text' onChange={(e) => setAddress(e.target.value)}></input>
                </div>
                <div className='product_text'>
                    <h6>Quantity: </h6>
                    <input type='text' onChange={(e) => setQuantity(e.target.value)}></input>
                </div>
            </div>
          </div>
          <div id='buttons'>
            <div id='button_grid'>
                <button className='bottom_btn'>Save</button>
                <button className='bottom_btn' onSubmit={submitForm}>List</button>
                {/* When we click the list button then a landing item object should be created */}
            </div>
          </div>

      </div>
    );
  };
  
  export default SellItem;