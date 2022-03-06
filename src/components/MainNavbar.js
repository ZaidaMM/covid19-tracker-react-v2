import React, { useState } from 'react';
import {
  Navbar,
  NavbarToggler,
  Collapse,
  NavItem,
  NavLink,
  Nav,
  NavbarText,
  Button,
} from 'reactstrap';

function MainNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar
        className='main-color text-white px-4 justify-content-center'
        expand='md'
        dark
      >
        <NavbarToggler full self-align-right onClick={toggle} />
        <Collapse
          navbar
          isOpen={isOpen}
          className='justify-content-center my-1'
        >
          <Nav className='mx-auto ' navbar>
            <NavItem>
              <NavLink href='/' className='text-white selected-color mx-3'>
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/' className='text-white mx-3'>
                Stats
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/' className='text-white mx-3'>
                About
              </NavLink>
            </NavItem>
          </Nav>
          <div>
            <NavbarText className='ml-3 '>
              <Button type='button' className='btn btn-sm btn-purple px-3 '>
                Subscribe
              </Button>
            </NavbarText>
          </div>
        </Collapse>
      </Navbar>
    </div>
  );
}
export default MainNavbar;
