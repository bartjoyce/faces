import { setPeopleFilter } from '../actions'
import { connect } from 'react-redux'
import PeopleFilter from '../components/PeopleFilter'

function mapStateToProps(state) {
  return {
    searchTerm: state.peopleFilter.searchTerm,
    numberOfDayPlaces: state.peopleFilter.filteredDayPlaces.length
  }
}
function mapDispatchToProps(dispatch) {
  return {
    onChange: value => dispatch(setPeopleFilter(value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PeopleFilter)
