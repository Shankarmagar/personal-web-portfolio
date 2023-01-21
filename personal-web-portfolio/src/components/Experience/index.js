import './index.scss'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'
import Chase from '../../assets/images/chase.png'
import Lyft from '../../assets/images/Lyft.png'
import CodePath from '../../assets/images/codePath.png'
import BigMart from '../../assets/images/BigMart.png'


const Experience = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
    return () => clearTimeout(timer)
  }, [])
    return (
        <>
        <div className="exper">
        <AnimatedLetters
              letterClass={letterClass}
              strArray={['👨‍💻', 'E', 'x', 'p', 'e', 'r', 'i', 'e', 'n', 'c','e','👨‍💻']}
              idx={15}
            />
            </div>
            <div className="experienceContainer">
            <div className="experience_list">
              <div className="head_part">
              <img src={Chase} alt="chase bank"></img>
              <div className="job_title">Software Engineering Virtual Experience</div>
              </div>
              <div className="Next">
                <div className="Job_Company">JP Moragan Chase & Co.</div>
                <div className="duration">Nov 2022 - Dec 2022</div>
              </div>
              <div className="Description"> Learned python, node.js, Typescript, React. Displayed the virtual data of trade in graph after accessing the server and shown continuously changes in graph.
               </div>
              </div>
              <div className="experience_list">
              <div className="head_part">
              <img src={Lyft} alt="chase bank"></img>
              <div className="job_title">Mobile Engineering Virtual Experience</div>
              </div>
              <div className="Next">
                <div className="Job_Company">Lyft</div>
                <div className="duration">Nov 2022 - Dec 2022</div>
              </div>
              <div className="Description">Build a RideSharer iOS app where user can see ride history with the driver name along with cost price for the ride.
- work with the Mapkit framework 
- Display the map and showed the user location in map along with permission to access.
               </div>
              </div>
              <div className="experience_list">
              <div className="head_part">
              <img src={CodePath} alt="chase bank"></img>
              <div className="job_title">iOS and Android App development Student</div>
              </div>
              <div className="Next">
                <div className="Job_Company">CodePath.org</div>
                <div className="duration">Sept 2022 - Nov 2022</div>
              </div>
              <div className="Description">Collaborated with two team members to develop a full-stack android app called mindfulmind and iOS app anime and Manga Searcher. This two app was one of 12 selected as finalists out of 70 teams to pitch our app idea to a panel of technology professionals in Codepath's National Demo Day.
               </div>
              </div>
              <div className="experience_list">
              <div className="head_part">
              <img src={BigMart} alt="chase bank"></img>
              <div className="job_title">Trainee Supervisor</div>
              </div>
              <div className="Next">
                <div className="Job_Company">Big Mart</div>
                <div className="duration">Nov 2017 - Dec 2019</div>
              </div>
              <div className="Description">Troubleshoot and resolve complex technology problems as the “go-to” person for IT issues, Compiled weekly and monthly sales reports which shows profit and loss and expenses record, Responded to emails and merchandising products, Maintained employee attendance in Oracle, Managed records of product receiving and outgoing in the store using Genesys
            software, Utilization of hardware and software for inventory.
               </div>
              </div>
            </div>
            <Loader type="pacman"></Loader>
        </>
    )
}
export default Experience