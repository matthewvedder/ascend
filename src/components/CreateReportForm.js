import React from 'react'
import { connect } from 'react-redux'
import { hideModal } from '../actions'
import Modal from './common/modal/ModalWrapper'

const CreateReportForm = (props) => {
  const hideModal = () => {
    props.hideModal()
  }

  return (
    <Modal hideModal={hideModal}>
      Hi
    </Modal>
  )
}

export default connect(null, { hideModal })(CreateReportForm)
