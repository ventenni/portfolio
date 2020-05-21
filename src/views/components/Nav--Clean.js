import React, { useState } from 'react';

import '../../assets/styles/components/nav--clean.scss';

// Reactstrap Components
import {
	Collapse,
	Navbar,
	NavbarBrand,
	NavbarToggler,
	Nav,
	NavItem,
	NavLink
} from 'reactstrap';

const SiteNav = (props) => { 
	const [isOpen, setIsOpen] = useState(false);

	const toggleNavbar = () => setIsOpen(!isOpen);
	
	return (
		<Navbar light className="nav-clean" expand="md">
			
				<div className="nav-clean__left">
					<NavbarBrand>
						<img src="http://via.placeholder.com/100" height="50px" width="100px" alt="Logo" />
					</NavbarBrand>
				</div>

			<div className="nav-clean__right">
				<Collapse isOpen={isOpen} navbar>
					<Nav>
						<NavItem>
							<NavLink href="#">Link</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="#">Link</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="#">Link</NavLink>
						</NavItem>
					</Nav>
				</Collapse>
				<NavbarToggler onClick={toggleNavbar} className="mr-2" />
			</div>
		</Navbar>
	)
}

export default SiteNav;