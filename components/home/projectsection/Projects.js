import { Button } from '../../common/Buttons';
import ProjectRow from './ProjectRow';

function Projects() {
  return (
    <section className="container max-w-6xl min-h-screen mx-auto flex flex-col gap-5 justify-center items-center">
      <div className="p-10  rounded-md  flex flex-col justify-center items-center gap-20">
        <h2 className="">Recent Projects</h2>
        <ProjectRow />
        <Button href="/projects">See all projects</Button>
      </div>
    </section>
  );
}

export default Projects;
