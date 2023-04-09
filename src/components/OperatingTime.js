import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';

function OperatingTime({timeData}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div>
         <Button variant="primary" onClick={handleShow}>
        Operating Hours
      </Button>

      <Modal show={show} onHide={handleClose} style={{backgroundColor:'tan'}} >
        <Modal.Header closeButton>
          <Modal.Title className='text-warning'>Operating Hours</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <ListGroup>
      <ListGroup.Item className='bg-warning'>Monday : {timeData.Monday}</ListGroup.Item>
      <ListGroup.Item className='bg-warning'>Tuesday : {timeData.Tuesday}</ListGroup.Item>
      <ListGroup.Item className='bg-warning'>Wednesday : {timeData.Wednesday}</ListGroup.Item>
      <ListGroup.Item className='bg-warning'>Thursday : {timeData.Thursday}</ListGroup.Item>
      <ListGroup.Item className='bg-warning'>Friday : {timeData.Friday}</ListGroup.Item>
      <ListGroup.Item className='bg-warning'>Saturday : {timeData.Saturday}</ListGroup.Item>
      <ListGroup.Item className='bg-warning'>Sunday : {timeData.Sunday}</ListGroup.Item>
    </ListGroup>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default OperatingTime