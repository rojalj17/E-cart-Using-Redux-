import { faBars, faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Header() {
  const wishlistarray = useSelector((state)=>state.wishlistReducer)
  const cartArray = useSelector((state)=>state.cartReducer)
  const [show, setshow] = useState(false)
  return (
    <>
      <div className=' bg-violet-800 px-4 py-6'>
        <div className="relative">

          <h1 className='text-3xl font-bold text-white'><Link to={'/'}><FontAwesomeIcon icon={faCartShopping} />E-CART</Link></h1>
          <button class="absolute top-0 right-0 md:hidden border border-white p-3 rounded px-4 text-white" onClick={() => setshow(!show)}><FontAwesomeIcon icon={faBars} /></button>
          {show &&
            <div class="mt-4 md:hidden text-white">
              <Link to={'/wishlist'}>
                <button className='px-3 py-2 border-1 rounded-sm border-white text-lg hover:bg-white hover:text-red-700'><FontAwesomeIcon icon={faHeart} className='text-red-700' /> Wishlist <span className='bg-white text-black p-1 rounded-sm text-xs'>0</span></button>
              </Link>
              <Link to={'/cart'}>
                <button className='ms-3 px-3 py-2 border-1 rounded-sm border-white text-lg hover:bg-white hover:text-green-700'><FontAwesomeIcon icon={faCartShopping} className='text-green-700' /> Cart <span className='bg-white text-black p-1 rounded-sm text-xs'>0</span></button>
              </Link>
            </div>}
          <div class="absolute top-0 right-0 text-white md:flex hidden">
            <Link to={'/wishlist'}>
              <button className='px-3 py-2 border-1 rounded-sm border-white text-lg hover:bg-white hover:text-red-700'><FontAwesomeIcon icon={faHeart} className='text-red-700' /> Wishlist <span className='bg-white text-black p-1 rounded-sm text-xs'>{wishlistarray.length}</span></button>
            </Link>
            <Link to={'/cart'}>
              <button className='ms-3 px-3 py-2 border-1 rounded-sm border-white text-lg hover:bg-white hover:text-green-700'><FontAwesomeIcon icon={faCartShopping} className='text-green-700' /> Cart <span className='bg-white text-black p-1 rounded-sm text-xs'>{cartArray?.length}</span></button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header