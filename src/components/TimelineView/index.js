import {Chrono} from 'react-chrono'
import ProjectTimelineCard from '../ProjectTimelineCard'
import CourseTimelineCard from '../CourseTimelineCard'
import './index.css'

const TimelineView = ({timelineItemsList}) => {
  const renderTimeLineCards = data => {
    if (data.categoryId === 'COURSE') {
      return <CourseTimelineCard key={data.id} data={data} />
    }
    return <ProjectTimelineCard key={data.id} data={data} />
  }

  return (
    <div className="main-container">
      <h1>
        MY JOURNEY OF <br />
        CCBP 4.0
      </h1>
      <Chrono mode="VERTICAL_ALTERNATING" items={timelineItemsList}>
        {timelineItemsList.map(eachItem => renderTimeLineCards(eachItem))}
      </Chrono>
    </div>
  )
}

export default TimelineView
