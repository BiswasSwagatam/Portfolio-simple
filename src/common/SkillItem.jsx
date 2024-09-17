import React from 'react'

function SkillItem({src,skill}) {
  return (
    <span>
        <img src={src}/>
        <p>{skill}</p>
    </span>
  )
}

export default SkillItem