import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const MemberLayout = () => {
  return (
    <>
      <Navbar isEscapeDocumentFlow={false} />
      <figure className="mb-8">
        <img className="img-fluid" src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/hero.png" alt="" />
      </figure>
      <div className="mb-8 container">
        <div className="row justify-content-center">
          <div className="col-9">
            <ul className="nav">
              <li className="nav-item">
                <a className="px-5 py-3 nav-link text-white active" href="#">個人資料</a>
              </li>
              <li className="nav-item">
                <a className="px-5 py-3 nav-link text-white" href="#">我的訂單</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mb-9 container">
        <div className="row justify-content-center">
          <div className="col-9">
            <Outlet />
          </div>
        </div>
      </div>
      <figure>
        <img className="img-fluid" src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/line2.png" alt="" />
      </figure>
      <Footer />
    </>
  );
};

export default MemberLayout;
