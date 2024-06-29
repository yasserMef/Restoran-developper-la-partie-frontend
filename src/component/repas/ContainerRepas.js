import { Container , Row } from 'react-bootstrap'
import CardRepas from './CardRepas'
import {repasContext} from "../../repasContext/RepasProvider"
import { useContext, useEffect, useState } from 'react'

 const ContainerRepas = (props) =>{
 const {valSearch} = props
  const {getData} = useContext(repasContext)
  const [repas, setRepas] = useState([])
  

  useEffect(()=>{
    getData(valSearch).then((res)=>{
      setRepas(res)
      })
    },[])
  
  useEffect(()=>{
    getData().then(rslt=>{
      if(valSearch == ""){
        setRepas(rslt)
     }else{
      setRepas(rslt.filter((repas)=>repas.title.toLowerCase().includes(valSearch.toLowerCase())))
      
     }
    })
    
  },[valSearch])

  
  return (
    <Container className='d-flex justify-content-center mt-4'>
    <Row >
      {
        repas ?  repas.map( (repas, index) => 
          <CardRepas key={index} title={repas.title} about={repas.image} id={repas.id}/>) : "pas de data"
        }
        
    </Row>
    </Container>
  )
}

export default ContainerRepas