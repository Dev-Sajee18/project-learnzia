// import React, {useState} from 'react';

// const Contact = () => {
    
//     const [msg, setMsg] = useState({
//         name : "",
//         email : "",
//         message : ""
//       });

//       // Handle Inputs
//   const handleChange = (event) =>{
//     let name = event.target.name;
//     let value = event.target.value;

//     setMsg({...msg, [name]:value});
//   }
    
//         // Handle Submit
// const handleSubmit = async (event)=>{
//     event.preventDefault();
//     // Object Destructuring
//     // Store Object Data into Variables
//     const {name, email, message} = msg;
//     try {
//         //It is Submitted on port 3000 by default
//         // Which is Front End but we need to
//         // Submit it on Backend which is on
//         // Port 3001. So we need Proxy.
//     const res = await fetch('/message', {
//     method: "POST",
//     headers : {
//     "Content-Type": "application/json"
//     },
//     body : JSON.stringify({
//     name, email, message
//     })
//     });

//     if(res.status === 400 || !res) {
//         window.alert("Message Not Sent. Try Again Later")
//         }else{
//         window.alert("Message Sent");
//         setMsg({
//             name : "",
//             email : "",
//             message : ""
//         })
//         }
//     } catch (error) {
//         console.log(error);
//     }
//     }

//     return (
//         <div>
//             <section id="contact">
//                 <div className="container my-5 py-5">
//                     <div className="row mb-5">
//                         <div className="col-12">
//                             <h3 className=" text-center mb-0 " style={{fontSize:"60px", color:"purple" }}>Contact Us</h3>
//                             {/* <h1 className="fs-1 display-6 text-center mb-4">
//                                 Have Some<b>Question?</b>
//                             </h1> */}
//                             <hr className="w-25 mx-auto" />
//                         </div>
//                     </div>
//                     <div className="row">
                        



//                         <div className="col-md-6">
//                             <form onSubmit={handleSubmit} method="POST">
//                                 <div class="mb-3">
//                                     <label for="name" class="form-label">
//                                         Your Name</label>
//                                     <input 
//                                     type="text" 
//                                     class="form-control" 
//                                     id="exampleFormControlInput1" 
//                                     placeholder="Robert Downy"
//                                     name="name" 
//                                     value={msg.name}
//                                     onChange={handleChange}
//                                     style={{border: '2px solid blue'}}
//                                      />
//                                 </div>
//                                 <div class="mb-3">
//                                     <label for="exampleFormControlInput1" class="form-label">
//                                         Email address</label>
//                                     <input 
//                                     type="email" 
//                                     class="form-control" 
//                                     id="exampleFormControlInput1" 
//                                     placeholder="name@example.com" 
//                                     name="email" 
//                                     value={msg.email}
//                                     onChange={handleChange}
//                                     style={{border: '2px solid blue'}}
//                                     />
//                                 </div>
//                                 <div class="mb-3">
//                                     <label for="exampleFormControlTextarea1" class="form-label">
//                                         Your Message</label>
//                                     <textarea 
//                                     class="form-control" 
//                                     id="exampleFormControlTextarea1" 
//                                     rows="5"
//                                     name="message" 
//                                     value={msg.message}
//                                     onChange={handleChange}
//                                     style={{border: '2px solid blue', color:"blue"}}
//                                     >
//                                     </textarea>
//                                 </div>
//                                 <button type="submit" className="btn btn-outline-primary rounded-pill px-4">
//                                     Send Message <i className="fa fa-paper-plane ms-2"></i></button>
//                             </form> 
//                         </div>

//                         <div className="col-md-6">
//                             <img src="/assets/contact1.svg" alt="Contact" className="w-75" style={{margin:"0px 0px 200px 150px"}} />
//                         </div>




//                     </div>
//                 </div>
//             </section>
//         </div>
//     )
// }

// export default Contact;




import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    const [msg, setMsg] = useState({
        name: "",
        email: "",
        message: ""
    });

    // Handle Inputs
    const handleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;

        setMsg({ ...msg, [name]: value });
    }

    // Handle Submit
    const handleSubmit = async (event) => {
        event.preventDefault();
        const { name, email, message } = msg;
        try {
            const res = await fetch('/message', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ name, email, message })
            });

            if (res.status === 400 || !res) {
                toast.error("Message Not Sent. Try Again Later");
            } else {
                toast.success("Message Sent");
                setMsg({ name: "", email: "", message: "" });
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <section id="contact">
                <div className="container my-5 py-5">
                    <div className="row mb-5">
                        <div className="col-12">
                            <h3 className=" text-center mb-0 " style={{ fontSize: "60px", color: "purple" }}>Contact Us</h3>
                            <hr className="w-25 mx-auto" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <form onSubmit={handleSubmit} method="POST">
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Your Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="exampleFormControlInput1"
                                        placeholder="Robert Downy"
                                        name="name"
                                        value={msg.name}
                                        onChange={handleChange}
                                        style={{ border: '2px solid blue' }}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="exampleFormControlInput1"
                                        placeholder="name@example.com"
                                        name="email"
                                        value={msg.email}
                                        onChange={handleChange}
                                        style={{ border: '2px solid blue' }}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Your Message</label>
                                    <textarea
                                        className="form-control"
                                        id="exampleFormControlTextarea1"
                                        rows="5"
                                        name="message"
                                        value={msg.message}
                                        onChange={handleChange}
                                        style={{ border: '2px solid blue', color: "blue" }}
                                    />
                                </div>
                                <button type="submit" className="btn btn-outline-primary rounded-pill px-4">Send Message <i className="fa fa-paper-plane ms-2"></i></button>
                            </form>
                        </div>
                        <div className="col-md-6">
                            <img src="/assets/contact1.svg" alt="Contact" className="w-75" style={{ margin: "0px 0px 200px 150px" }} />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact;
