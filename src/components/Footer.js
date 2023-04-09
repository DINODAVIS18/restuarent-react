import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
  return (
    <div>
        <Row>
            <Col className='text-center bg-warning'>
            <p className='mt-2 p-2 text-white'>All rights are reserved to <strong>Restauro</strong>
            & reg:2023
            </p>
            </Col>
        </Row>

    </div>
  )
}

export default Footer