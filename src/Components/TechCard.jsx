import React from 'react'

function TechCard({techStack}) {
  return (
    <article className='w-[100%] p-8 text-center border-2 border-[#A88AF0] rounded-2xl'>
     <h3 className='text-center tracking-widest font-bold capitalize text-xl mb-12'>{techStack[0].category}</h3>
     <ul>
      {techStack.map((tech)=>{
        return(
          <li key={tech.id} className='flex justify-start items-center gap-4 mt-4'>
            <img src={tech.image} alt={`${tech.title} logo`}  className=' w-[40px] h-[40px]'/>
            <h3>{tech.title}</h3>
          </li>
        );
      })}
     </ul>
    </article>
  )
}

export default TechCard;
