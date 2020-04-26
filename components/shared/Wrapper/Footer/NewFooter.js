import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";

import "./NewFooter.css";
const NewFooter = () => {
  const { isEng } = useContext(AppContext);
  if (isEng) {
    return (
      <footer>
        <div className="footer-top ltrfont">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 segment-one md-mb-30 sm-mb-30">
                <h2>Simnoor Yazdan</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Adipisci laudantium fugiat temporibus assumenda nam nobis
                  vitae voluptate ut quidem in.
                </p>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 segment-two md-mb-30 sm-mb-30">
                <h2>useful links</h2>
                <ul>
                  <li>
                    <a href="#">Event</a>
                  </li>
                  <li>
                    <a href="#">support</a>
                  </li>
                  <li>
                    <a href="#">hosting</a>
                  </li>
                  <li>
                    <a href="#">career</a>
                  </li>
                  <li>
                    <a href="#">blog</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 segment-three  sm-mb-30">
                <h2>Follow us</h2>
                <p>
                  Follow us on our social media in order to keep uptodate.Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Adipisci
                  laudantium fugiat
                </p>
                <a href="/facebook">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="/twitter">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="/likedin">
                  <i className="fab fa-linkedin"></i>{" "}
                </a>
                <a href="/pintrest">
                  <i className="fab fa-pinterest"></i>
                </a>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 segment-four  sm-mb-30">
                <h2>newsletter</h2>
                <p>
                  Follow us on our social media in order to keep uptodate.Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Adipisci
                  laudantium fugiat
                </p>
                <form>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="ltrfont p-2"
                  />
                  <input
                    type="submit"
                    value="subscribe"
                    className="my-1 mr-1"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
        <p className="footer-bottom-text">
          Designed and maintain by{" "}
          <a href="http://pouyeshsystem.com/">Pouyesh System</a> &copy;{" "}
          {new Date().getFullYear()}
        </p>
      </footer>
    );
  }

  if (!isEng) {
    return (
      <footer>
        <div className="footer-top rtlfont" style={{ textAlign: "right" }}>
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 segment-four rtlfont md-mb-30  sm-mb-30">
                <h2>خبرنامه</h2>
                <p>
                  استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                  تکنولوژی مورد نیاز و کاربردهای
                </p>
                <form>
                  <input
                    style={{ textAlign: "right" }}
                    type="email"
                    placeholder="ایمیل خود را وارد کنید"
                    className="rtlfont p-2"
                  />
                  <input
                    type="submit"
                    value="اشتراک"
                    style={{ textAlign: "right" }}
                    className="my-1 mr-1"
                  />
                </form>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 segment-three rtlfont md-mb-30 sm-mb-30">
                <h2>ما را دنبال کنید</h2>
                <p>
                  استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است و برای
                </p>
                <a href="/facebook">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="/twitter">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="/likedin">
                  <i className="fab fa-linkedin"></i>{" "}
                </a>
                <a href="/pintrest">
                  <i className="fab fa-pinterest"></i>
                </a>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 rtlfont segment-two sm-mb-30">
                <h2>لینک های مهم</h2>
                <ul>
                  <li>
                    <a href="#">رویداد</a>
                  </li>
                  <li>
                    <a href="#">حمایت</a>
                  </li>
                  <li>
                    <a href="#">میزبانی</a>
                  </li>
                  <li>
                    <a href="#">اشتغال</a>
                  </li>
                  <li>
                    <a href="#">بلاگ</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 segment-one md-mb-30  rtlfont">
                <h2 className="rtlfont">سیم نور یزدان</h2>
                <p>
                  استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                  تکنولوژی مورد نیاز و کاربردهای
                </p>
              </div>
            </div>
          </div>
        </div>
        <p className="footer-bottom-text">
          Designed and maintain by{" "}
          <a href="http://pouyeshsystem.com/">Pouyesh System</a> &copy;{" "}
          {new Date().getFullYear()}
        </p>
      </footer>
    );
  }
};

export default NewFooter;
