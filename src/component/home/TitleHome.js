import React from 'react'
import { Container,Button} from 'react-bootstrap'
import {Link} from "react-router-dom"

const TitleHome=({pathPage , title , plus})=> {
  return (
    <Container className='mt-5 d-flex justify-content-between'>
        <h4>{title}</h4>
        {
            plus?<Link className='pathStyle' to={pathPage}>
            <Button variant="outline-dark">{plus}</Button>
            </Link> :""
        }
        
        </Container>
  )
}

export default TitleHome