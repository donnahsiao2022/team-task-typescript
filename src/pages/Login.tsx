import Navbar from "../components/Navbar";

const Login = () => {
  return (
    <>
      <Navbar isEscapeDocumentFlow={false} isShowMenu={false} />
      <section>
        <div className="container-fluid px-0">
          <div className="row row-cols-2 me-0">
            <div className="col pe-0">
              <figure className="mb-0">
                <img className="img-fluid" src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/register.png" alt="" />
              </figure>
            </div>
            <div className="col px-0">
              <div className="position-relative">
                <div style={{ top: '72px' }} className="position-absolute">
                  <figure className="mb-0">
                    <img className="img-fluid" src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/line3.png" alt="" />
                  </figure>
                </div>
              </div>
              <div style={{ width: '416px' }} className="mx-auto mt-10">
                <div className="d-flex flex-column">
                  <p className="mb-2 text-primary">享樂酒店，誠摯歡迎</p>
                  <h1 className="mb-7">立即開始旅程</h1>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">電子信箱</label>
                    <input type="email" className="form-control" id="email" placeholder="hello@example.com" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">密碼</label>
                    <input type="password" className="form-control" id="password" />
                  </div>
                  <div className="mb-7">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="form-check mb-0">
                        <input className="form-check-input" type="checkbox" id="rememberAccount" />
                        <label className="form-check-label" htmlFor="rememberAccount">
                          記住帳號
                        </label>
                      </div>
                      <a className="d-block" href="#">忘記密碼？</a>
                    </div>
                  </div>
                  <div className="mb-7">
                    <button type="button" className="py-3 btn btn-light btn-lg w-100 fw-bold">會員登入</button>
                  </div>
                  <div className="d-flex align-items-center">
                    <p className="mb-0">沒有會員嗎？</p>
                    <a className="ms-2" href="#">前往註冊</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
