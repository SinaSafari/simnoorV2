import React, { useContext } from "react";
import { AppContext } from "../../shared/context/AppContext";

const AboutSection = () => {
  const { isEng } = useContext(AppContext);

  if (isEng) {
    return (
      <section className="container my-5">
        <div className="row">
          <div className="col-md-6">
            <img
              src="/img/slide6.jpg"
              className="img-fluid"
              width="800px"
              height="600px"
            />
          </div>
          <div className="col-md-6">
            <h2>We produce or supply Goods, & Services</h2>
            <p>
              Sim Noor Yazdan Co. which focuses in research & development,
              innovation in Electric industry and pure energy is looking for
              reducing wasting pure energy through foundemental researches. This
              wasting is due to transmission of the energy or the way of saving.
              This company is also aim at researching and developing different
              kinds of conductions and especially new ones. This could be done
              through the best in hand technology and the latest Standards in
              the world which has got the crucial role in this work.
            </p>
            <div className="about-sign">
              <div className="sign">
                {/* <ImageWrapper iconName="sign" /> */}
              </div>
              <div className="sign-info">
                <h5>Ali Rezaei Hezave</h5>
                <span style={{ color: "#777" }}>
                  Sim Noor Co. CEO Sim Noor Yazdan
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (!isEng) {
    return (
      <section
        className="container my-5 rtlfont"
        style={{ textAlign: "right" }}
      >
        <div className="row">
          <div className="col-md-6">
            <img
              src="/img/slide6.jpg"
              className="img-fluid"
              width="800px"
              height="600px"
            />
          </div>
          <div className="col-md-6">
            <h2>ما کالاها و خدمات را تولید یا عرضه می کنیم</h2>
            <p>
              شركت سیم نور یزدان كه در تحقیقات و توسعه ، نوآوری در صنعت برق و
              انرژی خالص متمركز است به دنبال كاهش اتلاف انرژی خالص از طریق
              تحقیقات بنیادی است. این هدر رفتن به دلیل انتقال انرژی یا نحوه صرفه
              جویی است. این شرکت همچنین با هدف تحقیق و توسعه انواع رفتارها و به
              ویژه اقدامات جدید انجام شده است. این امر می تواند از طریق بهترین
              فناوری دستی و جدیدترین استانداردهای جهان انجام شود که نقش اساسی در
              این کار داشته است.
            </p>
            <div className="about-sign">
              <div className="sign">
                {/* <ImageWrapper iconName="sign" /> */}
              </div>
              <div className="sign-info">
                <h5>علی رضایی هزاوه</h5>
                <span style={{ color: "#777" }}>
                  مدیرعامل اجرایی، سیم نور یزدان
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
};

export default AboutSection;
