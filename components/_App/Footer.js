import React from 'react';

const Footer = ({bgColor}) => {
  return (
    <>
      <footer className={`footer-area ${bgColor}`}>
        <div className='container'>
          <div className='copyright-area'>
           l
          </div>
        </div>

        <div className='footer-image text-center'>
          <img src='/images/footer-image.png' alt='image' />
        </div>
      </footer>
    </>
  );
};

export default Footer;
