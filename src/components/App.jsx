import React, { Component, PropTypes } from 'react'
import firebase from 'firebase'
import { connect } from 'react-redux'
import { showAuthForm } from '../actions'
import MyMap from './Map'
import ModalConductor from './common/modal/ModalConductor'
import Button from './common/Button'
import '../App.css'

const buttonStyle = {
  position: 'absolute',
  zIndex: 1000,
  pointerEvents: 'auto'
}

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyAE1QvZHy4Se9FD4cEb1UCVIhkZtAcbmVY',
      authDomain: 'adventuremind-bf53e.firebaseapp.com',
      databaseURL: 'https://adventuremind-bf53e.firebaseio.com',
      storageBucket: 'adventuremind-bf53e.appspot.com',
      messagingSenderId: '1029961770829'
    }

    firebase.initializeApp(config)
  }

  render() {
    return (
      <div className="App">
        <Button
          className="leaflet-top leaflet-right"
          stylesFromProp={buttonStyle}
          onClick={this.props.showAuthForm}
        >
          SIGN IN
        </Button>
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

export default connect(mapStateToProps, { showAuthForm })(App)
