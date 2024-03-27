// import React, { useState } from "react";
// import StripeCheckout from "react-stripe-checkout";

// const Payment  = ({handlePaymentSuccess}) => {

//   const [product , setProduct] = useState({
//     name :'download zip file',
//     price : 1000,
//     productBy : 'Learnzia'
//   })
//   const makePayment = async(token) => {
//     const body = {
//       token,
//       product
//     }
//     const headers ={
//       'Content-Type':"application/json"
//     }
//     return fetch('http://localhost:3002/api/payment/payment',{
//       method:'POST',
//       headers,
//       body :JSON.stringify(body)
//     }).then((response) => {
//       handlePaymentSuccess()
//       console.log(response)
//     }).catch((err) => {
//       console.log(err)
//     })

//   }


//   return(
//     <div>
//      <StripeCheckout
//        name="Payment"
//        amount={product.price}
//        currency="INR"
//        token={makePayment}
//        stripeKey="pk_test_51OsfJmRtWsi1gN3bqyLk6JSrNZeMpYREDc1JZIrXHUu64ihxpzGSt3V6Z5g3fdMs6hMEKIPFU3AeQN5CsnNUKYfs005BZ5c5SE"
//      >
//       <button>Payment sajee</button>
//      </StripeCheckout>
//     </div>
//   )


// }
// export default Payment