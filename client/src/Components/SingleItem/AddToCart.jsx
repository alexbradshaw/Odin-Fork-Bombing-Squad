const AddToCart = ({ addHandler }) => { 
    return (
        <button className="cart-button" onClick={addHandler}> Add to cart </button>
    );
};

export default AddToCart