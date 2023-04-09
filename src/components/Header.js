import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <div>
        <Navbar bg="warning" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img 
              alt=""
              src="https://i.postimg.cc/MTS5848T/icons8-waiter-50.png"
              width="50"
              height="50"
              className="d-inline-block align-top"
            />{' '}
            <strong className='fs-2'>Restauro</strong>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header