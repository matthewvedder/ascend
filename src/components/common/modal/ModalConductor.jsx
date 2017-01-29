import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import CreateReportForm from '../../CreateReportForm'

const ModalConductor = (props) => {
  switch (props.modal) {
    case 'CREATE_REPORT_FORM':
      return <CreateReportForm {...props} />
    default:
      return null
  }
}

ModalConductor.defaultProps = {
  modal: null
}

ModalConductor.propTypes = {
  modal: PropTypes.string
}

const mapStateToProps = (state) => {
  return state.modal
}

export default connect(mapStateToProps)(ModalConductor)
