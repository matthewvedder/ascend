import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { hideModal, googleAuth } from '../actions'
import Modal from './common/modal/ModalWrapper'
import Button from './common/Button'

const AuthForm = (props) => {
  const handleAuth = () => {
    props.googleAuth()
    props.hideModal()
  }
  return (
    <Modal hideModal={props.hideModal} title="Sign In | Up!" >
      <Button onClick={handleAuth}>Sign In With Google</Button>
    </Modal>
  )
}

AuthForm.propTypes = {
  hideModal: PropTypes.func.isRequired,
  googleAuth: PropTypes.func.isRequired
}

export default connect(null, { hideModal, googleAuth })(AuthForm)
