import {Link} from 'react-router-dom'


let H1=()=>{
    return(<>
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
    <Link to="" className="navbar-brand"><img src="./Logo.png" alt="" width="50px" height="50px" /></Link> 
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
   <div className="container">
        <div>
            <h1>Its alll coming</h1> <br />
            <h1>together</h1> <br />
            <p>when you are top of your money,life is good.We help you 
                effortlessly manage your finances in one place</p>
        </div>
   </div>

   <div className="container" id='Footer'>
    <div>
        <div className="col-4">
            <img src="./images/notes.jpg" alt="" width="50px" height="50px" /> <br />
            <h3>All-oin -one
                finances
            </h3>
            <br />
            <p>we bring your all of money to one
                place ,from balances and bills to
                   credit score and more
            </p>



        </div>
        <div className="col-4">
        <img src="./images/Dolllar.webp" alt="" width="50px" height="50px" /> <br />
            <h3>Budjets
                made simple
            </h3>
            <br />
            <p>Easily ceate budgets,and see our
                suggestions based on
                your spending.
            </p>
        </div>
        <div className="col-4">
        <img src="./images/creditCheck.avif" alt="" width="50px" height="50px" /> <br />
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

          
