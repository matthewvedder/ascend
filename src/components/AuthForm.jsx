import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { hideModal, googleAuth } from '../actions'
import Modal from './common/modal/ModalWrapper'
import Button from './common/Button'

const AuthForm = props => (
  <Modal hideModal={props.hideModal} title="Sign In | Up!" >
    <Button onClick={props.googleAuth}>Sign In With Google</Button>
  </Modal>
)

AuthForm.propTypes = {
  hideModal: PropTypes.func.isRequired,
  googleAuth: PropTypes.func.isRequired
}

export default connect(null, { hideModal, googleAuth })(AuthForm)
