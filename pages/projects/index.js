import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { ArrowRightIcon, XIcon } from '@heroicons/react/outline';
import Head from 'next/head';
import { fetchAPI } from '../../lib/api';
import Layout from '../../components/layout/Layout';
import FilterTag from '../../components/projects/FilterTag';
import Sort from '../../components/projects/Sort';
import { orderBy } from 'lodash';

export async function getStaticProps() {
  const [projects, featuredTech] = await Promise.all([
    fetchAPI('/projects?_sort=date_made:DESC'),
    fetchAPI(`/technologies?featured=${true}`),
  ]);

  return {
    props: { projects, featuredTech },
  };
}
const orders = [
  { id: 1, name: 'New to old', type: 'desc' },
  { id: 2, name: 'Old to new', type: 'asc' },
];

export default function Projects({ projects, featuredTech }) {
  const [filteredTech, setFilteredTech] = useState(featuredTech);
  const [sortBy, setSortBy] = useState(orders[0]);
  const [orderedProjects, setOrderedProjects] = useState(projects);
  console.log(projects);
  return (
    <>
      <Layout>
        <Head>
          <title>Julie Larsen | Projects</title>
        </Head>
        <div className="py-40">
          <h1 className="text-center">Projects</h1>

          <div className="mt-16 w-full flex justify-between items-center">
            {/*             <Sort orders={orders} sortBy={sortBy} setSortBy={setSortBy} />
            <div>
              {filteredTech.map((tech) => (
                <FilterTag
                  key={tech.id}
                  id={tech.id}
                  name={tech.name}
                  featuredTech={featuredTech}
                  filteredTech={filteredTech}
                  setFilteredTech={setFilteredTech}
                />
              ))}
            </div> */}
          </div>
          <div className="flex flex-wrap items-center -m-1">
            {/*<span className="tag active">
            <FontAwesomeIcon className="mr-3" icon={faTimes} />
            School
          </span>
          <span className="tag active">
            <FontAwesomeIcon className="mr-3" icon={faTimes} />
            Personal
          </span>
          <span className="tag">Design</span>
          <span className="tag">HTML + CSS</span>
          <span className="tag">Javascript</span>
          <span className="tag">React</span> */}
          </div>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10 md:gap-5">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-lg h-auto grid grid-rows-2 shadow hover:shadow-lg transition">
                <div className="relative rounded-t-md">
                  <Link href={`/projects/${project.slug}`} passHref>
                    <Image
                      src={project.featured_image.url}
                      alt={project.title}
                      layout="fill"
                      className="object-cover object-center cursor-pointer rounded-t-md"
                    />
                  </Link>
                </div>
                <div className="h-full p-5 md:p-6 flex flex-col justify-between">
                  <div className="flex flex-col justify-between">
                    <ul className="flex flex-wrap mb-2 md:mb-3">
                      {project.technologies
                        .filter((tech) => tech.featured)
                        .map((tech) => (
                          <li
                            key={tech.name + tech.id}
                            className="text-xs m-1 mt-0 ml-0 p-1 px-3 bg-purple-500 text-white rounded-xl">
                            {tech.name}
                          </li>
                        ))}
                    </ul>
                    <Link href={`/projects/${project.slug}`} passHref>
                      <h2 className="cursor-pointer text-base font-bold text-gray-800 mt-1 mb-1">
                        {project.title}
                      </h2>
                    </Link>
                    <Link href={`/projects/${project.slug}`} passHref>
                      <p className="cursor-pointer m-0 leading-normal md:leading-relaxed text-sm line-clamp-3">
                        {project.small_description}
                      </p>
                    </Link>
                  </div>
                  <Link href={`/projects/${project.slug}`}>
                    <a className="block mt-2 text-base transition text-purple-500 hover:text-purple-600 font-bold">
                      View project
                      <ArrowRightIcon className="inline ml-2 h-6 w-6" />
                    </a>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
}
