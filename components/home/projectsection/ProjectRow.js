import React from 'react';
import ProjectCard from './ProjectCard';

function ProjectRow({ projects }) {
  return (
    <div className="w-full grid grid-cols-2 gap-10">
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </div>
  );
}

export default ProjectRow;
