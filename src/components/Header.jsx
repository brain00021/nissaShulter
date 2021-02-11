import React, { useState, useEffect } from "react";
import {Navbar,Nav,NavItem,Form,FormControl,Button,Dropdown} from 'react-bootstrap';
import "assets/scss/header.scss";
import heartIcon  from 'assets/img/icon/love.svg'
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
    <div>
      <Navbar bg="light"  expand="lg">
        <Navbar.Brand as={Link} to="/" >毛小孩不想流浪</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="ml-auto">
            <NavItem eventkey={1} href="/">
              <Nav.Link as={Link} to="/" >領養須知</Nav.Link>
            </NavItem>
            <NavItem eventkey={2} href="/about">
              <Nav.Link as={Link} to="/about" >領養浪浪</Nav.Link>
            </NavItem>
          
          <Dropdown>
            <Dropdown.Toggle id="dropdown-basic">
              {lang}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={() => changeLanguage("fr")}>FR</Dropdown.Item>
              <Dropdown.Item onClick={() => changeLanguage("en")}>EN</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <NavItem eventkey={3} href="/login">
            <Nav.Link as={Link} to="/login" ><img src={heartIcon}/></Nav.Link>
          </NavItem>
          <NavItem eventkey={3} href="/login">
            <Nav.Link as={Link} to="/login" >登入</Nav.Link>
          </NavItem>
          <NavItem eventkey={4} href="/signUp">
              <Nav.Link as={Link} to="/signUp" >註冊</Nav.Link>
            </NavItem>
          {/* <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  </div>
  )
}

export default Header;