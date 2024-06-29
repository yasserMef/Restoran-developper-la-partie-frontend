import React from 'react'
import ContainerRepas from '../component/repas/ContainerRepas'

function AllRepasPage({valSearch,getValInp}) {
  return (
    <div>
        <ContainerRepas valSearch={valSearch} getValInp={getValInp} />
    </div>
  )
}

export default AllRepasPage