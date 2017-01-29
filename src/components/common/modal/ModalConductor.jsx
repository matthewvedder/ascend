import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import CreateReportForm from '../../CreateReportForm'
import AuthForm from '../../AuthForm'
import { SHOW_CREATE_REPORT, SHOW_AUTH_FORM } from '../../../actions/types'

const ModalConductor = (props) => {
  switch (props.modal) {
    case SHOW_CREATE_REPORT:
      return <CreateReportForm {...props} />
    case SHOW_AUTH_FORM:
      return <AuthForm {...props} />
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

const mapStateToProps = state => (state.modal)

export default connect(mapStateToProps)(ModalConductor)
