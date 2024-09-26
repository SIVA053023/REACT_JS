import React from 'react'
import style from './Button.module.css'

const Button = ( props) => {                         {/*  here we can also usethe Object destructuring intesad of props ex:- {isouterline,text,icon} if we use this no need to use the props.text or props.icon or props.isouterline */}
  return (
    <button className={ props.isouterline ? style.outerline_btn : style.primary_btn }>     {/*here we giving the condition for the style*/ }
       {props.icon}
      {props.text}                              {/* her ewe are using the props concept for use in the contactform*/ }
     
      {/* <MdMessage fontSize="24px" /> VIA SUPPORT CHAT */}
    
    </button>
  )
}

export default Button