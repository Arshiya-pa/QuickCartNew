import React, { useState } from 'react'
import { useParams } from 'react-router-dom' 
import Products from '../Data/Product';
import './ProductInfo.scss'
import { FaStar, FaStarHalfAlt} from "react-icons/fa";
import { HashLink } from 'react-router-hash-link' 

const ProductInfo = () => {

  const [mainImage,setMainImage] = useState(0)
//It returns an object containing all the parameters from the URL.
//destructuring the name parameter from the returned object.
    const { name } = useParams();
    const product = Products.find((prod) =>
     prod.name.toLowerCase() === name.toLowerCase())
     console.log("Product in ProductInfo",product)

  return (
    //<div> ProductInfo : {name} </div>
    <div className='productinfo'>
       <div className='left'>
        <div className='main-img'>
            <img src={product.image[mainImage]} alt=''/>
        </div>
 {/* here add one product multiple images using array */}
          <div className="secondary-img">
            <img src={product.image[0]} alt=""  onClick={()=> setMainImage(0)}/>
            <img src={product.image[1]} alt=""  onClick={()=> setMainImage(1)}/>
            <img src={product.image[2]} alt=""  onClick={()=> setMainImage(2)}/>
            <img src={product.image[3]} alt=""  onClick={()=> setMainImage(3)}/>
          </div>
      </div>
      <div className='right'>
        <h1>{product.name}</h1>
        <div className="rating">
             <FaStar/>
             <FaStar/>
             <FaStar/>
             <FaStar/>
             <FaStarHalfAlt/>
        </div>
        <p className="desc">{product.description}</p>
        <div className="price">
          <p>₹ {product.offerPrice}</p>
          <p>₹ {product.price}</p>
        </div>
        <div className='btn'>
           <button>AddToCart</button>
           <button>BuyNow</button>
          <HashLink smooth to="/#Products" className='btns'>
                    Purchase Now 
                </HashLink>
        </div>
      </div>
    </div>
  )
}

export default ProductInfo

////useParams() is a React Router hook.
// Eg: for useParams
 //<Route path="/product/:name" element={<Product />} /> 
  //And your URL is: /product/iphone
//Then useParams() will return:
//{ name: "iphone" }