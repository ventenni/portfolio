import React from 'react';

import '../../styles/components/Nav--clean.scss';

// Reactstrap Components
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

const SiteNav = (props) => { 
	return (
		<Navbar light className="nav-clean">
			<Nav navbar>
				<div className="navbar-left-side">
					<NavbarBrand>
						<img src="http://via.placeholder.com/100" height="100px" width="100px" alt="Logo" />
					</NavbarBrand>
				</div>

				<div className="navbar-right-side">
					<NavItem>
						<NavLink href="#">Link</NavLink>
					</NavItem>
					<NavItem>
						<NavLink href="#">Link</NavLink>
					</NavItem>
					<NavItem>
						<NavLink href="#">Link</NavLink>
					</NavItem>
				</div>
			</Nav>
		</Navbar>
	)
}

export default SiteNav;