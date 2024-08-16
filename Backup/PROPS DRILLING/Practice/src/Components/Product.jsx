import React from 'react'
import One from './One'


const Product = (props) => {
  return (
    <>
    <h1>This is a Product component</h1>
    <pre>{JSON.stringify(props)}</pre>
    <One One={[props.emp.id,props.emp.name,props.emp.sal]}/>
    </>
  )
}

export default Product
