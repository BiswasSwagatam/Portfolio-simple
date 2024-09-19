
import './ProjectsStyles.Module.css'
import viberr from '../../assets/viberr.png'
import moody from '../../assets/favicon.png'
import ProjectCard from '../../common/ProjectCard'

function Projects() {
  return (
    <section className='mainprojectscontainer'>
        <h1>Projects</h1>
        <div className='projectscontainer'>
            <ProjectCard link="https://github.com/BiswasSwagatam/MERN---Ecommerce-Store" src={viberr} h3="E-Commerce Store" p="React JS, Node JS, Express JS, MongoDB, Redis"/>
            <ProjectCard link="https://github.com/BiswasSwagatam/Moody---Mood-tracker-app" src={moody} h3="Daily Mood Tracker" p="React JS, NEXT JS, Tailwind CSS, Firebase"/>
        </div>
    </section>
  )
}

export default Projects
