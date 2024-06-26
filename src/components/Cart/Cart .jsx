import StripeCheckout from "react-stripe-checkout";
import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { IoBagHandleOutline } from "react-icons/io5";
import { HiOutlineMinus, HiPlus } from "react-icons/hi";
import styles from "../../styles/styles";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addTocart, removeFromCart } from "../../redux/actions/cart ";
import { toast } from "react-toastify";

const Cart = ({ setOpenCart }) => {

//..................................
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [isCheckoutClicked, setIsCheckoutClicked] = useState(false);
  const [totalItemCount, setTotalItemCount] = useState(cart?.length || 0);

  const removeFromCartHandler = (data) => {
    dispatch(removeFromCart(data));
    setTotalItemCount((prevCount) => prevCount - 1);
  };

  const totalPrice = cart.reduce(
    (acc, item) => acc + item?.qty * item?.price,
    0
  );

  const quantityChangeHandler = (data) => {
    dispatch(addTocart(data));
  };

  const handleCheckout = () => {
    setIsCheckoutClicked(true);
    setTotalItemCount(0);
    // localStorage.removeItem("cartItems")
  };
//..................end


  const [product , setProduct] = useState({
    name :'download zip file',
    price : 100000,
    productBy : 'Learnzia'
  })

  
  const makePayment = async(token) => {
    const body = {
      token,
      product
    }
    const headers ={
      'Content-Type':"application/json"
    }
    return fetch('http://localhost:3002/api/payment/payment',{
      method:'POST',
      headers,
      body :JSON.stringify(body)
    }).then((response) => {
      // window.location.reload();
      localStorage.removeItem("cartItems")
      window.location.reload();
      // handlePaymentSuccess()
      console.log(response)
    }).catch((err) => {
      console.log(err)
    })

    

  }

 




//...................................................


  return (
    <div className={`fixed top-0 left-0 w-full bg-[#0000004b] h-screen z-10 ${isCheckoutClicked ? 'hidden' : 'block'}`}>
      <div className="fixed top-0 right-0 h-full w-[80%] 800px:w-[25%] bg-white flex flex-col overflow-y-scroll justify-between shadow-sm">
        {cart && cart?.length === 0 ? (
          <div className="w-full h-screen flex items-center justify-center">
            <div className="flex w-full justify-end pt-5 pr-5 fixed top-3 right-3">
              <RxCross1
                size={25}
                className="cursor-pointer"
                onClick={() => setOpenCart(false)}
              />
            </div>
            <h5>Cart Items is empty!</h5>
          </div>
        ) : (
          <>
            <div>
              <div className="flex w-full justify-end pt-5 pr-5">
                <RxCross1
                  size={25}
                  className="cursor-pointer"
                  onClick={() => setOpenCart(false)}
                />
              </div>
              {/* Item length */}
              <div className={`${styles.noramlFlex} p-4`}>
                <IoBagHandleOutline size={25} />
                <h5 className="pl-2 text-[20px] font-[500]">
                  {totalItemCount} items
                </h5>
              </div>

              {/* cart Single Items */}
              <br />
              <div className="w-full border-t">
                {cart &&
                  cart.map((i, index) => (
                    <CartSingle
                      key={index}
                      data={i}
                      quantityChangeHandler={quantityChangeHandler}
                      removeFromCartHandler={removeFromCartHandler}
                    />
                  ))}
              </div>
            </div>

            <div className="px-5 mb-3">
              {/* checkout buttons */}
              <Link to="/checkout">
                <div
                  className={`h-[45px] flex items-center justify-center w-[100%] bg-[#3F1B11] rounded-[5px]`}
                  onClick={handleCheckout}
                >

<StripeCheckout 
       name="Payment"
       amount={totalPrice*100}
       currency="LKR"
       token={makePayment}
       stripeKey="pk_test_51OsfJmRtWsi1gN3bqyLk6JSrNZeMpYREDc1JZIrXHUu64ihxpzGSt3V6Z5g3fdMs6hMEKIPFU3AeQN5CsnNUKYfs005BZ5c5SE"
     >
     <h1 className="text-[#fff] text-[18px] font-[600]">
                    <Link to="/zip" >Checkout Now (LKR {totalPrice})</Link>

                  </h1>
     </StripeCheckout>
                  
                </div>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};


const CartSingle = ({ data, quantityChangeHandler, removeFromCartHandler }) => {
  const [value, setValue] = useState(data?.qty);
  const totalPrice = data?.price * value;

  const increment = (data) => {
    if (data?.stock < value) {
      toast?.error("Product stock limited!");
    } else {
      setValue(value + 1);
      const updateCartData = { ...data, qty: value + 1 };
      quantityChangeHandler(updateCartData);
    }
  };

  const decrement = (data) => {
    setValue(value === 1 ? 1 : value - 1);
    const updateCartData = { ...data, qty: value === 1 ? 1 : value - 1 };
    quantityChangeHandler(updateCartData);
  };

//....................................






  return (
    <div className="border-b p-4">
      <div className="w-full flex items-center">
        <div>
          <div
            className={`bg-white border border-[#3F1B11] rounded-full w-[25px] h-[25px] ${styles.noramlFlex} justify-center cursor-pointer`}
            onClick={() => increment(data)}
          >
            <HiPlus size={18} color="#3F1B11" />
          </div>
          <span className="pl-[10px]">{data?.qty}</span>
          <div
            className="bg-white border border-[#3F1B11] rounded-full w-[25px] h-[25px] flex items-center justify-center cursor-pointer"
            onClick={() => decrement(data)}
          >
            <HiOutlineMinus size={16} color="#3F1B11" />
          </div>
        </div>
        <img
          // src={`${data?.images?.[0]?.url}`}
          src={`http://localhost:3002/${data.image}`}
          alt=""
          className="w-[130px] h-min ml-2 mr-2 rounded-[5px]"
        />

        <div className="pl-[5px]">
          <h1 className="font-[800] text-[20px] text-[#891652]">{data?.title}</h1>
          <h4 className="font-[800] text-[20px] text-[#114232]">
            LKR {data?.price} * {value}
          </h4>
          <h4 className="font-[600] text-[17px] pt-[3px] text-[#3F1B11] font-Roboto">
            LKR {totalPrice}
          </h4>
        </div>
        <RxCross1
          className="cursor-pointer"
          onClick={() => removeFromCartHandler(data)}
          size={25}

        />
      </div>
    </div>
  );
};

export default Cart;
