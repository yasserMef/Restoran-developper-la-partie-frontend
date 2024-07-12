import React from 'react'
import ContainerRepas from '../component/repas/ContainerRepas'

function AllRepasPage({valSearch,getValInp}) {
  return (
    <div>
        <ContainerRepas valSearch={valSearch} />
    </div>
  )
}

export default AllRepasPage