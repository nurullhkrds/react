import React from 'react'
import { BiDownload} from "react-icons/bi";


function DownloadApp() {
  return (
    <a href='#' className='h-15 flex flex-shrink-0 text-sm font-semibold text-link hover:text-white px-6 gap-x-4 items-center '>
        <BiDownload/>
        Uygulamayı Yükle
    </a>
  )
}

export default DownloadApp