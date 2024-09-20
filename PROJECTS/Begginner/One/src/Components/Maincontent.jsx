import React from 'react'
import amazon from '../Images/Amazon.jpg'
import flipkart from '../Images/flipkart.jpg'
import shoe from '../Images/Shoe.jpg'

const Maincontent = () => {
  return (
    <div className='main'>

        <div className='Content'>
             <h1>We are here to help you <br />
             with our shoes</h1>
             <p>Your feet is our responsibility to enhance your style <br />
             with our shoes.Your feet is our responsibility to enhance your style <br />
             with our shoes</p>
             <button>Add tocart</button> <button>HurryUp</button>

             <p>Also you can buy from</p>
             <div className='brands'>
                <img src={amazon} alt="" />
                <img src={flipkart} alt="" />
             </div>
        </div>
        <div className='shoe'>
            <img src={shoe} alt="" />
        </div>
    </div>
  )
}

export default Maincontent