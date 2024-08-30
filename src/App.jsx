import  { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './App.css'

export const App = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_6z45ko9', 'template_8cjxxll', form.current, '-1uQF6rE1tvxNe-cW')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div>
      <form ref={form} onSubmit={sendEmail}>
      <h1>Contact Form</h1>
      Name : <input type="text" name="user_name" placeholder='Enter Your Name'/>
      <br />
      Email : <input type="email" name="user_email" placeholder='Enter Your Email'/>
      <br />
      Message : <input type="text" name="message" placeholder='Enter Your Query'/>
      <br />
      <input type="submit" value="Send"/>
    </form>
    </div>
  );
};

export default App