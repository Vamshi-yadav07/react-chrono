import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = ({data}) => (
  <div className="card">
    <img src={data.imageUrl} alt="project" className="card-image" />
    <div className="card-body">
      <div className="card-header">
        <h2>{data.projectTitle}</h2>
        <p className="time">
          <AiFillCalendar />
          {data.duration}
        </p>
      </div>
      <p className="description">{data.description}</p>
      <a href={data.projectUrl} className="visit-link">
        Visit
      </a>
    </div>
  </div>
)
export default ProjectTimelineCard
