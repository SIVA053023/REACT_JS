import React, { useState } from 'react'
import style from './Contactform.module.css'
import Button from '../Button/Button'
import { MdMessage } from 'react-icons/md'
import { FaPhoneAlt } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'


//    

const Contactform = () => {
 
  let [Name, setName]=useState("Sivakrishna")
  let [email,setemail]=useState("Siva053@gmail.com")
  let[text,settext]=useState("gvbjhkn")

  let onsubmit=(e)=>{
    e.preventDefault();

    setName(e.target.Name.value);
    setemail(e.target.email.value);
    settext(e.target.text.value);

  }
  return ( <section className={style.container}>  
                 <div className={style.contactform}>
                  <div className={style.top_btn}>
                  <Button text="VIA SUPPORT CHAT" icon={<MdMessage/>}/> 
                  <Button text="VIA CALL" icon={<FaPhoneAlt/>}/> 
                  
                  </div>
                 <div>
                 <Button isouterline={true}  icon={<HiMail/>} text="VIA EMAIL CHAT"/>   {/* here we are using the isouterline={true} boolean */}
                 </div>
                 <form onSubmit={onsubmit}>
                  <div className={style.form_controller}>
                    <label htmlFor="name">Name</label>
                    <input type="text" name='Name' />
                  </div>
                  <div className={style.form_controller}>
                    <label htmlFor="name">Email</label>
                    <input type="text" typeof='email' name='email' />
                  </div>
                  <div className={style.form_controller}>
                    <label htmlFor="text">Text</label>
                    <textarea name='text' rows={8} />
                  </div>
                  <div style={{
                    display:'flex',
                    justifyContent:'end',
                    

                  }} >
                 <Button  text="SUBMIT BUTTON"/>   {/* here we are using the isouterline={true} boolean */}
                 </div>
                 <div>
                 <h3>{Name}{",  "}
                  {email}{",   "}
                  {text}</h3>
                 </div>
                 </form>
                 
                    
                   
                 </div>
                 <div className={style.contactimage}>
                  <img src="/Images/contact.svg" alt="" />  
                 </div>
  </section>
    
  )
}

export default Contactform