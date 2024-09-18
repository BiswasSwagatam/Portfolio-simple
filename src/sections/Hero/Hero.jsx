import React from 'react'
import heroImg from '../../assets/swagpic.png'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import linkedinlight from '../../assets/linkedin-light.svg'
import linkedindark from '../../assets/linkedin-dark.svg'
import githublight from '../../assets/github-light.svg'
import githubdark from '../../assets/github-dark.svg'
import './HeroStyles.Module.css';
import { useTheme } from '../../common/ThemeContext';
import Resume from '../../assets/cv.pdf'

function Hero() {
  const {theme, toggleTheme} = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const linkedinIcon = theme === 'light' ? linkedinlight : linkedindark;
  const githubIcon = theme === 'light' ? githublight : githubdark;
    
  return (
    <section className='container' >
        <div className='colormodecontainer'>
            <img className='heroimg' src={heroImg}/>
            <img className='colormode' src={themeIcon} onClick={toggleTheme}/>
        </div>
        <div className='info'>
            <h1>Swagatam <br/> Biswas</h1>
            <h2>FullStack developer</h2>
            <span className='socials'>
                <a href="https://www.linkedin.com/in/swagatam-biswas-8115a1171/" target='_blank'>
                    <img src={linkedinIcon}/>
                </a>
                <a href="https://github.com/BiswasSwagatam" target='_blank'>
                    <img src={githubIcon}/>
                </a>
            </span>
            <p>With a passion for coding useful applications to solve real world problems</p>
            <a href={Resume} download>
                <button className='hover'>Resume</button>
            </a>
        </div>
    </section>
  )
}

export default Hero;
