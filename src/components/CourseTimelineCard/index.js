import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = ({data}) => (
  <div className="card">
    <div className="card-header">
      <h2>{data.courseTitle}</h2>
      <p className="days">
        <AiFillClockCircle />
        {data.duration}
      </p>
    </div>
    <p className="description">{data.description}</p>
    <ul>
      {data.tagsList.map(eachItem => (
        <li>
          <p className="tag">{eachItem.name}</p>
        </li>
      ))}
    </ul>
  </div>                                                              
)                                                                
export default CourseTimelineCard
