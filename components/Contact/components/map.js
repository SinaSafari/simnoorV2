import React, { useContext } from "react";
import { AppContext } from "../../shared/context/AppContext";

const Map = () => {
  const { isEng } = useContext(AppContext);

  if (isEng) {
    return (
      <>
        <div className="container ltrfont">
          <div className="row">
            <div className="col-lg-6 mt-5">
              <div className="contact-text">
                <h2>Get in Touch</h2>
                <p>
                  Please leave comments and if you want more information about
                  each one of our products and services, contanct us by this
                  form or use our email address:{" "}
                  <a href="mailto: simnooryazdan@yahoo.com">Send Email</a>
                </p>
                <div className="header-info-box">
                  <div className="hib-icon">
                    <img src="/icons/phone.png" />
                  </div>
                  <div className="hib-text">
                    <h6>(+98)21 88661004</h6>
                    <p>info@simnoorco.com</p>
                  </div>
                </div>
                <div className="header-info-box">
                  <div className="hib-icon">
                    <img src="/icons/mapmarker.png" />
                  </div>
                  <div className="hib-text">
                    <h6>No. 11, 33 Alley, Alvand street</h6>
                    <p>Tehran, Iran</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-5">
              <div style={{ height: "100%" }}>
                <div className="contact-text">
                  <h2 className="">Find us on map</h2>
                </div>
                <div className="map-section">
                  <div className="map">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d404.79921886033526!2d51.41340818033649!3d35.74112565755768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e06b6915379e9%3A0x89feacab76dc7252!2sTehran%20Province%2C%20Tehran%2C%20District%206%2C%20Alvand%20St%2C%20Iran!5e0!3m2!1sen!2sde!4v1582990219397!5m2!1sen!2sde"
                      frameBorder="0"
                      style={{ border: "0", height: "100%", width: "100%" }}
                      allowFullScreen=""
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  if (!isEng) {
    return (
      <>
        <div className="container rtlfont" style={{ textAlign: "right" }}>
          <div className="row">
            <div className="col-lg-6 mt-5">
              <div style={{ height: "100%" }}>
                <div className="contact-text">
                  <h2 className="">ما روی نقشه</h2>
                </div>
                <div className="map-section">
                  <div className="map">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d404.79921886033526!2d51.41340818033649!3d35.74112565755768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e06b6915379e9%3A0x89feacab76dc7252!2sTehran%20Province%2C%20Tehran%2C%20District%206%2C%20Alvand%20St%2C%20Iran!5e0!3m2!1sen!2sde!4v1582990219397!5m2!1sen!2sde"
                      frameBorder="0"
                      style={{
                        border: "0",
                        height: "100%",
                        width: "100%",
                      }}
                      allowFullScreen=""
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-5">
              <div className="contact-text">
                <h2>با ما در تماس باشید</h2>
                <p>
                  لطفاً نظر خود را بیان کنید و اگر می خواهید اطلاعات بیشتری در
                  مورد هر یک از محصولات و خدمات ما داشته باشید ، با ما در این
                  فرم تماس بگیرید یا از آدرس ایمیل ما استفاده کنید:{" "}
                  <a href="mailto: simnooryazdan@yahoo.com">ارسال ایمیل</a>
                </p>
                <div className="header-info-box">
                  <div className="hib-icon">
                    <img src="/icons/phone.png" />
                  </div>
                  <div className="hib-text">
                    <h6>(+98)21 88661004</h6>
                    <p className="ltrfont">info@simnoorco.com</p>
                  </div>
                </div>
                <div className="header-info-box">
                  <div className="hib-icon">
                    <img src="/icons/mapmarker.png" />
                  </div>
                  <div className="hib-text">
                    <h6>خیابان الوند، خیابان ۳۳، شماره ۱۱</h6>
                    <p>تهران، ایران</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default Map;
