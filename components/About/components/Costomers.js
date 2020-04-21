import React, { useContext } from "react";
import { AppContext } from "../../shared/context/AppContext";
import "./Costumers.css";
const Costomers = () => {
  const { isEng } = useContext(AppContext);
  if (isEng) {
    return (
      <div>
        <section className="clients-section spad">
          <div className="container">
            <div className="client-text">
              <h2>
                A group of productive enterprises that produce or supply Goods,
                Services, or Sources of Income
              </h2>
              <p>
                Sim Noor Yazdan Co. which focuses in research & development,
                innovation in Electric industry and pure energy is looking for
                reducing wasting pure energy through foundemental researches.
                This wasting is due to transmission of the energy or the way of
                saving. This company is also aim at researching and developing
                different kinds of conductions and especially new ones. This
                could be done through the best in hand technology and the latest
                Standards in the world which has got the crucial role in this
                work.
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  }

  if (!isEng) {
    return (
      <div>
        <section className="rtlfont clients-section spad">
          <div className="container">
            <div className="client-text">
              <h2>
                گروهی از شرکتهای تولیدی که کالاها ، خدمات یا منابع درآمد را
                تولید یا عرضه می کنند
              </h2>
              <p>
                شركت سیم نور یزدان كه در تحقیقات و توسعه ، نوآوری در صنعت برق و
                انرژی خالص متمركز است به دنبال كاهش اتلاف انرژی خالص از طریق
                تحقیقات بنیادی است. این هدر رفتن به دلیل انتقال انرژی یا نحوه
                صرفه جویی است. این شرکت همچنین با هدف تحقیق و توسعه انواع
                رفتارها و به ویژه اقدامات جدید انجام شده است. این امر می تواند
                از طریق بهترین فناوری دستی و جدیدترین استانداردهای جهان انجام
                شود که نقش اساسی در این کار داشته است.
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  }
};

export default Costomers;
