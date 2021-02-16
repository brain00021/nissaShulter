import React, { useState, useEffect } from "react";
import {Navbar,Nav,NavItem,Form,FormControl,Button,Dropdown,DropdownButton,Image } from 'react-bootstrap';
import "assets/scss/header.scss";
import heartIcon  from 'assets/img/icon/love.svg'
import LogoImg from 'assets/img/logo.png'
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
  useHistory,
  useRouteMatch,
  useParams,
  NavLink,
  Redirect,
} from "react-router-dom";
import { useTranslation } from 'react-i18next';
const Header =  () => {

  const { t, i18n } = useTranslation();
  const [lang,setLang] = useState('en');
  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
    setLang(lng);
  };
  return(
    <div>
      <Navbar bg="light"  expand="lg">
        <Navbar.Brand as={Link} to="/" >
          <Image src={LogoImg} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="ml-auto">

            <Nav.Link as={Link} to="/" activeClassName="active">領養須知</Nav.Link>
            <Nav.Link as={Link} to="/about" activeClassName="active" >領養浪浪</Nav.Link>
          
            <DropdownButton id="dropdown-basic-button" title={lang}>
              <Dropdown.Menu>
                <Dropdown.Item onClick={() => changeLanguage("fr")}>FR</Dropdown.Item>
                <Dropdown.Item onClick={() => changeLanguage("en")}>EN</Dropdown.Item>
              </Dropdown.Menu>
            </DropdownButton>
              <Nav.Link as={Link} to="/favoriteAnimal" activeClassName="active" className="favoriteIcon" ></Nav.Link>
              <Nav.Link as={Link} to="/login"  activeClassName="active">登入</Nav.Link>
              <Nav.Link as={Link} to="/signUp"  activeClassName="active">註冊</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default Header;