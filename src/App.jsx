import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import MyMap from './components/Map'
import ModalConductor from './components/common/modal/ModalConductor'
import './App.css'
import { helloSaga } from './sagas'

class App extends Component {
  render() {
    return (
      <div className="App">
        <MyMap />
        <ModalConductor currentModal={this.props.modal} />
      </div>
    )
  }
}

App.defaultProps = {
  modal: null
}

App.propTypes = {
  modal: PropTypes.string
}

const mapStateToProps = state => (state.modal)

export default connect(mapStateToProps)(App)
