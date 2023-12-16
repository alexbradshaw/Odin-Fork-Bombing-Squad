import './PurchasePage.css'

import { Link } from 'react-router-dom';

const PurchasePage = () => {

    return (
      <div className='purchase'>
        <div>
          <h1 id=''>
              Purchase Successful!
          </h1>
          <h2 id=''> 
              Thank you for Purchasing from Us!
          </h2>
          <Link to='/'>
            <button style={{"marginTop": "15px", "width": "220px"}} >Click to Return to Site</button>
          </Link>
        </div>
      </div>
    ); 

};

export default PurchasePage; 