import React from 'react';

function Footer() {
  return (
    <div className='footer'>
      <div className='container-fluid bg-dark-color text-small'>
        <div className='row'>
          <div className='col'>
            <ul className='list-unstyled mt-2 d-flex flex-row justify-content-center'>
              <li className='px-2'>
                <a href='/home' className='text-color'>
                  Home
                </a>
              </li>
              <li className='px-2'>
                <a href='/home' className='text-color'>
                  Stats
                </a>
              </li>

              <li className='px-2'>
                <a href='/home' className='text-color'>
                  Contact
                </a>
              </li>
              <li className='px-2'>
                <a href='/home' className='text-color'>
                  Subscribe
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <p className='text-color text-center copy '>
              Copyright &copy; 2021
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
