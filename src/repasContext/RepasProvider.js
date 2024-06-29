import axios from 'axios'
import React ,{createContext} from 'react'

const repasContext = createContext()

 

function RepasProvider({children}) {
  const getData = async(keyword)=>{
   const getRepas = await axios.get(`http://localhost:4000/repas/?keyword=${keyword}`)
   return getRepas.data
  }
  return (
    <repasContext.Provider value={{getData}}>
      {children}
    </repasContext.Provider>
  )
}

export  {RepasProvider , repasContext}