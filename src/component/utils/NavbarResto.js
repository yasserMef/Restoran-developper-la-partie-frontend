import React, { useContext, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {repasContext} from "../../repasContext/RepasProvider"

function NavbarResto({getValInp}) {
  
  const changeKeyword = async(e)=>{
     getValInp(e.target.value)
}
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
       <Container >
        <Navbar.Brand href="#">Restoron</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/addRepas">Ajouter Repas</Nav.Link>
            <Nav.Link href="/About">About</Nav.Link>
            
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={changeKeyword}
            />
            </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarResto