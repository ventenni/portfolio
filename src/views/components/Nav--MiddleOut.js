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
            <img src="https://via.placeholder.com/100" height="125" width="125" alt="brand" />
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