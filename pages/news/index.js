import Link from "next/link";

const NewsList = [
  {
    id: 1,
    title: "News Title No.01",
    summeryText:
      "No.01 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ",
  },
  {
    id: 2,
    title: "News Title No.02",
    summeryText:
      "No.02 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when ",
  },
  {
    id: 3,
    title: "News Title No.03",
    summeryText:
      "No.03 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took ",
  },
];
export default function News() {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-lg-3 col-md-3 col-sm-12 ">
          <h4 className="mb-4">
            <span style={{ borderBottom: "3px solid orange" }}>News List</span>
          </h4>
          <ul className="list-group list-group my-3">
            {NewsList.map((e, i) => (
              <li className="list-group-item">
                <Link as={`/news/${e.id}`} href="/news/[id]">
                  <a>{e.title}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-lg-9 col-md-9 col-sm-12 ">
          <h4 className="mb-4">
            <span style={{ borderBottom: "3px solid orange" }}>News</span>
          </h4>
          {NewsList.map((e, i) => (
            // <div className="jumbotron" key={i}>
            //   <h1 className="display-4">{e.title}</h1>
            //   <p className="lead">{e.summeryText}</p>
            //   <Link as={`/news/${e.id}`} href="/news/[id]">
            //     <a className="btn btn-primary btn-lg" href="#" role="button">
            //       Learn more
            //     </a>
            //   </Link>
            // </div>
            <div class="card mb-3" style={{ Width: "100%" }}>
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
