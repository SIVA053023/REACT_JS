import Product from './Product'

let Employee=()=>{
       let Emp_Data={
        id:101,
        name:"Siva",
        sal:450000,
        eamil:"Sivakrishna053936@gmail.com",
        location:"Banglore"
       }

       return<>
                <h1>This is a Employee Component</h1>
                <Product  emp={Emp_Data}/>
             </>
}
export default Employee