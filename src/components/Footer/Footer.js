import React from 'react';


const Footer = () => {
  return (
<footer>
  <hr className='border-x-8  border-greenWhite' />
<footer className="footer p-24 bg-white text-base-content">
  <div className='text-4xl font-bold text-silverTree'>
    <p>banquee.</p>
  </div> 
  <div>
    <span className="text-lg">About</span> 
    <a className="link link-hover footer-item text-base text-osloGrey">Features</a> 
    <a className="link link-hover footer-item text-base text-osloGrey">Pricing</a> 
    <a className="link link-hover footer-item text-base text-osloGrey">Support</a> 
    
  </div> 
  <div>
    <span className="text-lg">Blog</span> 
    <a className="link link-hover footer-item text-base text-osloGrey">Products</a> 
    <a className="link link-hover footer-item text-base text-osloGrey">Technology</a> 
    <a className="link link-hover footer-item text-base text-osloGrey">Crypto</a> 
   
  </div> 
  
  <div>
    <span className="text-lg">Webflow</span> 
    <a className="link link-hover footer-item text-base text-osloGrey">Stylegude</a> 
    <a className="link link-hover footer-item text-base text-osloGrey">Licensing</a> 
    <a className="link link-hover footer-item text-base text-osloGrey">Changelog</a> 
    
  </div> 
  <div>
    <span className="text-lg">Social Media</span> 
    <a className="link link-hover text-base text-osloGrey">Twitter</a> 
    <a className="link link-hover text-base text-osloGrey">Facebook</a> 
    <a className="link link-hover text-base text-osloGrey">Instagram</a>
  </div>
</footer>
<footer className="footer px-10 py-4 border-t bg-white text-base-content border-base-300">
  <div className="items-center grid-flow-col">
 
    <p className='footer-part2'>&copy; Made by <span className='text-silverTree'>Pawel Gola</span> - Powered by <span className='text-silverTree'>Webflow</span> </p>
  </div> 
  <div className="md:place-self-center md:justify-self-end">
    <div className="grid grid-flow-col gap-4"> 
      <a className='text-osloGrey' href="#">Datenschutz</a>
      <a className='text-osloGrey' href="#">Impressum</a> 
    </div>    
  </div>
</footer>
</footer>
  )
}

export default Footer