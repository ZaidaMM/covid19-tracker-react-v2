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
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Input,
  Label,
} from 'reactstrap';

function MainNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <div>
      <Navbar
        className='bg-dark-color text-white px-4 justify-content-center sticky-top'
        expand='md'
        dark
      >
        <NavbarToggler full self-align-right onClick={toggle} />
        <Collapse
          navbar
          isOpen={isOpen}
          className='justify-content-center my-1'
        >
          <Nav className='mx-auto' navbar>
            <NavItem>
              <NavLink href='/' className='text-white selected-color mx-3'>
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='#' className='text-white mx-3'>
                Stats
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='#' className='text-white mx-3'>
                About
              </NavLink>
            </NavItem>
          </Nav>
          <NavbarText className='ml-3 '>
            <Button
              type='button'
              className='btn btn-sm btn-purple px-3'
              onClick={toggleModal}
            >
              Subscribe
            </Button>
          </NavbarText>
        </Collapse>
      </Navbar>
      <Modal isOpen={isModalOpen} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Subscribe for updates</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for='name'>Name</Label>
              <Input
                id='name'
                name='name'
                type='text'
                placeholder='Enter your name...'
              />
            </FormGroup>
            <FormGroup>
              <Label for='name'>Email</Label>
              <Input
                id='email'
                name='email'
                type='email'
                placeholder='Enter your email...'
              />
            </FormGroup>
            <FormGroup>
              <Button
                type='submit'
                value='submit'
                className='btn btn-purple secondary-color'
              >
                Submit
              </Button>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
}
export default MainNavbar;
