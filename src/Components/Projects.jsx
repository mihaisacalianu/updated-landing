import React from 'react'
import { projects } from '../data.js';
import ProjectCard from './ProjectCard.jsx';
function Projects() {
  return (
    <section id="projects" className='w-[100%] sm:w-[80%] mx-auto mt-20 bg-[#131315] p-10 sm:rounded-xl'>
      <h2 className='text-3xl text-left mb-10'>Some of my work:</h2>
      <div aria-label="Projects Container" className="flex flex-col items-center gap-6 sm:grid sm:grid-cols-2 ">
        {projects.map((project)=>{
          return <ProjectCard key={project.id} project={project}/>
        })}
      </div>
    </section>
  )
}

export default Projects
