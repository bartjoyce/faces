import React from 'react'
import { Link } from 'react-router-dom'
import PeopleFilter from '../controllers/PeopleFilter'
import Visual1 from '../controllers/Visual1'

export default class PageIndex extends React.Component {
  render() {
    return (
      <div style={{ maxWidth: 1200, marginLeft: 'auto', marginRight: 'auto' }}>
        <Link to="/the-data">The source data</Link><br/>
        <PeopleFilter />
        <Visual1 />
      </div>
    )
  }
}
