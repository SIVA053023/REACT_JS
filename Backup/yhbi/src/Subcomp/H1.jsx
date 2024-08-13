import {Link} from 'react-router-dom'
import '../Static/One.css'
import Dollar from './images/Dolllar.png'
import Logo from './images/Logo.png'
import notes from './images/notes.jpg'
import creditCheck from './images/creditCheck.avif'


let H1=()=>{
    return(<>
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
    <Link to="" className="navbar-brand"><img src={Logo} alt="" width="50px" height="50px" /></Link> 
      <div className='ml-auto'>
       <ul className='navbar-nav'>
          <li><Link  to="#" className="nav-link">How it Works</Link></li>
          <li><Link  to="#" className="nav-link">Creditcards& More</Link></li>
          <li><Link  to="#" className="nav-link">Investing</Link></li>
          <li><Link  to="#" className="nav-link">Loans</Link></li>
          <li><Link  to="#" className="nav-link">Resources</Link></li>
         
       </ul>
      
     </div>  
   </nav>
  
           <div id='header'>
           <h1>Its all coming</h1> 
            <h1>together</h1>
            <p>when you are top of your money,life is good.
              </p>
              <p>  We help you 
              effortlessly manage your finances in one place</p>
           </div>
           

   <div  id='Footer'>
    <div>
        <div className="sm-col-4" id='Siva'>
            <img src={notes} alt="" width="50px" height="50px" id='product img'/> <br />
            <h3>All-oin -one
                finances
            </h3>
            <br />
            <p>we bring your all of money to one
                place ,from balances and bills to
                   credit score and more
            </p>
        </div>
        <div className="col-4" id='Siva'>
        <img src={Dollar} alt="" width="50px" height="50px" id='product img' /> <br />
            <h3>Budjets
                made simple
            </h3>
            <br />
            <p>Easily ceate budgets,and see our
                suggestions based on
                your spending.
            </p>
        </div>
        <div className="col-4" id='Siva'>
        <img src={creditCheck} alt="" width="50px" height="50px" id='product img' /> <br />
            <h3>Unlimetd 
                credit Scores
            </h3>
            <br />
            <p>Check your your free credit score as many
                times as you like,and get tips 
                to help improve it.
            </p>
        </div>
    </div>
   </div>

</>
        
    ) 
}
export default H1

          
