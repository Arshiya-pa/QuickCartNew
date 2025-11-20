import React from 'react'
import './Popup.scss'
import { useDispatch } from 'react-redux'
import { removeFromCart } from '../../redux/cartReducer'
import toast from 'react-hot-toast'

//here take the 2 props values from mycart and props values are passing to the button Onclick().
const Popup = ({close,removeitem}) => {
  const dispatch = useDispatch()

  const removeCart = () =>{
    try{
      dispatch(removeFromCart(removeitem))
      toast.success("Item Removed From Cart")
      close()
    }
    catch(error){
      toast.error("Failed To Remove...")
    }
  }
  return (
    <div className='popup'>
        <div className='box'>
         <p>Do You Want to Remove From Cart</p>
         <div className='btns'>
            <button onClick={removeCart}>Confirm</button>
            <button onClick={close}>Cancel</button>
         </div>
     </div> 
 </div>
  )
}

export default Popup
