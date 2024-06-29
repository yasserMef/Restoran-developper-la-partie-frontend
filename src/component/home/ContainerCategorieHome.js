import React, { useEffect ,useState } from 'react'
import {Col, Container, Row} from "react-bootstrap"
import CardContainer from './CardContainer'
import axios from 'axios'


const ContainerCategorieHome =()=> {
  const [catData, setCatData] = useState([])
  
  const getGategories = async() =>{
  const getCat= await axios.get('http://localhost:4000/categories')
  setCatData(getCat.data)
  }
  useEffect(()=>{
      getGategories()
  },[])
  return (
    <Container className='d-flex justify-content-center'>
    <Row>
     {
        catData ? catData.map( (cat, index) => {
       return  ( <Col className='mt-3'>
        <CardContainer  title={cat.title} about={cat.image}/>
        </Col>)
        }) : "pas de data"

      }
        
    </Row>
    </Container> 
  )
}

export default ContainerCategorieHome