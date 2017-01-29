import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { hideModal } from '../actions'
import Modal from './common/modal/ModalWrapper'

const AuthForm = props => (
  <Modal hideModal={props.hideModal} title="Create a Report" >
    Hiee!
  </Modal>
)

AuthForm.propTypes = {
  hideModal: PropTypes.func.isRequired
}

export default connect(null, { hideModal })(AuthForm)
