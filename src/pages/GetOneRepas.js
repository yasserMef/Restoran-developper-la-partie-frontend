import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Row,Col} from 'react-bootstrap'
import { useParams } from 'react-router-dom'

function GetOneRepas() {
    const [repas , setRepas]=useState({})
    const {id} = useParams()
   const getOneRepas = async()=>{
    const getOne = await axios.get(`http://localhost:4000/repas/${id}`)
     setRepas(getOne.data)
   }
   useEffect(()=>{
      getOneRepas()
    },[])
  return (
    <div>
        <Row className='m-5 '>
            <Col>
            <img src={repas.image} alt='image' />
            </Col>
            <Col>
            <h1>{repas.title}</h1>
            <p> {repas.description}</p>
            </Col>
        </Row>

    </div>
  )
}

export default GetOneRepas