import { useDispatch, useSelector } from 'react-redux'
import Products from '../Data/Product'
import './MyCart.scss'
import { HashLink } from 'react-router-hash-link'  //npm install react-router-hash-link
import { decrementCartCount, incrementCartCount } from '../../redux/cartReducer'
import { useMemo, useState } from 'react'
import Popup from '../Popup/Popup'
import { Toaster } from 'react-hot-toast'

const MyCart = () => {
    const dispatch = useDispatch()
    const [popupPage , setPopupPage] = useState(false)
    const [removeItem, setRemoveItem]  = useState(null)

    const {cartItems,cartCount} = useSelector( (state)=> state.Cart)
    console.log("PopUp Value===", popupPage)

    // console.log("Cart itmes in Cart page==", cartItems

  //Explantion of code: =>  
  //Products is an array that contains all the products — the full product list.
  //The .find() method is used to find which product has an id equal to the current item’s id.
  //That means — based on the id of the item in the cart, it fetches the full product details from the Products list.
  // Example: If item.id = 3, then Products.find(prod => prod.id === 3) will return the product details for the product with ID 3.

  // This code takes each item from cartItems, finds its full product details from the Products list by matching the IDs,
  //and then adds the count to it, creating a new cart array.

    const cart = cartItems.map(item => {
        const product = Products.find(prod => prod.id === item.id)
        return {
            ...product,count:item.count
        }
    })

//onRemove is a fun that runs when the user tries to remove an item.
//item :the item the user wants to remove
    const onRemove = (item) => {    
///This sets a state value (probably a popup visibility state) to true.
        setPopupPage(true); 
    //This saves the selected item into state so the popup knows which item the user is trying to remove.      
        setRemoveItem(item)
    }

//Explantion of code: =>  
    // here 1st x=0 , y = cartitem 1st product actualprice value so 0+ actual price of 1st product * 1st product count
    // 2nd => x value is total  value of 1st prouct y value.

   // const totalActualPrice = cart.reduce((x,y)=> x+y.price * y.count,0)
   // const totalOfferPrice= cart.reduce((x,y)=> x+y.offerPrice * y.count,0)
    
   // Top code will be converted to  useMemo Hook code, same concept of top code
    const totalActualPrice = useMemo(() => {
        return cart.reduce((x,y)=> x+ y.price * y.count, 0 )
    }, [cart])
    
    const totalOfferPrice = useMemo(() => {
        return cart.reduce((x,y)=> x+ y.offerPrice * y.count, 0 )
    },[cart])

    if (cartCount == 0) {
        return (
    
    // Hash link is used for scrolling to specific sections of a web page.
    //The target element on the page must have an id attribute matching the hash fragment in the URL.
            <div className="emptycart">
                <h2>Your Cart Is Empty</h2>
                <HashLink smooth to="/#Products"
                 className='button'>
                    Purchase Now
                </HashLink>
            </div>
        )
    }
    return (
        <div className='cartpage'>
            <h2>Your Cart</h2>
            <table>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>ProductName</th>
                        <th>Quantity</th>
                        <th>ActualPrice</th>
                        <th>OfferPrice</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((item,index) => (
                        <tr key={index}>
                            <td><img src={item.image[0]} alt=""/></td>
                            <td>{item.name}</td>

                            <td className='count'>
                                <div className='btns'>
                                    <button onClick={() =>
                                      dispatch(decrementCartCount(item.id))}>-</button>
                                    <p>{item.count}</p>
                                    <button onClick={() =>
                                      dispatch(incrementCartCount(item.id))}>+</button>
                               </div>
                            </td>   
                            <td>₹ {item.price * item.count}</td>
                            <td>₹ {item.offerPrice * item.count}</td>
                        {/* here passed an ID for the corresponding Remove item */}
                           <td onClick={()=>onRemove(item.id)}>Remove ❌</td>
                        </tr>
                    ))}
                    <tr>
                        <td colSpan="3"> </td>
                        <td>Total Actual Price:₹ {totalActualPrice}</td>
                         <td>Total Offer Price:₹ {totalOfferPrice}</td>
                       <td>You Saved : {totalActualPrice - totalOfferPrice}</td>
                    </tr>
                    <tr>
                        <td colSpan="3"></td>
                        <td><button>Add Coupon</button></td>
                        <td><button>Buy Now</button></td>    
                   </tr>
                </tbody>
             
            </table>
               {/* Here: The mycart page have remove button is clicked, when a popup page is shown. 
               that have 2 buttons cancel & confirm.  when the popup page cancel button is clicked, close the popup page and show the cart page.
               here these are 2 diffrent pages, so this will connect to using props and passing with props values.
                close and removeitem are props and passing with values , close value as true and removeitem value as Item */}
               {/* here passed 2 props close and removeitem for PopUp page.*/}
               {/* close for cancel button , removeitem for delete the item from reducer and cart page */}
               <Toaster position='top-center' />
               {popupPage && <Popup close={()=>setPopupPage(false)}
                 removeitem={removeItem}/>}
        </div>
    )
}

export default MyCart
