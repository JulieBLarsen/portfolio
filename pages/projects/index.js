import { useState } from 'react';
import Head from 'next/head';
import { fetchAPI } from '../../lib/api';
import Layout from '../../components/layout/Layout';
import FilterTag from '../../components/projects/FilterTag';
import Sort from '../../components/projects/Sort';
import { orderBy } from 'lodash';
import Card from '../../components/projects/Card';

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

  return (
    <>
      <Layout>
        <Head>
          <title>Julie Larsen | Projects</title>
        </Head>
        <div className="py-40">
          <h1 className="text-center">Projects</h1>
          <div className="mt-16 w-full flex justify-between items-center">
            {/* <Sort orders={orders} sortBy={sortBy} setSortBy={setSortBy} /> */}
            <div>
              {/*               {filteredTech.map((tech) => (
                <FilterTag
                  key={tech.id}
                  id={tech.id}
                  name={tech.name}
                  featuredTech={featuredTech}
                  filteredTech={filteredTech}
                  setFilteredTech={setFilteredTech}
                />
              ))} */}
            </div>
          </div>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10 md:gap-5">
            {projects.map((project) => (
              <Card key={project.id} project={project} />
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
}
