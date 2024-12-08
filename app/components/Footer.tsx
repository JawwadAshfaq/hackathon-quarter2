import React from 'react'
import Link from 'next/link'
import { FaFacebook, FaYoutube, FaTwitter, FaInstagram, FaPinterest } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import Image from 'next/image';
import Logo from '../../public/Vector.png';

const Footer = () => {
  return (
    <>
      <hr className="h-[1px] border-t-black/10 mb-6" />

      <footer className='py-10 px-4 sm:px-6 lg:px-20'>
        <div className='container mx-auto py-2'>
          <div className='grid grid-cols-1 sm:grid-cols-[1fr,1fr,1fr,1fr] gap-6'>
            <div className='foot-col-1'>
              <div className='flex items-center gap-2 text-xl font-bold mb-6'>
                <Image src={Logo} alt="Website Logo" />
                <h1 className='text-black'>Comforty</h1>
              </div>
              <p className='mb-6 text-[#272343]'>
                Vivamus tristique odio sit amet velit semper, eu posuere turpis interdum.
                <br />
                Cras egestas purus
              </p>
              <div className='flex space-x-2'>
                <Link href="#"><FaFacebook className='text-[#636270] text-xl w-7 h-7 rounded-full pt-1 pb-1 hover:text-[#007580] hover:border hover:border-[#007580]' /></Link>
                <Link href="#"><FaTwitter className='text-[#636270] w-7 h-7 rounded-full pt-1 pb-1 hover:text-[#007580] hover:border hover:border-[#007580]' /></Link>
                <Link href="#"><FaInstagram className='text-[#636270] w-7 h-7 rounded-full pt-1 pb-1 hover:text-[#007580] hover:border hover:border-[#007580]' /></Link>
                <Link href="#"><FaPinterest className='text-[#636270] w-7 h-7 rounded-full pb-1 hover:text-[#007580] hover:border hover:border-[#007580]' /></Link>
                <Link href="#"><FaYoutube className='text-[#636270] w-7 h-7 rounded-full pt-1 pb-1 hover:text-[#007580] hover:border hover:border-[#007580]' /></Link>
              </div>
            </div>

            <div className='foot-col-2 md:ml-14'>
              <h2 className='text-xl mb-4 text-[#9A9CAA]'>CATEGORY</h2>
              <ul>
                <Link href="#"><li className='py-1 text-[#272343]'>Sofa</li></Link>
                <Link href="#"><li className='py-1 text-[#272343]'>Armchair</li></Link>
                <Link href="#"><li className='py-1 text-[#272343]'>Wing Chair</li></Link>
                <Link href="#"><li className='py-1 text-[#272343]'>Desk Chair</li></Link>
                <Link href="#"><li className='py-1 text-[#272343]'>Wooden Chair</li></Link>
                <Link href="#"><li className='py-1 text-[#272343]'>Park Bench</li></Link>
              </ul>
            </div>

            <div className='foot-col-3'>
              <h2 className='text-xl mb-4 text-[#9A9CAA]'>SUPPORT</h2>
              <ul>
                <Link href="#"><li className='py-1 text-[#272343]'>Help & Support</li></Link>
                <Link href="#"><li className='py-1 text-[#272343]'>Terms & Conditions</li></Link>
                <Link href="#"><li className='py-1 text-[#272343]'>Privacy Policy</li></Link>
                <Link href="#"><li className='py-1 text-[#272343]'>Help</li></Link>
              </ul>
            </div>

            <div className='foot-col-4'>
              <h2 className='text-xl mb-4 text-[#9A9CAA]'>NEWSLETTER</h2>
              <div className='flex gap-3 mb-6'>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className='px-4 py-2 border border-[#9A9CAA] focus:outline-none focus:ring-2 focus:ring-[#007580] w-full sm:w-64'
                />
                <button className='bg-[#007580] text-white px-4 py-2 hover:bg-[#005f5f]'>
                  Subscribe
                </button>
              </div>
              <p className='text-[#272343]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.</p>
            </div>
          </div>
        </div>
      </footer>

      <hr className="h-[1px] border-t-black/10 mb-6" />

      <div className="flex flex-col sm:flex-row justify-between items-center mb-2 px-4 sm:px-6 lg:px-20 pb-4">
        <p className="text-sm text-center sm:text-left text-black/60 mb-4 sm:mb-0 sm:mr-1">
          Shop.co © 2000-2024, All Right Reserved.
        </p>
        
      </div>
    </>
  );
};

export default Footer;
