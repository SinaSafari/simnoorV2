import React, { useContext } from "react";
import { AppContext } from "../../shared/context/AppContext";
import "./OurTeam.css";

const TEAM_MEMBERS = [
  {
    id: 1,
    img: "/img/bg1.jpg",
    EN: { title: "Michael Smith", text: "Engeneer Chemist" },
    FA: { title: "مایکل اسمیث", text: "مهندس شیمی" },
  },
  {
    id: 2,
    img: "/img/bg2.jpg",
    EN: { title: "Jessica Steing", text: "Engeneer Chemist" },
    FA: { title: "جسیکا استینگ", text: "مهندس شیمی" },
  },
  {
    id: 3,
    img: "/img/bg3.jpg",
    EN: { title: "Chris Williams", text: "Engeneer Chemist" },
    FA: { title: "کریس ویلیامز", text: "مهندس شیمی" },
  },
];

const OurTeam = () => {
  const { isEng } = useContext(AppContext);
  if (isEng) {
    return (
      <section
        className="team-section spad ltrfont "
        style={{ backgroundColor: "orange", textAlign: "center" }}
      >
        <div className="container">
          <div className="team-text">
            <h2>Our Amazing Team</h2>
            <p>
              Some of our outstanding Engineers who focus in research &
              development, innovation in Electric industry and pure energy is
              looking for reducing wasting pure energy through foundemental
              researches.
            </p>
          </div>

          <div className="team-card">
            {TEAM_MEMBERS.map((team) => {
              return (
                <div
                  key={team.id}
                  className="card inner-card m-5"
                  style={{ width: "18rem" }}
                >
                  <img
                    className="card-img-top"
                    src={team.img}
                    alt="Card image cap"
                    width="400px"
                    height="300px"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{team.EN.title}</h5>
                    <p className="card-text">{team.EN.text}</p>
                    <a href="#" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }

  if (!isEng) {
    return (
      <section
        className="team-section spad rtlfont"
        style={{ backgroundColor: "orange", textAlign: "center" }}
      >
        <div className="container">
          <div className="team-text">
            <h2>تیم شگفت انگیز ما</h2>
            <p>
              برخی از مهندسین برجسته ما که در تحقیقات و توسعه ، نوآوری در صنعت
              برق و انرژی خالص تمرکز می کنند ، به دنبال کاهش اتلاف انرژی خالص از
              طریق تحقیقات بنیادی هستند.
            </p>
          </div>

          <div className="team-card">
            {TEAM_MEMBERS.map((team) => {
              return (
                <div
                  key={team.id}
                  className="card inner-card m-5"
                  style={{ width: "18rem" }}
                >
                  <img
                    className="card-img-top"
                    src={team.img}
                    alt="Card image cap"
                    width="400px"
                    height="300px"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{team.FA.title}</h5>
                    <p className="card-text">{team.FA.text}</p>
                    <a href="#" className="btn btn-primary">
                      رزومه
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
};

export default OurTeam;
