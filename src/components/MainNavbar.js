import React from 'react';
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
  return (
    <Navbar className='main-color text-white px-4' expand='md' dark>
      <NavbarToggler light />
      <Collapse navbar>
        <Nav className='ml-auto ' navbar>
          <NavItem>
            <NavLink href='/' className='text-white selected-color mx-2'>
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href='/' className='text-white mx-2'>
              Stats
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href='/' className='text-white mx-2'>
              Countries
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
      <NavbarText>
        <Button type='button' className='btn btn-sm btn-purple px-3'>
          Subscribe
        </Button>
      </NavbarText>
    </Navbar>
  );
}
export default MainNavbar;
