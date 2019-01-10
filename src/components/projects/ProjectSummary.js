import React from 'react'

const ProjectSummary = ({project}) => {
  return (
    <div className="card z-dept-0 project-summary">
        <div className="card-content grey-text text-darken-3">
            <span className="card-title">{project.title}</span>
            <p>Posted by Renish</p>
            <p className="grey-text">12th December, 7am</p>
        </div>
    </div>
  )
}

export default ProjectSummary;
