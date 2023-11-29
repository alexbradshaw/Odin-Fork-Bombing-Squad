const PurchasePage = () => {
    return (
        <div className='err'>
          <div>
            <h2 id=''> 
                Thank you for your Purchase!
            </h2>
            <div id="image">
                <img src="https://cdn-icons-png.flaticon.com/512/5290/5290109.png"></img>
            </div>
            <button style={{"marginTop": "15px", "width": "220px"}} onClick={()=> location.assign('/')}>Click to Return to Site</button>
          </div>
        </div>
      ); 
}
export default PurchasePage;