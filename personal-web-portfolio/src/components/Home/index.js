import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'
import './index.scss'
import StartApostrophe from '../../assets/images/StartApostrophe.png'
import EndApostrophe from '../../assets/images/EndingApostrophe.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['S', 'h', 'a', 'n', 'k', 'a', 'r']
  const middleName = ['A','l','e',' ','M','a','g','a','r']
  const jobArray = [
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

  useEffect(() => {
   const timer = setTimeout(() => {
       setLetterClass('text-animate-hover')
    }, 4000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
          <img className="Starting"
              src={StartApostrophe}
              alt="Apostrophe"
            />
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <space> </space>
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={middleName}
              idx={22}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={30}
            />
             <img 
              src={EndApostrophe}
              alt="Apostrophe"
            />
          </h1>
          <h2>Front End Developer / iOS Developer / Adroid Developer</h2>
          <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/shankar-magar-725b671b7/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Shankarmagar"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/ShankarAleMagar"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faTwitter}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/shankaralemagar2/" rel="noreferrer" target="_blank">
            <FontAwesomeIcon
              icon={faInstagram}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
      </ul>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <Logo />
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Home
