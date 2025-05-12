import { BsLinkedin } from "react-icons/bs";
import { RxGithubLogo } from "react-icons/rx";
import { SiSlack } from "react-icons/si";
import { ImWhatsapp } from "react-icons/im";

function ContactForm() {
  return (
    <section id="contact" className='w-[100%] sm:w-[80%] mx-auto mt-20 bg-[#131315] p-10 sm:rounded-xl'>
      <h2 className='text-3xl text-left mb-10'>Get in touch!</h2>
      <p className='text-lg text-left mb-10'>Do you have any questions or any projects to discuss?</p>
      <form action="" className="flex flex-col gap-4 sm:w-full items-center sm:items-start">
        <label htmlFor="name">Name</label>
        <input type="text" name='name' placeholder='Type your name here...'/>
        <label htmlFor="email">Email</label>
        <input type="email" name='email' placeholder='Type your email here...' required />
        <label htmlFor="message">Message</label>
        <textarea name="message" placeholder="Type your message here..."/>
        <button type='submit' className='click-btn btn-style5'>Submit</button>
      </form>
      <div aria-label="social media links container" className="text-[#A88AF0] text-3xl flex items-center justify-center sm:justify-end gap-3 mt-10 sm:mt-10">
        <a href="https://www.linkedin.com/in/mihaisacalianu/"><BsLinkedin /></a>
        <a href="https://github.com/mihaisacalianu"><RxGithubLogo /></a>
        <a href="slack://channel?team=T02NE0241&id=D088UDKGXFT">
          <SiSlack />
        </a>
        <a href="https://wa.me/07468459500" target="_blank" rel="noopener noreferrer">
          <ImWhatsapp />
        </a>
      </div>
    </section>
  )
}

export default ContactForm;
