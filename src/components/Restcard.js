import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './Restcard.css'

function Restcard({ restdata }) {
  return (
    <>
      <Link to={`/view-restuarant/${restdata.id}`} style={{textDecoration:'none',color:'black'}}>
        <Card id='cal' style={{ width: '20rem', border:'black 2px double',boxShadow:' 0 4px 8px 0 black, 0 6px 25px 0 grey' }}>
          <Card.Img variant="top" src={restdata.photograph} />
          <Card.Body>
            <Card.Title><strong className='text-primary'>{restdata.name}</strong></Card.Title>
            <Card.Text>
              <p className='mt-2'>
                <strong>Cuisine Type: </strong> {restdata.cuisine_type}
              </p>
              <p>
                <strong>Neighbourhood: </strong> {restdata.neighborhood}
              </p>
            </Card.Text>

          </Card.Body>
        </Card>
      </Link>
    </>
  )
}

export default Restcard