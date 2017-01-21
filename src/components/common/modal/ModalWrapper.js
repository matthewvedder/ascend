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
    top: '7%',
    left: '7%',
    right: '7%',
    bottom: '7%',
    border: '1px solid #ccc',
    background: '#fff',
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
    outline: 'none',
    padding: '20px'
  },
  close: {
    position: 'absolute',
    top: '7px',
    right: '12px',
    fontSize: '1.5em',
    color: 'gainsboro'
  }
}

const ModalWrapper = (props) => {
  const { title, children, hideModal } = props

  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) hideModal()
  }

  return (
    <div onClick={handleBackgroundClick} style={styles.overlay}>
      <div style={styles.content}>
        <h2>{title}</h2>
        <span style={styles.close} onClick={hideModal}>x</span>
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
  title: PropTypes.string,
  hideModal: PropTypes.func.isRequired,
}
export default ModalWrapper
