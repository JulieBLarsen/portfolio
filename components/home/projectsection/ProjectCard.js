function ProjectCard({ image, title, description, link }) {
  return (
    <div className="flex space-between bg-white rounded-md shadow p-4">
      <p>image</p>
      <div>
        <h4>Project Name</h4>
        <p>Some text</p>
        <a href="">View Project</a>
      </div>
    </div>
  );
}

export default ProjectCard;
