import {education} from "../data.js";
import EduCard from "./EduCard.jsx";

function Edu() {
  return (
    <section id="education" className='w-[100%] sm:w-[80%] mx-auto mt-20 bg-[#131315] p-10 sm:rounded-xl'>
      <h1 className='text-3xl text-center sm:text-left mb-10'>Education</h1>
      <div aria-label='education cards' className='flex flex-col gap-3 mt-4'>
        {education.map((course)=>{
          return <EduCard key={course.id} course={course}/>
        })}
      </div>
    </section>
  )
}

export default Edu;
