import React from 'react'
import { Link } from 'react-router-dom'
import PeopleFilter from '../controllers/PeopleFilter'

export default class PageIndex extends React.Component {
  render() {
    return (
      <div style={{ maxWidth: 480, marginLeft: 'auto', marginRight: 'auto' }}>
        <Link to="/the-data">The data</Link><br/>
      </div>
    )
  }
}
