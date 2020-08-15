import React from 'react';
import { FaRegCircle } from 'react-icons/fa'; // Font Awesome

export default function Footer() {
  return (
    <div
      className='foot foot-font'
      role='navigation'
      aria-label='main navigation'
    >
      <div className='content has-text-centered'>
        <p>
          <strong className='has-text-white mr-2'>Karen Astell</strong>
          <FaRegCircle style={{ color: 'white' }} />
          <i className='far fa-circle has-text-white'></i>
          <span className='has-text-white bold mr-2 ml-2'>(603) 770 7658 </span>
          <FaRegCircle style={{ color: 'white' }} />
          <i className='far fa-circle has-text-white'></i>
          <a
            href='mailto:karenastell@gmail.com'
            target='_blank'
            rel='noreferrer noopener'
          >
            <span className='has-text-white ml-2 bold'>
              KarenAstell@gmail.com
            </span>
          </a>
        </p>
      </div>
    </div>
  );
}
