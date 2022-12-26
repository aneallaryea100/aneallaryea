import React from 'react'
import './contact.css'

function Contact() {
  return (
    <div className='contactContainer' id='contact'>
        <h1 className='contacthead'><code>Contact me</code></h1>
      <div class="hold-form">
                 <div class="context">
                     <h5 class="fotext">I'm always interested in hearing about new projects, so if you'd like to chat please get in touch.</h5>
                 </div>
                 <div class="form-card">
                     <form action="https://formspree.io/f/xjvllnnl" method="post" id="form">
                         <ul class="fmlist">
                            <li className='inputcontactfield'>
                                <label>
                                <input type="text" id="name" name="user_name" placeholder="Full Name" maxlength="30" required />
                               </label>
                            </li>
                            <li className='inputcontactfield'>
                                <input type="email" id="mail" name="user_email" placeholder="Email address" />
                            </li>
                            <li className='inputcontactfield'>
                                <label>
                                <textarea id="msg" name="user_message"  maxlength="500" placeholder="Enter text here" required></textarea>
                                </label>
                            </li>
                            <li class="fbutton controlz">
                                <button type="submit" class="fbtnn">Get in touch</button>
                                <span class="error"></span>
                            </li>
                         </ul>
                         
                     </form>
                 </div>
      </div>
    </div>
  )
}

export default Contact;
