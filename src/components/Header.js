import React from 'react'
import { LOGO_URL } from '../utils/constant';

const Header = () => {
  return (
    <div className="absolute top-0 left-0 w-full px-4 py-2 bg-gradient-to-b from-black z-10">
        <img className="w-38"         
        src={LOGO_URL} alt="Streamfy Logo" />
    </div>
  )
}

export default Header;