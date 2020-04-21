import React, { useContext } from "react";
import { AppContext } from "../../shared/context/AppContext";
import "./ContactForm.css";

const ContactForm = () => {
  const { isEng } = useContext(AppContext);
  if (isEng) {
    return (
      <section className="contact-section" style={{ marginTop: "50px" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-2"></div>
            <div className="col-lg-8">
              <form className="contact-form">
                <div className="row">
                  <div className="col-lg-6">
                    <input type="text" placeholder="Your Name" />
                  </div>
                  <div className="col-lg-6">
                    <input type="text" placeholder="Your Email" />
                  </div>
                  <div className="col-lg-4"></div>
                  <div className="col-lg-12 mb-4">
                    <input type="text" placeholder="Subject" />
                    <textarea
                      className="text-msg"
                      placeholder="Message"
                    ></textarea>
                    <div className="d-flex justify-content-center">
                      <a className="btn  send-message-btn">Send Message</a>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-2"></div>
          </div>
        </div>
      </section>
    );
  }

  if (!isEng) {
    return (
      <section
        className="rtlfont contact-section"
        style={{ marginTop: "50px", textAlign: "right" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-2"></div>
            <div className="col-lg-8">
              <form className="contact-form">
                <div className="row">
                  <div className="col-lg-6">
                    <input
                      style={{ textAlign: "right" }}
                      type="text"
                      placeholder="نام شما"
                    />
                  </div>
                  <div className="col-lg-6">
                    <input
                      style={{ textAlign: "right" }}
                      type="text"
                      placeholder="ایمیل شما"
                    />
                  </div>
                  <div className="col-lg-4"></div>
                  <div className="col-lg-12 mb-4">
                    <input
                      style={{ textAlign: "right" }}
                      type="text"
                      placeholder="موضوع پیام"
                    />
                    <textarea
                      className="text-msg"
                      placeholder="پیام"
                      style={{ textAlign: "right" }}
                    ></textarea>
                    <div className="d-flex justify-content-center">
                      <a className="btn  send-message-btn">ارسال پیام</a>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-2"></div>
          </div>
        </div>
      </section>
    );
  }
};

export default ContactForm;
