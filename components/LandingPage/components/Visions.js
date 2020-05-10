import React, { useContext } from "react";
import { AppContext } from "../../shared/context/AppContext";

const Visions = () => {
  const { isEng } = useContext(AppContext);
  if (isEng) {
    return (
      <div className="container my-5">
        <h2 className="my-5" style={{ textAlign: "center" }}>
          <span style={{ color: "#000", borderBottom: "5px solid orange" }}>
            Visons and Missions
          </span>
        </h2>
        <div className="row">
          <div className="col-md-6 col-sm-12 mb-3 sm-mb-5">
            <div className="card" style={{ border: "1px solid orange" }}>
              <div className="card-body">
                <h5 className="card-title">Vision</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
              <img src="img/slide6.jpg" className="card-img-top" alt="..." />
            </div>
          </div>
          <div className="col-md-6 col-sm-12 mb-3">
            <div className="card" style={{ border: "1px solid orange" }}>
              <div className="card-body">
                <h5 className="card-title">Mission</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
              <img src="img/slide6.jpg" className="card-img-top" alt="..." />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!isEng) {
    return (
      <div className="container rtlfont my-5" style={{ textAlign: "right" }}>
        <h2 className="my-5" style={{ textAlign: "center" }}>
          <span style={{ color: "#000", borderBottom: "5px solid orange" }}>
            افق دید و اهداف
          </span>
        </h2>
        <div className="row">
          <div className="col-md-6 col-sm-12 mb-3 sm-mb-5">
            <div className="card" style={{ border: "1px solid orange" }}>
              <div className="card-body">
                <h5 className="card-title">افق دید</h5>
                <p className="card-text">
                  استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                  تکنولوژی مورد نیاز و کاربردهای
                </p>
              </div>
              <img src="img/slide6.jpg" className="card-img-top" alt="..." />
            </div>
          </div>
          <div className="col-md-6 col-sm-12 mb-3">
            <div className="card" style={{ border: "1px solid orange" }}>
              <div className="card-body">
                <h5 className="card-title">اهداف</h5>
                <p className="card-text">
                  استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                  تکنولوژی مورد نیاز و کاربردهای
                </p>
              </div>
              <img src="img/slide6.jpg" className="card-img-top" alt="..." />
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Visions;
