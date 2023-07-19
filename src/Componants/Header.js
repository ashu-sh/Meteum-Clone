import React from 'react'
import { Nav } from 'react-bootstrap'
import {GrFacebook} from "react-icons/gr"
import {BsTwitter,BsGithub,BsInstagram} from "react-icons/bs"
import Footer from './Footer'
import Content from './Content'
import News from '../NewSection/News'

function Header() {

  return (

    <>
    <div className='Background'>
      <Nav 
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}>
      <Nav.Item className='nav'>
      <li class="nav-item"><a href="A" class="nav-link"><BsInstagram/></a></li>
      </Nav.Item>
      <Nav.Item>
      <li class="nav-item"><a href="B" class="nav-link"><BsTwitter/></a></li>
      </Nav.Item>
      <Nav.Item>
      <li class="nav-item"><a href="C" class="nav-link pl-0"><GrFacebook/></a></li>
      </Nav.Item>
      <Nav.Item>
      <li class="nav-item"><a href="D" class="nav-link"><BsGithub/></a></li>
      </Nav.Item>
    </Nav>
    <Content/>
    <News/>
    <Footer/>

    </div>
    </>
  );
};

export default Header
