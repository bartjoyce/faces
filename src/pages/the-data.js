import React from 'react'
import PeopleFilter from '../controllers/PeopleFilter'
import DayPlaceListing from '../controllers/DayPlaceListing'

export default class PageTheData extends React.Component {
  render() {
    return (
      <div style={{ maxWidth: 480, marginLeft: 'auto', marginRight: 'auto' }}>
        <PeopleFilter/>
        <DayPlaceListing />
      </div>
    )
  }
}
