import React from 'react'

function EduCard({course}) {
  console.log(course);
  return (
    <article className='w-[100%] card border-[3px] border-[#A88AF0] rounded-xl p-3'>
      <a href={course.link}>
      <div aria-label="Container for title and course logo"className='flex items-center gap-4 mb-5'>
        <img src={course.image} alt="course logo"  className='w-[100px]'/>
        <h2 className='text-xl'>{course.title}</h2>
      </div>
      <p>{course.description}</p>
      </a>
    </article>
  )
}

export default EduCard
