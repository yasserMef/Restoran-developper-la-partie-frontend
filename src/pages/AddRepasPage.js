import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import axios from "axios"
import { useNavigate } from 'react-router-dom'

const AddRepasPage=()=> {
    //dod6pntjs
    //om05j9cc
    //https://api.cloudinary.com/v1_v/
    const navigate = useNavigate()
    const [urlImage , setUrlImage]=useState(null)
    const [title , setTitle]=useState("")
    const [description , setDescription]=useState("")
    const [categorie , setCategorie]=useState("")
    const [loading , setLoading]= useState(false)
    
    
    const changeImage = (e)=>{
        setUrlImage(e.target.files[0])
    }
    const changeTitle = (e)=>{
        setTitle(e.target.value)
    }
    const changeDescription = (e)=>{
        setDescription(e.target.value)
    }
    const changeCategorie = (e)=>{
        setCategorie(e.target.value)
    }
    
    const uploadImage = async(e)=>{
        e.preventDefault()
        try{
          const form = new FormData()
            form.append("file",urlImage)
            form.append("upload_preset" , "om05j9cc")
        const img=  await axios.post("https://api.cloudinary.com/v1_1/dod6pntjs/upload",form)
        console.log(img)
        await axios.post("http://localhost:4000/repas",{
            title,
            description,
            categorie,
            image:img.data.secure_url
        })
        setLoading(true)
        }catch(err){
            console.log(err.message)
        }
      }
      useEffect(()=>{
          if(loading == true){
              setTitle("")
              setDescription("")
              setCategorie("")
              setUrlImage(null)
              navigate("/allRepas")
              setLoading(false)
          }
      },[loading])
  return (
    <div className='d-flex align-items-center ' style={{height:"675px"}}>
    <Container className='w-50 '>
    <div className='w-75'>
    <h1 className='text-center'>Ajouter un repas</h1>
    </div>
    <div className="mb-3">
    <label htmlFor="clientName" className="form-label">
      Titre
    </label>
    <input
      type="text"
      className="form-control w-75"
      id="titre"
      placeholder="Titre"
      onChange={changeTitle}
    />
  </div>
  <div className="mb-3">
    <label htmlFor="clientAdress" className="form-label">
    Description
    </label>
    <textarea
      type="text"
      className="form-control w-75"
      id="description"
      placeholder="Description"
      onChange={changeDescription}
    />
  </div>
  <div className="mb-3">
    <label htmlFor="clientPhone" className="form-label">
    image
    </label>
    <input
      type="file"
      min="0"
      className="form-control w-75"
      id="image"
      placeholder="image"
      onChange={changeImage}
    />
  </div>
  <div className="mb-3">
    <div className="mb-3">
      <label htmlFor="clientEmail" className="form-label">
      Categorie
      </label>
      <select className="form-select w-75" id="categorie" onChange={changeCategorie}>
      <option disabled selected>Categories</option>
        <option value="marocain">Marocain</option>
        <option value="francias">Francias</option>
        <option value="asiatique">Asiatique</option>
        <option value="espagne">Espagne</option>
        </select>
      
    </div>
  </div>
  <div className='d-flex justify-content-center w-75'>
        <button
              type="submit"
              className="btn btn-primary"
              id="ajouterRepas"
              onClick={uploadImage}
            >
              Ajouter Repas
            </button>
    </div>
    
  </Container>
  </div>
  )
}

export default AddRepasPage