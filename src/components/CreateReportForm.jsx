import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { hideModal, createReport } from '../actions'
import Modal from './common/modal/ModalWrapper'
import ReportForm from './ReportForm'
import ImageUploader from './ImageUploader'

const styles = {
  containerStyle: {
    height: '100%',
    width: '100%',
    display: 'flex'
  }
}

const CreateReportForm = props => (
  <Modal hideModal={props.hideModal} title="Create a Report" >
    <div style={styles.containerStyle}>
      <ReportForm onSubmit={props.createReport} />
    </div>
  </Modal>
)

CreateReportForm.propTypes = {
  hideModal: PropTypes.func.isRequired,
  createReport: PropTypes.func.isRequired
}

export default connect(null, { hideModal, createReport })(CreateReportForm)
