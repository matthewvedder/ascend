import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { hideModal } from '../actions'
import Modal from './common/modal/ModalWrapper'
import ReportForm from './ReportForm'

const CreateReportForm = ({ hideModal }) => (
  <Modal hideModal={hideModal} title="Create a Report" >
    <ReportForm />
  </Modal>
)

CreateReportForm.propTypes = {
  hideModal: PropTypes.func.isRequired
}

export default connect(null, { hideModal })(CreateReportForm)
