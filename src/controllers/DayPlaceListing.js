import { connect } from 'react-redux'
import DayPlaceListing from '../components/DayPlaceListing'

function mapStateToProps(state) {
  return state.peopleFilter
}

export default connect(mapStateToProps)(DayPlaceListing)
