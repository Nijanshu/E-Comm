import React from 'react';
import styles from '@/styles/footer.module.css'
import { MdFacebook } from 'react-icons/md';
import { RiTwitterXFill } from 'react-icons/ri';
import { BsInstagram } from 'react-icons/bs';


function Footer() {
  return (
    <footer className='m-0 p-0'>
      <div className={styles.footercontainer}>
        <div className={styles.footerlogo}>
          <a href="/">
            <img
              src="https://i.ibb.co/rbGwbHs/ss2023.png"
              alt="Company Logo"
            />
          </a>
        </div>
        <div className={styles.footerlinks}>
          <ul className='m-0'>
            <li><a className='hover:text-slate-500' href="#">Home</a></li>
            <li><a className='hover:text-slate-500' href="https://amazon.in" target='_blank'>Shop</a></li>
            <li><a className='hover:text-slate-500' href="#">About Us</a></li>
            <li><a className='hover:text-slate-500' href="mailto:nijanshusingh@gmail.com">Contact Us</a></li>
          </ul>
        </div>
        <div className={styles.footersocial}>
          <ul className='m-0'>
            <MdFacebook className='hover:text-slate-400 cursor-pointer'/>
            <RiTwitterXFill className='hover:text-slate-400 cursor-pointer'/>
            <BsInstagram className='hover:text-slate-400 cursor-pointer'/>
          </ul>
        </div>
      </div>
      <div className={styles.footertext}>
        &copy; {new Date().getFullYear()} Namazon.netlify.app | All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
