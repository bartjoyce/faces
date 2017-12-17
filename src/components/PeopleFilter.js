import React from 'react'

export default class PeopleFilter extends React.PureComponent {
  constructor(props) {
    super(props)

    this.handleChange = () => this.props.onChange(this.refs.input.value)
  }
  render() {
    return (
      <span>
        <input type="text" ref="input"
               value={this.props.searchTerm}
               placeholder="filter"
               onChange={this.handleChange} />
        <span style={{ fontWeight: 300, color: '#999' }}>
          {this.props.searchTerm && (' ' + this.props.numberOfDayPlaces + ' found')}
        </span>
      </span>
    )
  }
}
