import React, { Component, PropTypes } from 'react'
import firebase from 'firebase'
import { connect } from 'react-redux'
import { showAuthForm, setCurrentUser } from '../actions'
import MyMap from './Map'
import ModalConductor from './common/modal/ModalConductor'
import AuthButton from './AuthButton'
import '../App.css'

class App extends Component {
  componentWillMount() {
    // Initialize Firebase
    const config = {
      apiKey: 'AIzaSyCz3-OZrCdr7VZ-6kNXEpVyhkXLuc-tnMU',
      authDomain: 'ascend-3bfa6.firebaseapp.com',
      databaseURL: 'https://ascend-3bfa6.firebaseio.com',
      storageBucket: 'ascend-3bfa6.appspot.com',
      messagingSenderId: '1094367548774'
    }

    firebase.initializeApp(config)
    firebase.auth().onAuthStateChanged((user) => { if (user) this.props.setCurrentUser(user) })
  }

  render() {
    return (
      <div className="App">
        <AuthButton
          onClick={this.props.showAuthForm}
        >
          Sign In | Up
        </AuthButton>
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
  modal: PropTypes.any,
  showAuthForm: PropTypes.func.isRequired,
  setCurrentUser: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  const { modal, auth } = state

  return { modal, auth }
}

export default connect(mapStateToProps, { showAuthForm, setCurrentUser })(App)
