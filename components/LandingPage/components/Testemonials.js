import React, { useContext } from "react";
import { AppContext } from "../../shared/context/AppContext";

const Testemonials = () => {
  const { isEng } = useContext(AppContext);
  if (isEng) {
    return (
      <div className="container ltrfont">
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
            <h3>Client Testemonials</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua Egestas
              purus viverra accumsan in nisl nisi Arcu cursus vitae congue
              mauris rhoncus aenean vel elit scelerisque In egestas erat
              imperdiet sed euismod nisi porta lorem mollis Morbi tristique
              senectus et netus Mattis pellentesque id nibh tortor id aliquet
              lectus proin Sapien faucibus et molestie ac feugiat sed lectus
              vestibulum Ullamcorper velit sed ullamcorper morbi tincidunt
              ornare massa eget Dictum varius duis at consectetur lorem Nisi
              vitae suscipit tellus mauris a diam maecenas sed enim
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (!isEng) {
    return (
      <div className="container rtlfont" style={{ textAlign: "right" }}>
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
            <h3>نظر مشتریان</h3>
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
              ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
              و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای
              زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و
              متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان
              رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی
              ایجاد کرد در این صورت می توان امید داشت که تمام و دشواری موجود در
              ارائه راهکارها
            </p>
          </div>
        </div>
      </div>
    );
  }
};

export default Testemonials;
