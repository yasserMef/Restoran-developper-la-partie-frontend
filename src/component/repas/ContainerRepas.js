import { Container , NavItem, Row } from 'react-bootstrap'
import CardRepas from './CardRepas'
import { useEffect, useState } from 'react'
import { useSelector , useDispatch } from 'react-redux'
import {getAllrepas} from "../../redux/slice/repasSlice"

 const ContainerRepas = ({valSearch}) =>{
  const dispatch = useDispatch()
  const repas = useSelector((state) => state.repas.Allrepas)
  const isLoding = useSelector((state) => state.repas.isLoding)
  const error = useSelector((state) => state.repas.error)

  const[allRepas ,setAllrepas]=useState([])
  
  useEffect(()=>{
    dispatch(getAllrepas()) 
    setAllrepas(repas)
 },[])
   useEffect(()=>{
    if(valSearch){
      setAllrepas(repas.filter(item=>item.title.toLowerCase().includes(valSearch.toLowerCase())))
     }else{
      setAllrepas(repas)
     }
     console.log(allRepas)
   },[valSearch])

 if(error!==null){
    return <h1>error</h1>
}
  
  return (
    <Container className='d-flex justify-content-center mt-4'>
    <Row >

      {
        isLoding?"...Loding" : (allRepas ?allRepas.map((repa, index) => {return <CardRepas key={index}  about={repa.image} title={repa.title} id={repa.id}/>}):null )
      }
        
        
    </Row>
    </Container>
  )
}

export default ContainerRepas