//This component file could be helpful for when the upload picture button is clicked then
//it can render a form for passing in the url for the image (state variable for showing the form on the page??) (involve lift state)

const UploadPhoto = () => {
    //create css for the form
    //have a imageeURL change state function that can be passed down and when click button thene update
    //the state value for the image
    //then the background will change to the image
    return (
    <div id="uploadForm">
        <input type="text" placeholder="imageURL"></input>
        <button>Upload Image</button>
    </div>
    );
};

export default UploadPhoto;