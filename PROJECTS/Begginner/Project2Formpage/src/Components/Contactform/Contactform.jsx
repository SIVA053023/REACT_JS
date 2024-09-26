import React from 'react'
import style from './Contactform.module.css'
import Button from '../Button/Button'
import { MdMessage } from 'react-icons/md'
import { FaPhoneAlt } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'

//    

const Contactform = () => {
  return ( <section className={style.container}>  
                 <div className={style.contactform}>
                  <div className={style.top_btn}>
                  <Button text="VIA SUPPORT CHAT" icon={<MdMessage/>}/> 
                  <Button text="VIA CALL" icon={<FaPhoneAlt/>}/> 
                  
                  </div>
                 <div>
                 <Button isouterline={true}  icon={<HiMail/>} text="VIA EMAIL CHAT"/>   {/* here we are using the isouterline={true} boolean */}
                 </div>
                 <form action="" className={style.form_controller}>
                  <div className="form_controller">
                    <label htmlFor="name">Name</label>
                    <input type="text" />
                  </div>
                 </form>
                 
                    
                   
                 </div>
                 <div className={style.contactimage}></div>
  </section>
    
  )
}

export default Contactform