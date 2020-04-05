import React, { useState } from 'react';

import '../../styles/components/Nav--middleOut.scss';

// Reactstrap Components
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

// import Logo from './../assets/images/thinker.jpg'

const SiteNav = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar light expand="md" className="nav-middle-out">

      <NavbarToggler onClick={toggle} />

      <Collapse isOpen={isOpen} navbar className="thinker-nav">

        <Nav navbar>
          
          <NavItem>
              <NavLink href="/">Home</NavLink>
          </NavItem>
  
          <NavItem>
              <NavLink href="/artists">Artists</NavLink>
          </NavItem>
          
          <NavbarBrand href="/">
            <img src="https://scontent.fbne5-1.fna.fbcdn.net/v/t1.0-9/41684329_2023915690993422_833039603190464512_o.jpg?_nc_cat=101&_nc_ohc=BZY1imwT9CYAX_ZbVJb&_nc_ht=scontent.fbne5-1.fna&oh=e74dc3c11c760e7a0bf87dbac04c1574&oe=5E9DA325" height="125" width="125" alt="brand" />
          </NavbarBrand>
          
          <NavItem>
              <NavLink href="/contact">Contact</NavLink>
          </NavItem>


          <NavItem>
              <NavLink href="/contact">About</NavLink>
          </NavItem>


        </Nav>

      </Collapse>
    </Navbar>
  );
}

export default SiteNav;