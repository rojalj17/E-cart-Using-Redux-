import { faCartShopping, faHeart, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeItem } from '../redux/slices/wishlistSlice';
import { addToCart } from '../redux/slices/cartSlice';
import { useNavigate } from 'react-router-dom';

function Wishlist() {
  const wishlistarray = useSelector((state)=>state.wishlistReducer)
  console.log(wishlistarray);
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleCart = (item)=>{
    dispatch(addToCart(item))
    dispatch(removeItem(item.id))
    navigate('/')
  }
  
  return (
    <>
      <h1 className='text-center text-6xl text-violet-800 mt-6'>Wishlist</h1>
      <div className='md:grid-cols-4 grid px-16 gap-10 mb-10 mt-6'>
        {wishlistarray?.length > 0 ?
          wishlistarray?.map((item) => (
            <div className='w-100% md:w-3xs p-3 shadow-2xl rounded-md'>
              <img className='w-full h-60' src={item?.image} alt="" />
              <h1 className='font-bold'>{item?.title}</h1>
              <p className='text-justify'>{item?.description}</p>
              <h1>Price : ${item?.price}</h1>
              <div className='flex justify-between  bottom-0 mt-2'>
                <div onClick={() => dispatch(removeItem(item?.id))} className="p-1 px-2 border border-red-700 bg-red-700 text-white rounded-sm hover:bg-white hover:text-red-700"><FontAwesomeIcon icon={faTrash} />
                </div>
                <div onClick={()=>handleCart(item)} className="p-1 px-2 border border-green-700 bg-green-700 text-white rounded-sm hover:bg-white hover:text-green-700"><FontAwesomeIcon icon={faCartShopping} />
                </div>
              </div>
            </div>
          ))

          :
          <h1>Nothing to display</h1>
        }
      </div>
    </>
  )
}

export default Wishlist