import React from "react";
import { FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { emptycart, removeFromCart } from "../redux/slices/cartSlice";

function Cart() {
  const cartArray = useSelector((state) => state.cartReducer);
  console.log(cartArray);

  const dispatch = useDispatch()

  const handleCart = ()=>{
    alert('order placed succesfully')
    dispatch(emptycart())
    
  }

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-center text-purple-700 mb-6">Cart</h2>

      {cartArray.length > 0 ? (
        <>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-400 text-white">
                  <th className="border border-gray-300 p-3">#</th>
                  <th className="border border-gray-300 p-3">Title</th>
                  <th className="border border-gray-300 p-3">Image</th>
                  <th className="border border-gray-300 p-3">Price</th>
                  <th className="border border-gray-300 p-3">Action</th>
                </tr>
              </thead>
              <tbody>
                {cartArray.map((item, index) => (
                  <tr className="text-center" key={index}>
                    <td className="border border-gray-300 p-3">{index + 1}</td>
                    <td className="border border-gray-300 p-3">{item.title}</td>
                    <td className="border border-gray-300 p-3">
                      <img src={item.image} alt={item.title} className="w-20 h-20 mx-auto rounded" />
                    </td>
                    <td className="border border-gray-300 p-3 text-green-600 font-bold">${item.price}</td>
                    <td className="border border-gray-300 p-3">
                      <button onClick={()=>dispatch(removeFromCart(item?.id))} className="bg-red-500 text-white p-2 rounded-full">
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Cart Summary */}
          <div className="mt-6 flex justify-end">
            <div className="bg-white shadow-md p-6 rounded-lg w-80">
              <h3 className="text-xl font-bold mb-3">Cart Summary</h3>
              <p className="text-gray-700">Total number of Products: <span className="font-semibold">{cartArray.length}</span></p>
              <p className="text-gray-700">Grand Total: <span className="font-semibold text-green-600">${cartArray.reduce((total, item) => total + item.price, 0).toFixed(2)}</span></p>
              <button onClick={()=>handleCart()} className="bg-green-500 text-white w-full py-2 mt-4 rounded-lg">
                Checkout
              </button>
            </div>
          </div>
        </>
      ) : (
        <div className="text-center"><h3>No item in the cart</h3></div>
      )}
    </div>
  );
}

export default Cart;