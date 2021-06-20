import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/outline';
import { useEffect, useState } from 'react';

function ProjectCard({ project }) {
  return (
    <>
      <div className="bg-white rounded-md shadow transition hover:shadow-lg">
        <img
          className="cursor-pointer rounded-t-md h-40 w-full transition object-cover object-center"
          src={project.images[0].url}
          alt={project.title}
        />

        <div className="p-4">
          <h4 className="py-2 font-semibold">{project.title}</h4>

          <a className="text-sm text-purple-600 hover:text-purple-700 font-medium block">
            Read more
          </a>

          {/*         <Link href={`./projects/${project.slug}`}>
          <img
            className="cursor-pointer rounded-t-md h-40 w-full transition object-cover object-center"
            src={project.images[0].url}
            alt={project.title}
          />
        </Link>
        <div className="p-4">
          <Link href={`./projects/${project.slug}`}>
            <a>
              <h4 className="py-2 font-semibold">{project.title}</h4>
            </a>
          </Link>
          <Link href={`./projects/${project.slug}`}>
            <a className="text-sm text-purple-600 hover:text-purple-700 font-medium block">
              Read more
            </a>
          </Link> */}
        </div>
      </div>
    </>
  );
}

export default ProjectCard;
