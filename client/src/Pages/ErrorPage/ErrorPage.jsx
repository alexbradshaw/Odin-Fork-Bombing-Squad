import './ErrorPage.css'

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
          <button style={{"marginTop": "15px", "width": "220px"}} onClick={()=> location.assign('/')}>Click to Return to Site</button>
        </div>
      </div>
    ); 

};

export default ErrorPage; 