import { React, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import Review from './Review';
import './Restcard.css'
import OperatingTime from './OperatingTime';

function Restview() {
  var [Allrestaurants,setRestaurants]=useState([])

  const fetchRest=async()=>{
    const result=await fetch('/restaurants.json')
    result.json().then(data=>{
      setRestaurants(data.restaurants)
    })
  }
  const params=useParams()
  // console.log(Allrestaurants);

  const restuarant=Allrestaurants.find(item=>item.id==params.id)
  console.log(restuarant);

  useEffect(()=>{
    fetchRest()
  },[])
  return (
    <>
        {
          restuarant?
          (<Row style={{backgroundColor: 'tan'}}>
          <Col  lg={6} md={6} className='pt-5 pb-5 ms-3 text-center'>
            <img className='rounded border-black' style={{height:'500px', border:'black 2px double',boxShadow:' 0 4px 8px 0 black, 0 6px 25px 0 grey' }} src={restuarant.photograph}></img>
          
          </Col>
          <Col   className='m-3 p-4 '>
          <ListGroup variant='flush' style={{border:'2px black solid', width:'500px',boxShadow:' 0 4px 8px 0 black, 0 6px 25px 0 grey' }}>
            <ListGroup.Item><h1  className='text-warning text-center'>{restuarant.name}</h1></ListGroup.Item>
            <ListGroup.Item className='bg-warning'><p><strong>Neighborhood</strong>  <strong className='fs-5 color-white text-white '> : {restuarant.neighborhood}</strong></p></ListGroup.Item>
            <ListGroup.Item className='bg-warning'><p><strong>Cuisine</strong>  <strong className='fs-5 color-white text-white '> : {restuarant.cuisine_type}</strong></p></ListGroup.Item>
            <ListGroup.Item className='bg-warning'><p><strong>Address</strong>  <strong className='fs-5 color-white text-white '> : {restuarant.address}</strong></p></ListGroup.Item>
            <ListGroup.Item className='bg-warning' style={{height:'250px'}}>
              <div className='mt-4'> <OperatingTime timeData={restuarant.operating_hours}/></div>
              <div className='mt-4'><Review reviewData={restuarant.reviews}/></div>
            </ListGroup.Item>

          </ListGroup>
          </Col>
        </Row>):""
        }
    </>
  )
}

export default Restview