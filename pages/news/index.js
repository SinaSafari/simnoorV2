import Link from "next/link";
import { useContext } from "react";
import { AppContext } from "../../components/shared/context/AppContext";

const NewsList = [
  {
    id: 1,
    title: "News Title No.01",
    FATitle: "عنوان شماره ۱",
    summeryText:
      "No.01 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ",
    FASummeryText:
      "لورم ایپسوم یا طرح‌نما  به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از ا",
  },
  {
    id: 2,
    title: "News Title No.02",
    FATitle: "عنوان شماره ۲",
    summeryText:
      "No.02 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when ",
    FASummeryText:
      "لورم ایپسوم یا طرح‌نما  به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از ا",
  },
  {
    id: 3,
    title: "News Title No.03",
    FATitle: "عنوان شماره ۳",
    summeryText:
      "No.03 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took ",
    FASummeryText:
      "لورم ایپسوم یا طرح‌نما  به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از ا",
  },
];
export default function News() {
  const { isEng } = useContext(AppContext);

  if (isEng) {
    return (
      <div className="container my-5">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 ">
            <h4 className="mb-4">
              <span style={{ borderBottom: "3px solid orange" }}>News</span>
            </h4>
            {NewsList.map((e, i) => (
              <div
                class="card mb-5"
                style={{ Width: "100%", borderColor: "orange" }}
              >
                <div class="row no-gutters">
                  <div class="col-md-4">
                    <img src="/img/bg1.jpg" class="card-img" alt="..." />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">{e.title}</h5>
                      <p class="card-text">{e.summeryText}</p>
                      <p class="card-text">
                        <Link as={`/news/${e.id}`} href="/news/[id]">
                          <a>Read More</a>
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (!isEng) {
    return (
      <div className="container my-5 rtlfont" style={{ textAlign: "right" }}>
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 ">
            <h4 className="mb-4">
              <span style={{ borderBottom: "3px solid orange" }}>اخبار</span>
            </h4>
            {NewsList.map((e, i) => (
              <div
                class="card mb-5"
                style={{ Width: "100%", borderColor: "orange" }}
              >
                <div class="row no-gutters">
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">{e.FATitle}</h5>
                      <p class="card-text">{e.FASummeryText}</p>
                      <p class="card-text">
                        <Link as={`/news/${e.id}`} href="/news/[id]">
                          <a>ادامه مطلب</a>
                        </Link>
                      </p>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <img src="/img/bg1.jpg" class="card-img" alt="..." />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
