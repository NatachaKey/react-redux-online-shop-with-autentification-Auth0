import ParticlesContact from './ParticlesContact';
import  './Contact.css';
import 'aos/dist/aos.css'; 

const Contacts = ()=>{
    return <div class="container" >  
    <ParticlesContact/>
    <h3>We would ❤️ to hear from you</h3>
    <h3>Always.</h3>
    <form data-aos="fade-left" action="https://formspree.io/f/mpzbnday" id="contact"  method="POST">
      <h3>Contact us</h3>
      <h4>We will answer you as soon as possible</h4>
      <fieldset>
        <input placeholder="Name" type="text" tabindex="1" required />
      </fieldset>
      <fieldset>
        <input placeholder="Email" type="email" tabindex="2"  name="email" required/>
      </fieldset>
      <fieldset>
        <textarea placeholder="Your message..." tabindex="5"  name="message"required></textarea>
      </fieldset>
      <fieldset>
        <button name="submit" type="submit" id="contact-submit" data-submit="...In process"> Submit</button>
      </fieldset>
     
    </form>
  </div>
}

export default Contacts;
;