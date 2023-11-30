import './PurchasePage.css'

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
          <button style={{"marginTop": "15px", "width": "220px"}} onClick={()=> location.assign('/')}>Click to Return to Site</button>
        </div>
      </div>
    ); 

};

export default PurchasePage; 