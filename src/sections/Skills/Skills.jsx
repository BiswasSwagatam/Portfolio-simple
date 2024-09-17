import './SkillsStyles.Module.css'
import checkmarkdark from '../../assets/checkmark-dark.svg'
import checkmarklight from '../../assets/checkmark-light.svg'
import SkillItem from '../../common/SkillItem'
import { useTheme } from '../../common/ThemeContext'

function Skills() {
  const {theme} = useTheme();
  const checkmark = theme === 'light' ? checkmarklight : checkmarkdark;

  return (
    <section className='mainskillscontainer'>
        <h1 className='sectionTitle'>Skills</h1>
        <div className='skillscontainer'>
            <SkillItem src={checkmark} skill="HTML"/>
            <SkillItem src={checkmark} skill="CSS"/>
            <SkillItem src={checkmark} skill="JavaScript"/>
            <SkillItem src={checkmark} skill="Node"/>       
        </div>
        <hr/>
        <div className='skillscontainer'>
            <SkillItem src={checkmark} skill="React JS"/>
            <SkillItem src={checkmark} skill="Tailwind CSS"/>
            <SkillItem src={checkmark} skill="Three JS"/>
            <SkillItem src={checkmark} skill="Next"/>       
        </div>
        <hr/>
        <div className='skillscontainer'>
            <SkillItem src={checkmark} skill="MongoDB"/>
            <SkillItem src={checkmark} skill="Redis"/>
            <SkillItem src={checkmark} skill="PostgreSQL"/> 
            <SkillItem src={checkmark} skill="Git"/>      
        </div>
    </section>
  )
}

export default Skills