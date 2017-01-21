import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import MyMap from './components/Map'
import { showCreateReport } from './actions'
import ModalConductor from './components/common/modal/ModalConductor'
import './App.css'

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
  modal: PropTypes.string,
  showCreateReport: PropTypes.func.isRequired
}

const mapStateToProps = state => (state.modal)

export default connect(mapStateToProps, { showCreateReport })(App)
