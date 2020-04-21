import React, { useContext } from "react";
import { AppContext } from "../../shared/context/AppContext";
import Link from "next/link";
import "./Products.css";

const FEATURED_PRODUCTS = [
  {
    id: 1,
    EN: {
      title: "Product 1",
      text:
        "With supporting text below as a natural lead-in to additional content.",
    },
    FA: {
      title: "محصول شماره ۱",
      text:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",
    },
  },
  {
    id: 2,
    EN: {
      title: "Product 2",
      text:
        "With supporting text below as a natural lead-in to additional content.",
    },
    FA: {
      title: "محصول شماره ۲",
      text:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",
    },
  },
  {
    id: 3,
    EN: {
      title: "Product 3",
      text:
        "With supporting text below as a natural lead-in to additional content.",
    },
    FA: {
      title: "محصول شماره ۳",
      text:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",
    },
  },
];

const Products = () => {
  const { isEng } = useContext(AppContext);
  if (isEng) {
    return (
      <>
        <h3 className="ltrfont mt-5 " style={{ textAlign: "center" }}>
          <span className="product-title">
            The Total Quality Management of All Kind of Conductors
          </span>
        </h3>
        <div className="products my-5 container">
          {FEATURED_PRODUCTS.map((product) => {
            return (
              <div key={product.id} className="card m-2">
                <div className="card-body">
                  <h5 className="card-title">{product.EN.title}</h5>
                  <p className="card-text">{product.EN.text}</p>
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
            <a className="btn product-btn">Our Products</a>
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
        <div
          className="rtlfont products my-5 container"
          style={{ textAlign: "right" }}
        >
          {FEATURED_PRODUCTS.map((product) => {
            return (
              <div key={product.id} className="card m-2">
                <div className="card-body">
                  <h5 className="card-title">{product.FA.title}</h5>
                  <p className="card-text">{product.FA.text}</p>
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
            <a className="btn btn-primary product-btn rtlfont">محصولات ما</a>
          </Link>
        </div>
      </>
    );
  }
};

export default Products;
