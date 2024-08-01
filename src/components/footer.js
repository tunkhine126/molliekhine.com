import React from 'react';

function Footer() {
  return(
    <div>
      <footer className="sm:fixed bottom-0 mx-auto place-content-center justify-center p-4 w-full bg-gray-800">
        <div className="text-sm sm:text-base justify-center text-center text-white">
        Say hello. If Mollie can’t help you, she probably knows someone who can!
        </div>
        <div className="text-sm sm:text-base flex justify-center text-center text-white">
          <a href="https://www.linkedin.com/in/molliekhine" target="_blank" rel="noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="#0072b1" className="px-2 pb-2" width="35" height="35" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
          </a>
          <a href="mailto:mollie@meetinglab.com" target="_blank" rel="noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="#1D9BF9" className="px-2 pb-2" width="35" height="35" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.75 5.25L3 6V18L3.75 18.75H20.25L21 18V6L20.25 5.25H3.75ZM4.5 7.6955V17.25H19.5V7.69525L11.9999 14.5136L4.5 7.6955ZM18.3099 6.75H5.68986L11.9999 12.4864L18.3099 6.75Z" /></svg>
          </a>
        </div>
      </footer>
    </div>
  )
}

export default Footer;