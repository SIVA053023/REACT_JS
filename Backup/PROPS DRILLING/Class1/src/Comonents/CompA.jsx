import React from 'react'
import CompB from './CompB'

const CompA = () => {
    emp={
        eid:101,
        ename:"Siva",
        esal:45000
    }
  return (<>
   <div>
    <h1>CompA</h1>
    <CompB props={emp}/>
    </div>
   </>
   
  )
}

export default CompA