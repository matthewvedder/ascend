import React, { Component } from 'react'
import { connect } from 'react-redux'
import MyMap from './components/Map'
import { showCreateReport } from './actions'
import ModalConductor from './components/common/modal/ModalConductor'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.onMapClick = this.onMapClick.bind(this)
  }

  onMapClick() {
    this.props.showCreateReport()
  }
  render() {
    return (
      <div className="App">
        <MyMap onMapClick={this.onMapClick} />
        <ModalConductor currentModal={this.props.modal} />
      </div>
    )
  }
}

const mapStateToProps = state => (state.modal)

export default connect(mapStateToProps, { showCreateReport })(App)
