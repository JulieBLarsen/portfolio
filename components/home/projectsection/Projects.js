import { fetchAPI, getStrapiURL } from '../../../lib/api';
import { Button } from '../../common/Buttons';
import ProjectRow from './ProjectRow';

function Projects({ projects }) {
  console.log(projects);
  return (
    <section className="container max-w-6xl h-screen mx-auto flex flex-col gap-5 justify-center items-center">
      <h2>Projects</h2>
      <ProjectRow />
      <Button>See all projects</Button>
    </section>
  );
}

export default Projects;
export async function getStaticProps() {
  const url = 'https://julie-larsen-portfolio.herokuapp.com/projects';

  const res = await fetch(url);
  const projects = await res.json();
  console.log(projects);
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      projects,
    },
  };
}
