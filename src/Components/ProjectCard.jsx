import React from 'react'

function ProjectCard({project}) {
  console.log(project.image);
  return (
    <article className='card border-[3px] border-[#A88AF0] rounded-xl pb-3 w-[80%] xl:w-[60%] sm:justify-self-center flex flex-col items-center'>
      <a href={project.link}>
        <img src={project.image} alt={project.title} className='rounded-t-xl sm:w-[370px] sm:h-[250px]'/>
        <h3 className='text-2xl mt-3 text-center'>{project.title}</h3>
        <p className='m-4'>{project.description}</p>
      </a>
    </article>
  )
}

export default ProjectCard
