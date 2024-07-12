import React, { useContext, useEffect, useState } from 'react'
import { Container, Row} from "react-bootstrap"
import CardRepas from '../repas/CardRepas'

function ContainerRepasHome() {
  
  return (
   <Container className='d-flex justify-content-center'>
    <Row >
         <CardRepas/>
        
    </Row>
    </Container> 
  )
}

export default ContainerRepasHome