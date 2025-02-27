import React from 'react'
import useFetch from '../hooks/useFetch'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux'
import { addToWishlist } from '../redux/slices/wishlistSlice'
import { addToCart } from '../redux/slices/cartSlice'

function Home() {
  const data = useFetch('https://fakestoreapi.com/products')
  const dispatch = useDispatch()
  
  // Function to truncate text to a specific length
  const truncateText = (text, maxLength) => {
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text
  }

  return (
    <div className="container mx-auto py-10 px-4 md:px-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Featured Products</h1>
      
      {data?.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data.map((item) => (
            <div key={item.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="h-64 overflow-hidden flex items-center justify-center bg-gray-100 p-4">
                <img 
                  className="h-full object-contain" 
                  src={item?.image} 
                  alt={item?.title} 
                />
              </div>
              
              <div className="p-4">
                <h2 className="font-semibold text-lg mb-2 h-14 overflow-hidden">
                  {truncateText(item?.title, 50)}
                </h2>
                
                <div className="text-sm text-gray-600 mb-4 h-16 overflow-hidden">
                  {truncateText(item?.description, 100)}
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-gray-800">${item?.price}</span>
                  
                  <div className="flex gap-2">
                    <button 
                      onClick={() => dispatch(addToWishlist(item))} 
                      className="p-2 rounded-full bg-white text-red-500 border border-red-500 hover:bg-red-500 hover:text-white transition-colors duration-300"
                      aria-label="Add to wishlist"
                    >
                      <FontAwesomeIcon icon={faHeart} />
                    </button>
                    
                    <button 
                      onClick={() => dispatch(addToCart(item))} 
                      className="p-2 rounded-full bg-white text-green-600 border border-green-600 hover:bg-green-600 hover:text-white transition-colors duration-300"
                      aria-label="Add to cart"
                    >
                      <FontAwesomeIcon icon={faCartShopping} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-xl text-gray-500">No products available</p>
        </div>
      )}
    </div>
  )
}

export default Home