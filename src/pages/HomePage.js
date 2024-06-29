import React from 'react'
import ContainerRepasHome from '../component/home/ContainerRepasHome'
import ContainerCategorieHome from '../component/home/ContainerCategorieHome'
import TitleHome from '../component/home/TitleHome'

function HomePage() {
  return (
    <div>
      <TitleHome  title="Categories"/>
      <ContainerCategorieHome />
      <TitleHome pathPage="/allRepas" title="Repas" plus="Plus"/>
      <ContainerRepasHome />
    </div>
  )
}

export default HomePage