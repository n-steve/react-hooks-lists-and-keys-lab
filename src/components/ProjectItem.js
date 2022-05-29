import React from "react";

function ProjectItem({ name, about, technologies }) {
  const tech = technologies.map((technology, i) => {
    return <span key={i}>{technology}</span>;
  });
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">{tech}</div>
    </div>
  );
}

export default ProjectItem;
