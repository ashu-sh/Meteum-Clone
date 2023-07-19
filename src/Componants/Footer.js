import React from 'react'
import { Nav } from 'react-bootstrap'
const Footer = () => {
  return (
    <>
    <Nav className="justify-content-end" activeKey="/home">
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled style={{color:"#fff"}}>
             Copyright © 2023 Designed & Developed by Ashutosh
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  )
}

export default Footer




