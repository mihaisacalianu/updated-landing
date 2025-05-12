import React from 'react';
import techStack from '../data.js';
import TechCard from './TechCard.jsx';

function TechStack() {

  const frontEndStack = techStack.filter((tech)=>tech.category === 'frontend');
  const programingLanguageStack = techStack.filter((tech)=>tech.category === 'programing languages');
  const databaseStack = techStack.filter((tech)=>tech.category === 'database');
  const toolsStack = techStack.filter((tech)=>tech.category === 'tools');

  return (
    <section id="skills" className='w-[100%] sm:w-[80%] mx-auto mt-20 bg-[#131315] p-10 sm:rounded-xl'>
      <h2 className='text-3xl text-left'>Technologies used for building projects:</h2>
      <div aria-label='Tech Stack Card' className='w-[100%] sm:w-[80%] mx-auto mt-10 flex flex-col gap-10 sm:grid-cols-2 sm:grid justify-center'>
        <TechCard techStack={frontEndStack}/>
        <TechCard techStack={programingLanguageStack}/>
        <TechCard techStack={databaseStack}/>
        <TechCard techStack={toolsStack}/>
      </div>
    </section>
  )
}

export default TechStack;
