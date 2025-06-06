import { HashLink } from 'react-router-hash-link';

function Nav() {
  return (
    <nav id='header' aria-label="Main Navigation"
    className='bg-[#131315] text-[#A88AF0] text-[1.2rem] sm:text-[1.8rem] p-4 mt-4 rounded-full w-[100%] sm:w-[60%]: sm:p-2 md:w-[40%] mx-auto text-center'>
      <ul className='flex gap-5 sm:gap-10 w-full justify-center items-center'>
        <li><HashLink smooth to="#skills">Skills</HashLink></li>
        <li><HashLink smooth to="#projects">Projects</HashLink></li>
        <li><HashLink smooth to="#education">Education</HashLink></li>
        <li><HashLink smooth to="#contact">Contact</HashLink></li>
      </ul>
    </nav>
  )
}
export default Nav;
