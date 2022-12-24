import React, { useState } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Input,
  Label,
} from 'reactstrap';

function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);
  return (
    <div className='Header'>
      <div className='hero bg-dark-color p-5'>
        <h1 className='text-white offset-md-1 display-3 text-md-left'>
          Covid-19 Tracker
        </h1>
        <p className='text-light offset-md-1 lead pl-2 d-none d-md-block'>
          Keep safe with reliable information in real time
        </p>
        <Button
          type='button'
          className=' offset-md-1 btn btn-sm btn-purple secondary-color px-3'
          onClick={toggleModal}
        >
          Subscribe
        </Button>
      </div>

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
                className='btn btn-purple primary-color'
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
export default Header;
