import React from 'react';
import avatar from '../assets/avatar.jpeg';
import { BsLinkedin } from "react-icons/bs";
import { RxGithubLogo } from "react-icons/rx";
import { SiSlack } from "react-icons/si";
import { ImWhatsapp } from "react-icons/im";

function Bio() {
  const sectionStyling = "sm:bg-[#131315] sm:p-10 sm:rounded-xl grid grid-flow-col grid-cols-1 grid-rows-2 justify-center items-center sm:flex sm:justify-between gap-5 w-[80%]  mx-10 sm:mx-auto mt-20 text-center sm:text-left";
  return (
    <section id="about" className={sectionStyling}>
      <div aria-label="Main Description" className=''>
        <h1 className='text-[2rem] sm:text-[3rem] mb-4'>Hi, I'm Mihai</h1>
        <p><strong className=' neon-text text-3xl'>Web Developer</strong>with a passion for creating modern, responsive, and user-friendly websites. I’m always looking for ways to grow, collaborate, and contribute to meaningful projects.</p>
        <div aria-label="social media links" className="text-[#A88AF0] text-3xl flex items-center justify-center sm:justify-start gap-3 mt-4 sm:mt-10">
          <a href="https://www.linkedin.com/in/mihaisacalianu/"><BsLinkedin /></a>
          <a href="https://github.com/mihaisacalianu"><RxGithubLogo /></a>
          <SiSlack />
          <ImWhatsapp />
        </div>
        <div aria-label='utility buttons' className='flex gap-4 mt-10 items-center text-black justify-center sm:justify-start'>
          <button className='blurred-purple-btn'>Download CV</button>
          <a href="https://github.com/mihaisacalianu?tab=repositories" className='blurred-purple-btn'>View my work</a>
        </div>
      </div>
      <img src={avatar} alt="portofolio owner photo" className='w-[200px] h-[200px] justify-self-center sm:w-[250px] sm:h-[250px] rounded-full mt-15 sm:mt-4'/>
    </section>
  )
}

export default Bio
