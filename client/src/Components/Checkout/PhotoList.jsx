import './PhotoList.css';

const PhotoList = ({ itemArray }) => {
    return (
        <div className='parent_div'>
            <div>
                <img src={itemArray.image} className='photo_img_list'></img>
            </div>
        </div>
    );
};

export default PhotoList;