import Button from 'react-bootstrap/Button'
import  Modal  from 'react-bootstrap/Modal'
import React from 'react'

const WarningModal = ({showDelete,showDeleteModal,deleteBook}) => {
    return (
        <>
        <Modal centered show={showDelete} onHide={()=>showDeleteModal(false)} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Book</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are You Sure You Want to Delete??</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=>showDeleteModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={deleteBook}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
      </>

    )
}
export default WarningModal;