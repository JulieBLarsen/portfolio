import Head from 'next/head';
import Layout from '../../components/layout/Layout';
import FilterTag from '../../components/projects/FilterTag';
import Sort from '../../components/projects/Sort';
import { orderBy } from 'lodash';
import Card from '../../components/projects/Card';
import useSWR from 'swr';
import axios from 'axios';
import { BASE_URL } from '../../lib/api';
import LoadingCard from '../../components/projects/LoadingCard';

const apiUrl = BASE_URL + '/projects?_sort=date_made:DESC';
const fetcher = (url) => axios.get(url).then((res) => res.data);

const orders = [
  { id: 1, name: 'New to old', type: 'desc' },
  { id: 2, name: 'Old to new', type: 'asc' },
];

export default function Projects({ initialProjects, featuredTech }) {
  /*   const [filteredTech, setFilteredTech] = useState(featuredTech);
  const [sortBy, setSortBy] = useState(orders[0]);
  const [orderedProjects, setOrderedProjects] = useState(projects);
 */

  const { data, error } = useSWR(apiUrl, fetcher, {
    initialData: initialProjects,
  });

  if (!data) {
    return (
      <>
        <Layout>
          <Head>
            <title>Julie Larsen | Projects</title>
          </Head>
          <div className="py-40">
            <h1 className="text-center">Projects</h1>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10 md:gap-5">
              <LoadingCard />
              <LoadingCard />
              <LoadingCard />
              <LoadingCard />
              <LoadingCard />
              <LoadingCard />
            </div>
          </div>
        </Layout>
      </>
    );
  }

  if (error) {
    return (
      <>
        <Layout>
          <Head>
            <title>Julie Larsen | Projects</title>
          </Head>
          <div className="py-40">
            <h1 className="text-center">Oops! Something went wrong</h1>
            <p>{error}</p>
          </div>
        </Layout>
      </>
    );
  }

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
            {data.map((project) => (
              <Card key={project.id} project={project} />
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const initialProjects = await fetcher(apiUrl);
  return { props: { initialProjects } };
}
