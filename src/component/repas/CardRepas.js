import { useDispatch } from 'react-redux';
import React from 'react'
import {Card , Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {deleterepas} from "../../redux/slice/repasSlice"



function CardRepas({about ,title,description , id}) {
  const dispatch = useDispatch()
  const deleteRepas = async()=>{
  await dispatch(deleterepas(id))
  }
  return (
    <Col className='mt-3'>
    <Card style={{ width: '18rem' }}>
      <div className='d-flex justify-content-between' >
        <Link style={{textDecoration:"none" , color:"black"}} to={`/update_repas/${id}`}>
        <p className='m-2' >Modifier</p>
        </Link>
        <p className='m-2' style={{cursor:"pointer"}} onClick={deleteRepas}>Suprimer</p>
      </div>
      <Link to={`/repas/${id}`}>
      <Card.Img variant="top" src={about} style={{height:"250px"}}/>
      </Link>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        </Card.Body>
    </Card>
    </Col>
  )
}

export default CardRepas