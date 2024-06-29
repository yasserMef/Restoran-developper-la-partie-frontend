import React, { useContext, useEffect, useState } from 'react'
import { Container, Row} from "react-bootstrap"
import CardRepas from '../repas/CardRepas'
import {repasContext} from "../../repasContext/RepasProvider"
function ContainerRepasHome() {
  const [repas, setRepas] = useState([])
  const {getData} = useContext(repasContext)
   useEffect(()=>{
     getData().then(rstl=> setRepas(rstl.reverse().splice(0,4)))
     },[])
  return (
   <Container className='d-flex justify-content-center'>
    <Row >
         {
          repas ? repas.map((repa, index) => {return <CardRepas key={index}  about={repa.image} title={repa.title} id={repa.id}/>}) : null
        }
    </Row>
    </Container> 
  )
}

export default ContainerRepasHome