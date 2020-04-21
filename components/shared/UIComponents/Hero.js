import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Link from "next/link";
const Hero = ({ ENtitle, FAtitle }) => {
  const { isEng } = useContext(AppContext);

  if (isEng) {
    return (
      <div
        className=" position-relative overflow-hidden p-3 text-center bg-light"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(15, 32, 39, 0.52), rgba(50, 105, 129, 0.73)),url('/img/slide8.jpg')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain, cover",
          margin: "0",
        }}
      >
        <div className="col-md-5 p-lg-5 mx-auto my-5">
          <h1 className="display-4 font-weight-normal text-light">
            Simnoor Yazdan&reg;
          </h1>
          <p className="lead font-weight-normal text-light">
            {/* And an even wittier subheading to boot. Jumpstart your marketing
            efforts with this example based on Apple's marketing pages. */}
            {ENtitle}
          </p>
          <Link href="/products">
            <a className="btn btn-outline-light">Products</a>
          </Link>
        </div>
        <div className="product-device box-shadow d-none d-md-block"></div>
        <div className="product-device product-device-2 box-shadow d-none d-md-block"></div>
      </div>
    );
  }
  if (!isEng) {
    return (
      <div
        className="rtlfont position-relative overflow-hidden p-3 text-center bg-light"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(15, 32, 39, 0.52), rgba(50, 105, 129, 0.73)),url('/img/slide8.jpg')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain, cover",

          margin: "0",
        }}
      >
        <div className="col-md-5 p-lg-5 mx-auto my-5">
          <h1 className="display-4 font-weight-normal text-light">
            <sup style={{ fontSize: "20px" }}>&reg;</sup>
            سیم نور یزدان
          </h1>
          <p className="lead font-weight-normal text-light">
            {/* لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله */}
            {FAtitle}
          </p>
          <Link href="/products">
            <a className="btn btn-outline-light">محصرلات</a>
          </Link>
        </div>
        <div className="product-device box-shadow d-none d-md-block"></div>
        <div className="product-device product-device-2 box-shadow d-none d-md-block"></div>
      </div>
    );
  }
};

export default Hero;
