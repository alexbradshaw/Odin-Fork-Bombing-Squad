const NewItem = ({ formData, setForm }) => {

    const formHandler = (e) => {
        setForm({
            ...formData, // brings old form values
            [e.target.name]: e.target.value // updates object only for targeted input
        })
    }

    return (
        <div className='newItem'>
            <div className='newItemContainer'>
                <div className='newItemForm'>
                    <div className='input'>
                        <label htmlFor="title">Title: </label>
                        <input type="text" name='name' placeholder='Title' id='title' onChange={formHandler}/>
                    </div>
                    <div className='input'>
                        <label htmlFor="price">Price: </label>
                        <input type="number" name='price' min={0} placeholder='0' id='price' onChange={formHandler}/>
                    </div>
                    <div className='input'>
                        <label htmlFor="quantity">Quantity: </label>
                        <input type="number" name='quantity' min={0} placeholder='0' id='quantity' onChange={formHandler}/>
                    </div>
                    <div className='input'>
                        <label htmlFor="image">Image: </label>
                        <input type="text" name='image' placeholder='Image URL' id='image' onChange={formHandler}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewItem;