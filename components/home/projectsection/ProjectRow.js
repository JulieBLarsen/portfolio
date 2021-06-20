import React, { useEffect, useState } from 'react';
import { getStrapiURL } from '../../../lib/api';
import ProjectCard from './ProjectCard';
import axios from 'axios';

function ProjectRow() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const url = getStrapiURL('/projects?featured=true&_sort=id:DESC');

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        console.log(res.data);
        setProjects(res.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.toString());
        setLoading(false);
        console.log(error);
      });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps */

  if (error) {
    return (
      <div className="text-center">
        <h3>Oops, something went wrong!</h3>
        <p>{error}</p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="border border-light-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto bg-white animate-pulse">
        <div className="animate-pulse flex space-x-4">
          <div className="rounded-full bg-light-blue-400 h-12 w-12"></div>
          <div className="flex-1 space-y-4 py-1">
            <div className="h-4 bg-light-blue-400 rounded w-3/4"></div>
            <div className="space-y-2">
              <div className="h-4 bg-light-blue-400 rounded"></div>
              <div className="h-4 bg-light-blue-400 rounded w-5/6"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="w-full grid md:grid-cols-4 gap-10">
        {projects.map((project) => (
          <div key={project.id}>
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </>
  );
}

export default ProjectRow;
