import React from 'react'
import './ProductCard.scss'
import { FaStar,FaStarHalfAlt } from "react-icons/fa";
import { addToCart } from '../../redux/cartReducer';
import { useDispatch,useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const ProductCard = ({ id, name, image, Offerprice,Actualprice}) => {
    const dispatch = useDispatch()
     const navigate = useNavigate()

    const { cartItems } = useSelector((state) => state.Cart)
    const isInCart = cartItems.find(item => item.id === id)

    const onAddToCart = () =>{
 {/*Here once you add a item to cart ,then addtocart button will be disabled */}
 {/* Here  Onclick() fun have count:1 is set to Total item count and cartcount is the unique item count for the addToCart*/}
        try{
            dispatch(addToCart({"id":id ,"name": name, "count":1 }))
            toast.success("Add To Cart Successfull")
        }
        catch(error){
            toast.error("Failed....! Please Try Again..")
        }    
    }
    
    //navigate(/product/${name}) => This code tells React Router to move the user to a new page.
    //navigate() is a function used to change the page (or route).
    //`/product/${name}` creates a URL dynamically using the value of name.
    //So if name = "iphone" → the URL becomes:/product/iphone

    return (
        <div className='product'>
                <div className='imgbox'
      //When this code runs, it sends the user to the product page of that specific item based on its name.
                 onClick={()=> navigate(`/product/${name}`)}>
                    <img src={image[0]} alt="" />
                </div>
                <div className='info'>
                    <p>{name}</p>
                    <span>
                        <p>₹{Offerprice}</p>
                        <p>₹{Actualprice}</p>
                    </span>
                </div>
                <div>
            </div>
            <div className='ratings'>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar />
                <FaStarHalfAlt/>
            </div>
                <div className='btns'>
       

                    <button className={isInCart ? "disabled":""}
                     onClick={onAddToCart}>AddToCart</button>
                    <button>BuyNow</button>
                </div>
            </div>
    )
}

export default ProductCard