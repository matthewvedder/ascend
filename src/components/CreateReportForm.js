import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { hideModal } from '../actions'
import Modal from './common/modal/ModalWrapper'

const CreateReportForm = ({ clickedLatlng, hideModal }) => {
  return (
    <Modal hideModal={hideModal} title="Create a Report" >
      lat: {clickedLatlng.lat}
    </Modal>
  )
}

CreateReportForm.propTypes = {
  hideModal: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  const { clickedLatlng } = state.modal

  return { lat: clickedLatlng.lat, lng: clickedLatlng.lng }
}

export default connect(mapStateToProps, { hideModal })(CreateReportForm)
