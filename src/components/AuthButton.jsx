import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import Button from './common/Button'
import { signOut } from '../actions'

const buttonStyle = {
  position: 'absolute',
  zIndex: 1000,
  pointerEvents: 'auto'
}

const existingUser = (authButtonProps) => {
  if (authButtonProps.user) {
    return { text: 'Sign Out', onClick: authButtonProps.signOut }
  }
  return { text: 'Sign In | Up', onClick: authButtonProps.onClick }
}

const AuthButton = (props) => {
  const authButtonAttributes = existingUser(props)
  return (
    <Button
      className="leaflet-top leaflet-right"
      stylesFromProp={buttonStyle}
      onClick={authButtonAttributes.onClick}
    >
      { authButtonAttributes.text }
    </Button>
  )
}

const mapStateToProps = state => ({ user: state.auth.user })

export default connect(mapStateToProps, { signOut })(AuthButton)
