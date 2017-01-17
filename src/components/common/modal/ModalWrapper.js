import React, { Component, PropTypes } from 'react'

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    zIndex: 9999
  },
  content: {
    position: 'absolute',
    top: '10%',
    left: '10%',
    right: '10%',
    bottom: '10%',
    border: '1px solid #ccc',
    background: '#fff',
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
    outline: 'none',
    padding: '20px'
  }
}

const ModalWrapper = (props) => {
  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) props.hideModal()
  }

  const { title, children } = props

  return (
    <div onClick={handleBackgroundClick} style={styles.overlay}>
      <div style={styles.content}>
        <h2>{title}</h2>
        { children }
      </div>
    </div>
  )
}

ModalWrapper.defaultProps = {
  visible: false,
  title: ''
}

ModalWrapper.propTypes = {
  visible: PropTypes.bool,
  title: PropTypes.string
}
export default ModalWrapper
