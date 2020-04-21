import React, { useContext } from "react";
import { AppContext } from "../../shared/context/AppContext";
import Link from "next/link";
import "./Products.css";

const ALL_PRODUCTS = [
  {
    id: 1,
    img: "cogwheel",
    title: "AAC",
    text: "All Aluminium Conductor ",
  },
  {
    id: 2,
    img: "cogwheel",
    title: "AAAC",
    text: "All Aluminium Alloy Conductors",
  },
  {
    id: 3,
    img: "cogwheel",
    title: "ACSR",
    text: "ACSR/GA, ACSR/AW, ACSR/TW",
  },
  {
    id: 4,
    img: "cogwheel",
    title: "ACSS",
    text: "ACSS/GA, ACSS/AW, ACSS/TW",
  },
  {
    id: 5,
    img: "cogwheel",
    title: "ACCC",
    text: "ACCC",
  },
  {
    id: 6,
    img: "cogwheel",
    title: "OPGW",
    text: "OPGW",
  },
  {
    id: 7,
    img: "cogwheel",
    title: "ACS",
    text: "ACS",
  },
  {
    id: 8,
    img: "cogwheel",
    title: "Rod",
    text: "Rod All 07, Rod AL",
  },
];

const ProductsList = () => {
  const { isEng } = useContext(AppContext);
  if (isEng) {
    return (
      <>
        <h3 className="ltrfont mt-5 " style={{ textAlign: "center" }}>
          <span className="product-title">
            The Total Quality Management of All Kind of Conductors
          </span>
        </h3>
        <div className="products my-5 container ltrfont">
          {ALL_PRODUCTS.map((product) => {
            return (
              <div key={product.id} className="card m-2">
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">{product.text}</p>
                  {/* <a href="#" className="btn btn-primary">
                  Go somewhere
                </a> */}
                </div>
              </div>
            );
          })}
        </div>
        <div className="d-flex justify-content-center my-5">
          <Link href="/products">
            <a className="btn product-btn">Download brochure</a>
          </Link>
        </div>
      </>
    );
  }

  if (!isEng) {
    return (
      <>
        <h3 className="rtlfont mt-5" style={{ textAlign: "center" }}>
          <span className="product-title">
            مدیریت کیفیت کلی کلیه انواع رساناها
          </span>
        </h3>
        <div className="ltrfont products my-5 container">
          {ALL_PRODUCTS.map((product) => {
            return (
              <div key={product.id} className="card m-2">
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">{product.text}</p>
                  {/* <a href="#" className="btn btn-primary">
                  Go somewhere
                </a> */}
                </div>
              </div>
            );
          })}
        </div>
        <div className="d-flex justify-content-center my-5">
          <Link href="/products">
            <a className="btn btn-primary product-btn rtlfont">دانلود بروشور</a>
          </Link>
        </div>
      </>
    );
  }
};

export default ProductsList;
