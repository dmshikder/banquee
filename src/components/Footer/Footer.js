import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
<footer>
<footer className="footer p-10 bg-base-200 text-base-content">
  <div className='footer-logo'>
    <p>banquee.</p>
  </div> 
  <div>
    <span className="footer-title-text">About</span> 
    <a className="link link-hover footer-item">Features</a> 
    <a className="link link-hover footer-item">Pricing</a> 
    <a className="link link-hover footer-item">Support</a> 
    
  </div> 
  <div>
    <span className="footer-title-text">Blog</span> 
    <a className="link link-hover footer-item">Products</a> 
    <a className="link link-hover footer-item">Technology</a> 
    <a className="link link-hover footer-item">Crypto</a> 
   
  </div> 
  
  <div>
    <span className="footer-title-text">Webflow</span> 
    <a className="link link-hover footer-item">Stylegude</a> 
    <a className="link link-hover footer-item">Licensing</a> 
    <a className="link link-hover footer-item">Changelog</a> 
    
  </div> 
  <div>
    <span className="footer-title-text">Social Media</span> 
    <a className="link link-hover footer-item">Twitter</a> 
    <a className="link link-hover footer-item">Facebook</a> 
    <a className="link link-hover footer-item">Instagram</a>
  </div>
</footer>
<footer className="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300">
  <div className="items-center grid-flow-col">
 
    <p className='footer-part2'>&copy; Made by <span className='footer-by'>Pawel Gola</span> - Powered by <span className='footer-by'>Webflow</span> </p>
  </div> 
  <div className="md:place-self-center md:justify-self-end">
    <div className="grid grid-flow-col gap-4"> 
      <a className='footer-part2' href="#">Datenschutz</a>
      <a className='footer-part2' href="#">Impressum</a> 
    </div>    
  </div>
</footer>
</footer>
  )
}

export default Footer