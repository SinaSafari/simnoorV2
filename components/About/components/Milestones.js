import React, { useContext } from "react";
import "./Milestones.css";
import { AppContext } from "../../shared/context/AppContext";
const MILESTONS = [
  {
    id: 1,
    img: "plug",
    EN: {
      subject: "Clients",
      number: "725",
      paragraph: "In 10 Years",
    },
    FA: { subject: "مشتری", number: "725", paragraph: "در ۱۰ سال" },
  },
  {
    id: 2,
    img: "light",
    EN: {
      subject: "Growth",
      number: "45%",
      paragraph: "In Production",
    },
    FA: { subject: "رشد", number: "45%", paragraph: "در تولیدات" },
  },
  {
    id: 3,
    img: "trafficCone",
    EN: { subject: "Projects", number: "59", paragraph: "AAC and AAAC" },
    FA: { subject: "پروژه ها", number: "59", paragraph: "AAC و AAAC" },
  },
  {
    id: 4,
    img: "worker",
    EN: {
      subject: "Emploees",
      number: "138",
      paragraph: "Enginners and clerks",
    },
    FA: {
      subject: "کارکنان",
      number: "138",
      paragraph: "مهندسین و کارمندان",
    },
  },
];

function MilestoneItem({ number, paragraph, subject }) {
  return (
    <div className="col-lg-3 col-sm-6 col-xs-1 d-flex justify-content-center">
      <div className="milestone">
        <div className="milestone-icon">
          {/* <ImageWrapper iconName={img} /> */}
          {/* <img src={img} /> */}
        </div>
        <div className="milestone-text">
          <span>{subject}</span>
          <h2>{number}</h2>
          <p>{paragraph} </p>
        </div>
      </div>
    </div>
  );
}

const Milestones = () => {
  const { isEng } = useContext(AppContext);
  if (isEng) {
    return (
      <section className="milestones-section set-bg grad">
        <div className="container text-white  ">
          <div className="row ">
            {MILESTONS.map((item) => (
              <MilestoneItem
                className="item"
                key={item.id}
                //   img={item.img}
                number={item.EN.number}
                subject={item.EN.subject}
                paragraph={item.EN.paragraph}
              />
            ))}
          </div>
        </div>
        <style jsx>
          {`
            .grad {
              background: linear-gradient(to left, #fc4a1a 0%, #f7b733 100%);
            }
          `}
        </style>
      </section>
    );
  }

  if (!isEng) {
    return (
      <section
        className="rtlfont milestones-section set-bg grad"
        style={{ textAlign: "right" }}
      >
        <div className="container text-white  ">
          <div className="row ">
            {MILESTONS.map((item) => (
              <MilestoneItem
                className="item"
                key={item.id}
                //   img={item.img}
                number={item.FA.number}
                subject={item.FA.subject}
                paragraph={item.FA.paragraph}
              />
            ))}
          </div>
        </div>
        <style jsx>
          {`
            .grad {
              background: linear-gradient(to left, #fc4a1a 0%, #f7b733 100%);
            }
          `}
        </style>
      </section>
    );
  }
};

export default Milestones;
