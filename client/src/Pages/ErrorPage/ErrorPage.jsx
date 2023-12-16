import './ErrorPage.css'

import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
      <div className='err'>
        <div>
          <h1 id=''>
              Error
          </h1>
          <h2 id=''> 
              Oops! Something went wrong :/
          </h2>
          <Link to='/'>
            <button style={{"marginTop": "15px", "width": "220px"}} >Click to Return to Site</button>
          </Link>
        </div>
      </div>
    ); 
};

export default ErrorPage; 