import React from 'react'

const ProjectDetails = (props) => {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
        <div className="card z-depth-0">
            <div className="card-content">
                <span className="card-title">Project Title {id}</span>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, delectus aut alias rerum quae nisi recusandae, possimus officiis assumenda minus tempora corporis eius eos dolore illum, veritatis deleniti ipsa animi.</p>
            </div>
            <div className="card-action grey lighten-4 grey-text">
                <div>Posted by Renish</div>
                <div>7th January, 5am</div>
            </div>
        </div>
    </div>
  )
}

export default ProjectDetails
