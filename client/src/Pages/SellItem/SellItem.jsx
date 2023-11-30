import './SellItem.css'
import React, { useState, useEffect } from 'react';
import PhotoForm from '../../Components/SellItem/PhotoForm.jsx';
import '../../utils/API.js';
import { createNewItem } from '../../utils/API.js';


const SellItem = () => {
    // State for handling user input
    const [name, setName] = useState('');
    const [showForm, setShowForm] = useState(false);
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [pricing, setPricing] = useState(0.00);
    const [address, setAddress] = useState('');
    const [quantity, setQuantity] = useState(0);
    const [image, setImage] = useState('');
    const [items, setItemsArray] = useState([]);
    // const [errorShow, setErrorShow] = useState(true);

    const createItem = async (formData) => {
        try {
            const items = await createNewItem(formData);
            console.log("formData", formData);        
            console.log(items);
        } catch (e) {
            console.error(e);
        }
    };

    // const errorURL = () => {
    //   setErrorShow(false);
    // }

    const ShowForm = () => {
      setShowForm(true);
    }

    const submitForm = (event) => {

      event.preventDefault();

      console.log(name);
      console.log(description);
      console.log(image);
      // console.log(response.body);

      createItem(
         {
         name, description, category, pricing, address, quantity, image
         }
      );
      // From the parent class of App we are passing the handler thorugh props to add a new user to a list of users
  
      setName("");
      setDescription("");
      setCategory("");
      setPricing(0.00);
      setAddress("");
      setQuantity(0);
      setImage("");

      // clearForm()
      event.target.reset()
      // event.target allows us to isolate the element of the page that is calling this handler that we are in which
      // is the form
    }  

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

                        <img src={image}></img>

                        {/* {errorShow && (
                          <div>
                            <h5>Enter a Valid Image URL</h5>
                          </div>
                        )} */}
                   </div>
                    <button className='uploadButton' onClick={ShowForm}>Upload Image</button>
                </div>
          </div>

          {showForm && (
            <div className='product_box'>
              <PhotoForm set={setImage} setter = {setShowForm} />
            </div>
          )}
          {/* Need to understand this and why it allows for the form not to appear if the upload button is not clicked */}
          {/* So it's a boolean statement so the stuff in the "{}" will only appear if whatever in it is true. So if showForm is
          false then it won't show */}

      <form onSubmit={submitForm}>
          <div className='product_box'>
            <div id='product_grid'>
                {/* <div className='' */}
                <div className='product_text'>
                    <h5 id='input_text'>Name:</h5>
                    <input type='text' onChange={(e) => setName(e.target.value)}></input>
                    {/* Every time the text field for Title changes then so does the state value*/}
                </div>
                <div className='product_text'>
                    <h5 id='input_text'>Description:</h5>
                    <input type='text' onChange={(e) => setDescription(e.target.value)}></input>
                </div>
                <div className='product_text'>
                    <h5 id='input_text'>Category:</h5>
                    <input type='text' onChange={(e) => setCategory(e.target.value)}></input>
                </div>
                <div className='product_text'>
                    <h5 id='input_text'>Pricing: </h5>
                    <input type='text' onChange={(e) => setPricing(e.target.value)}></input>
                </div>
                <div className='product_text'>
                    <h5 id='input_text'>Address: </h5>
                    <input type='text' onChange={(e) => setAddress(e.target.value)}></input>
                </div>
                <div className='product_text'>
                    <h5 id='input_text'>Quantity: </h5>
                    <input type='text' onChange={(e) => setQuantity(e.target.value)}></input>
                </div>
            </div>
          </div>
          <div id='buttons'>
                <button className='bottom_btn' type='submit'>List</button>
                {/* When we click the list button then a landing item object should be created */}
          </div>
        </form>
      </div>
    );
  };
  
  export default SellItem;