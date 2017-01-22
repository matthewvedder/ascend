import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import Input from './common/Input'

const styles = {
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flexStart'
  },
  descriptionStyle: {
    flex: 2
  }
}

const ReportForm = ({ clickedLatlng }) => (
  <div style={styles.container}>
    <Input type="text" id="title" label="Title" placeholder="Title" />
    <Input type="text" id="lat" label="Latitude" defaultValue={clickedLatlng.lat} />
    <Input type="text" id="lng" label="Longitude" defaultValue={clickedLatlng.lng} />
    <Input type="text" id="description" label="Report Description" />
  </div>
)

ReportForm.defaultProps = {
  clickedLatlng: {}
}

ReportForm.propTypes = {
  clickedLatlng: PropTypes.object
}

const mapStateToProps = (state) => {
  const { clickedLatlng } = state.modal

  return { clickedLatlng }
}

export default connect(mapStateToProps)(ReportForm)
