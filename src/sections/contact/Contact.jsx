import './contact.css'
import { IoIosSend } from "react-icons/io";
import emailjs from '@emailjs/browser'
import { useRef } from 'react'


const Contact = () => {

  const form = useRef();
  const sendEmail =(e) =>{
    e.preventDefault();
  
  emailjs.sendForm('service_fi28je9', 'template_4j62v1a', form.current, 'RpRCOW_qgrPyS5mDe')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      alert(" Thanks for sending us mail")
  };


  return (
    <section id="contact">
      <h2>Contact</h2>
      <div className='container contact__container'>
        <form ref={form} onSubmit={sendEmail}>
          <div className="form-group_cont">
          <div className='form-group'>
            <label htmlFor='name'>Name</label>
            <input type="text" id='name' name='to_name' placeholder='exampla: John' required/>
          </div>
          <div className='form-group'>
            <label htmlFor='email'>Email</label>
            <input type="email" id='email' name='from_user' placeholder='example:abc@gmmail.com' required/>
          </div>
          <div className='form-group'>
            <label htmlFor='message'>Message</label>
            <textarea  id='message' name='message' placeholder='write any query and something about my work' required/>
          </div>
          <button value="send" type="submit"><a className='btn primary'><IoIosSend />Send</a></button>
          </div>
        </form>
        </div>
       
    </section>
  )
}

export default Contact
