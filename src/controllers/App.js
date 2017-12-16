import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reduxThunk from 'redux-thunk'
import rootReducer from '../reducers/root'

import AppComponent from '../components/App'

export default class App extends React.Component {
  constructor(props) {
    super(props)

    const store = createStore(
      rootReducer,
      null,
      applyMiddleware(reduxThunk)
    )

    window.store = store
    this.state = { store }
  }

  render() {
    return (
      <Provider store={ this.state.store }>
        <AppComponent />
      </Provider>
    )
  }
}
