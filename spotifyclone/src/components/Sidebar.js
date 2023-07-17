import React from 'react'
import logo from "../image/logo.svg"
import Menu from './sidebar/Menu'
import { BiSolidPlusSquare,BiSolidBookHeart } from "react-icons/bi";
import PlayList from './sidebar/PlayList';
import DownloadApp from './sidebar/DownloadApp';


function Sidebar() {
  return (
    <div className='w-60 pt-6 flex flex-shrink-0 flex-col bg-black'>
      <a className='mb-5 px-6'> 
      <img src={logo} className='h-10 '/>

      </a>
      
      <Menu/>


      <div className='mt-5 px-2'>
        <ul className='flex flex-col'>
          <li>
            <a href='#' className='h-10 gap-x-4 flex items-center  px-4 text-link font-semibold hover:text-white'>
              <span >
                <BiSolidPlusSquare/>

              </span>
              Çalma Listesi Oluştur
            </a>
          </li>
          <li>
            <a href='#' className='h-50 gap-x-4 flex items-center  px-4 text-link font-semibold hover:text-white '>
              <span>
                <BiSolidBookHeart/>

              </span>
              Beğenilen Şarkılar
            </a>
          </li>
        </ul>
      </div>

      <PlayList/>
      <DownloadApp/>
    </div>
  )
}

export default Sidebar