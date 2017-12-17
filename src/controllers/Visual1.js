import { connect } from 'react-redux'
import Visual1 from '../components/Visual1'

function mapStateToProps(state) {
  return state.peopleFilter
}

export default connect(mapStateToProps)(Visual1)
