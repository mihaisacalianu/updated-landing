import { HashLink } from 'react-router-hash-link';
import { GoHomeFill } from "react-icons/go";
import { FaTools } from "react-icons/fa";
import { IoFolderOpen } from "react-icons/io5";
import { IoSchoolSharp } from "react-icons/io5";
import { IoMdContact } from "react-icons/io";

function SideNav() {
  return (
    <nav className='sticky top-10 left-0 sm:w-[60px] sm:ml-4 sm:p-2 sm:bg-[#131315] rounded-xl flex items-center sm:justify-center z-10'>
      <ul className='text-4xl text-[#A88AF0] flex flex-col gap-3 '>
        <li ><HashLink smooth to="#about"><GoHomeFill /></HashLink></li>
        <li><HashLink smooth to="#skills"><FaTools/></HashLink></li>
        <li><HashLink smooth to="#projects"><IoFolderOpen /></HashLink></li>
        <li><HashLink smooth to="#education"><IoSchoolSharp /></HashLink></li>
        <li><HashLink smooth to="#contact"><IoMdContact /></HashLink></li>
      </ul>
    </nav>
  )
}

export default SideNav
