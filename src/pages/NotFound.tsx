import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import NotFoundImg from '/NotFound.png';


const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/');
    }, 3000);
  }, []);

  return (
    <>
      <Navbar isEscapeDocumentFlow={false} />
      <div className="py-5 position-relative">
        <figure>
          <img className="img-fluid" src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/bg.png" alt="" />
          <img className="img-fluid" src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/line3.png" alt="" />
        </figure>
        <div className="position-absolute top-50 start-50 translate-middle">
          <div className="mb-3 display-6 text-center">將在 3 秒後回到首頁</div>
          <figure>
            <img className="img-fluid" src={NotFoundImg} alt="" />
          </figure>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
