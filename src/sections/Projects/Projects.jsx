
import './ProjectsStyles.Module.css'
import viberr from '../../assets/viberr.png'
import hipsster from '../../assets/hipsster.png'
import ProjectCard from '../../common/ProjectCard'

function Projects() {
  return (
    <section className='mainprojectscontainer'>
        <h1>Projects</h1>
        <div className='projectscontainer'>
            <ProjectCard link="https://github.com/BiswasSwagatam/MERN---Ecommerce-Store" src={viberr} h3="E-Commerce Store" p="React JS, Node JS, Express JS, MongoDB, Redis"/>
            
        </div>
    </section>
  )
}

export default Projects