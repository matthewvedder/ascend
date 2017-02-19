import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { hideModal, createReport } from '../actions'
import Modal from './common/modal/ModalWrapper'
import ReportForm from './ReportForm'

const CreateReportForm = props => (
  <Modal hideModal={props.hideModal} title="Create a Report" >
    <ReportForm onSubmit={props.createReport} />
  </Modal>
)

CreateReportForm.propTypes = {
  hideModal: PropTypes.func.isRequired
}

export default connect(null, { hideModal, createReport })(CreateReportForm)
