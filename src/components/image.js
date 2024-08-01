import React from 'react';
import headshot from '../assets/images/mk_headshot.JPG';

function image() {
  return (
    <div className="image-container sm:w-1/3 justify-end items-center flex">
      <img src={headshot} alt="mk headshot" className="justify-center items-center px-4 sm:max-w-md"/>
    </div>
  )
};

export default image;