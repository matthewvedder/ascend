import React, { Component, PropTypes } from 'react'
import Dropzone from 'react-dropzone'
import { connect } from 'react-redux'
import { inputUpdate } from '../actions'

const styles = {
  borderColor: '#33334d',
  borderStyle: 'dashed',
  padding: '1em',
  flexGrow: 1,
  height: '15em'
}

class ImageUploader extends Component {
  constructor(props) {
    super(props)
    this.onDrop = this.onDrop.bind(this)
  }
  onDrop(image) {
    console.log(image)
    this.props.inputUpdate('image', image)
  }

  render() {
    return (
      <Dropzone style={styles} onDrop={this.onDrop}>
        <div>Upload a photo!</div>
      </Dropzone>
    )
  }
}

ImageUploader.propTypes = {
  inputUpdate: PropTypes.func.isRequired
}

export default connect(null, { inputUpdate })(ImageUploader)
