import React, { useState } from 'react';

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons';


import '../../assets/styles/components/nav--middleOut.scss';

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
// import Logo from './../../assets/images/drawing.svg';


const SiteNav = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  let icon = isOpen ? 'open' : 'closed';

  const navLinks = props.navItems.navLinks;
  const logo = props.navItems.logo;

  return (
    <Navbar light expand="md" className="nav-middle-out">

      <NavbarToggler onClick={toggle} > 
        {/* <div className={`hamburger ${icon}`}>|</div> */}
        <FontAwesomeIcon icon={faPlus} className={`hamburger ${icon}`} />
      </NavbarToggler>

      <Collapse isOpen={isOpen} navbar>

        <Nav navbar>
          
          <NavItem>
            <NavLink href={`${navLinks[0].link}`}>{navLinks[0].text}</NavLink>
          </NavItem>
  
          <NavItem>
              <NavLink href={`${navLinks[1].link}`}>{navLinks[1].text}</NavLink>
          </NavItem>
          
          <NavbarBrand href="/">
            <img src={logo} height="100" width="100" alt="brand" />
          </NavbarBrand>
          
          <NavItem>
              <NavLink href={`${navLinks[2].link}`}>{navLinks[2].text}</NavLink>
          </NavItem>

          <NavItem>
              <NavLink href={`${navLinks[3].link}`}>{navLinks[3].text}</NavLink>
          </NavItem>


        </Nav>

      </Collapse>
    </Navbar>
  );
}

export default SiteNav;