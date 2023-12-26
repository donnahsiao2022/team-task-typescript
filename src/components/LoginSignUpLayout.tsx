import { Outlet } from 'react-router-dom';

import Navbar from "./Navbar";

const LoginSignUpLayout = () => {
  return (
    <>
      <Navbar isEscapeDocumentFlow={false} isShowMenu={false} />
      <section>
        <div className="container-fluid px-xxl-0">
          <div className="row row-cols-xxl-2 me-xxl-0">
            <div className="col pe-xxl-0 d-none d-xxl-block">
              <figure className="mb-0">
                <img className="img-fluid" src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/register.png" alt="" />
              </figure>
            </div>
            <div className="col px-4 px-xxl-0">
              <div className="position-relative">
                <div className="position-absolute login_signUp_lineImg_wrap">
                  <figure className="mb-0">
                    <img className="img-fluid" src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/line3.png" alt="" />
                  </figure>
                </div>
              </div>
              <Outlet />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginSignUpLayout;
