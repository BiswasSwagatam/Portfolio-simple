import React from 'react'

function ProjectCard({link,src,h3,p}) {
  return (
    <a href={link} target="_blank">
        <img className='hover' src={src}/>
        <h3>{h3}</h3>
        <p>{p}</p>
    </a>
  )
}

export default ProjectCard