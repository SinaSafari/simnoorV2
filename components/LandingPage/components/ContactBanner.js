import React, { useContext, useCallback } from "react";
import Link from "next/link";
import { AppContext } from "../../shared/context/AppContext";
import "./ContactBanner.css";

const ContactBanner = () => {
  const { isEng } = useContext(AppContext);

  if (isEng) {
    return (
      <div className="my-4">
        <section className="cta-section" style={{ backgroundColor: "orange" }}>
          <div className="container">
            <div className="row">
              <div className="col-lg-9 d-flex align-items-center">
                <h2>We produce or supply Goods, Services, or Sources</h2>
              </div>
              <div className="col-lg-3 text-lg-right">
                <Link href="/about">
                  <a className="site-btn sb-dark contactBtn">About us</a>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
  if (!isEng) {
    return (
      <div className="my-4 rtlfont">
        <section className="cta-section" style={{ backgroundColor: "orange" }}>
          <div className="container">
            <div className="row">
              <div className="col-lg-3 text-lg-right">
                <Link href="/about">
                  <a className="site-btn sb-dark contactBtn">درباره ما</a>
                </Link>
              </div>
              <div
                className="col-lg-9 d-flex align-items-center "
                style={{ textAlign: "right" }}
              >
                <h2>ما کالاها ، خدمات یا منابع را تولید یا عرضه می کنیم</h2>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
};

export default ContactBanner;
