import React from 'react'
import PeopleFilter from '../controllers/PeopleFilter'
import DayPlaceListing from '../controllers/DayPlaceListing'

export default class App extends React.Component {
  render() {
    return (
      <div style={{ maxWidth: 480, marginLeft: 'auto', marginRight: 'auto' }}>
        <PeopleFilter/>
        <DayPlaceListing />
      </div>
    )
  }
}
