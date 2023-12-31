import './SellItem.css'

import { useState } from 'react';

import PhotoForm from '../../Components/SellItem/PhotoForm.jsx';

import { createNewItem } from '../../utils/API.js';

const SellItem = () => {
    // State for handling user input
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [pricing, setPricing] = useState(0.00);
    const [quantity, setQuantity] = useState(0);
    const [image, setImage] = useState('');
    const [showForm, setShowForm] = useState(false);

    const createItem = async (formData) => {
        try {
            await createNewItem(formData);
        } catch (e) {
            console.error(e);
        }
    };

    if (localStorage.getItem('auth') == null) {
      location.assign('/login')
    }

    const ShowForm = () => {
      setShowForm(true);
    }

    const submitForm = async (event) => {

      event.preventDefault();

      await createItem({
              name, 
              description, 
              price: pricing, 
              quantity, 
              image
           });
      // From the parent class of App we are passing the handler thorugh props to add a new user to a list of users
  
      setName("");
      setDescription("");
      setPricing(0.00);
      setQuantity(0);
      setImage("");

      event.target.reset()

      location.assign('/listings')
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
                    <h5 id='input_text'>Pricing: </h5>
                    <input type='text' onChange={(e) => setPricing(e.target.value)}></input>
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