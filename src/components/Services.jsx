
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { addTocart } from "../redux/actions/cart .js";
import { useDispatch, useSelector } from 'react-redux';


const Services = () => {
  const [pdfs, setPdfs] = useState([]);
  const [zipFiles, setZipFiles] = useState([]);
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const pdfResponse = await axios.get('http://localhost:3002/get-files');
        setPdfs(pdfResponse.data.data);

        const zipResponse = await axios.get('http://localhost:3002/get-zipfiles');
        setZipFiles(zipResponse.data.data);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    };

    fetchData();
  }, []);

  const addToCartHandler = (id, data) => {
    const isItemExists = cart && cart.find((i) => i?._id === id);
    if (isItemExists) {
      toast.error("Item already in cart!");
    } else {
      if (data.stock < 1) {
        toast.error("Product stock limited!");
      } else {
        const cartData = { ...data, qty: 1 };
        dispatch(addTocart(cartData));
        toast.success("Item added to cart successfully!");
      }
    }
  };

  return (
    <section id="service">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="display-6 text-center mb-4 texttt"><b>RESOURCES FOR IELTS PREPARATION</b></h1>
            <hr className="w-25 mx-auto" />
          </div>
        </div>
        <div className="row mt-5" style={{ zIndex: "0" }}>
          {pdfs.map(pdf => (
            <div key={pdf?._id} className="col-md-3">
              <div className="card p-4">
                <div className="card-body text-center">
                  <h5 className="card-title mb-3 fs-4 fw-bold">{pdf?.title}</h5>
                  <a href={`http://localhost:3002/files/${pdf?.pdf}`} className="btn saj rounded-pill">Preview</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="container">
        <div className="row mt-5">
          {zipFiles.map((zipFile) => (
            <div key={zipFile._id} className="col-md-3">
             <Card className="p-4">
  <Card.Img variant="top" src={`http://localhost:3002/${zipFile.image}`} />
  <Card.Body className="text-center">
    <Card.Title className="fs-4 fw-bold">{zipFile.title}</Card.Title>
    <p className="fs-5 card-text">{zipFile.description}</p>
    <p className="fs-5 text-primary">1000 LKR</p>
    <button className="btn saj rounded-pill" target="_blank" onClick={() => addToCartHandler(zipFile._id, zipFile)}>Add to Cart</button>
  </Card.Body>
</Card>

            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Services;



