import Loader from 'react-loaders'
import './index.scss'
import project1 from '../../assets/images/Proj1.png'


const ProjectList = () => {
    return (
        <>
        <div className="Projects">
        <div className="shown">
            <img className="snippet" src={project1} alt="first_project"></img>
            <div className= "DescriptionsOfProject">
                <div className="NameOfProject">
                    MindfulMind App
                </div>
                <div className="Details">
                MindfulMind will allow users to have track and develop their mental health.They will be able to view mental health resources, choose among relaxing spotify playlist, read quotes, and input daily journal entries. Users will be able to make a call and make an appointment after clicking on phone number shown in help section. User can visit to profile activity to keep record.
                </div>
                <div className="skills">
                 <div className="topics">Skills and Technology</div>
                 <div className="usedSkill">

                 </div>
                </div>
            </div>
        </div>
        <div className="shown">
            <img className="snippet" src={project1} alt="first_project"></img>
            <div className= "DescriptionsOfProject">
                <div className="NameOfProject">
                    MindfulMind App
                </div>
                <div className="Details">
                MindfulMind will allow users to have track and develop their mental health.They will be able to view mental health resources, choose among relaxing spotify playlist, read quotes, and input daily journal entries. Users will be able to make a call and make an appointment after clicking on phone number shown in help section. User can visit to profile activity to keep record.
                </div>
                <div className="skills">
                 <div className="topics">Skills and Technology</div>
                 <div className="usedSkill">
                    
                 </div>
                </div>
            </div>
        </div>
        <div className="shown">
            <img className="snippet" src={project1} alt="first_project"></img>
            <div className= "DescriptionsOfProject">
                <div className="NameOfProject">
                    MindfulMind App
                </div>
                <div className="Details">
                MindfulMind will allow users to have track and develop their mental health.They will be able to view mental health resources, choose among relaxing spotify playlist, read quotes, and input daily journal entries. Users will be able to make a call and make an appointment after clicking on phone number shown in help section. User can visit to profile activity to keep record.
                </div>
                <div className="skills">
                 <div className="topics">Skills and Technology</div>
                 <div className="usedSkill">
                    
                 </div>
                </div>
            </div>
        </div>
        <div className="shown">
            <img className="snippet" src={project1} alt="first_project"></img>
            <div className= "DescriptionsOfProject">
                <div className="NameOfProject">
                    MindfulMind App
                </div>
                <div className="Details">
                MindfulMind will allow users to have track and develop their mental health.They will be able to view mental health resources, choose among relaxing spotify playlist, read quotes, and input daily journal entries. Users will be able to make a call and make an appointment after clicking on phone number shown in help section. User can visit to profile activity to keep record.
                </div>
                <div className="skills">
                 <div className="topics">Skills and Technology</div>
                 <div className="usedSkill">
                    
                 </div>
                </div>
            </div>
        </div>
        </div>
        <Loader type="pacman"></Loader>
        </>
    )
}
export default ProjectList