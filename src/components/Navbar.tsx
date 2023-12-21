import { useRef } from "react";
import { Link } from "react-router-dom";

type NavbarProps = {
  isShowMenu?: boolean;
  isShowBackgroundBlack?: boolean;
};

const Navbar = ({ isShowMenu = true, isShowBackgroundBlack = false }: NavbarProps) => {
  const desktopNavRef = useRef<HTMLElement>(null);
  const mobileNavRef = useRef<HTMLElement>(null);

  const barIconClickHandler = () => {
    if (desktopNavRef.current) {
      desktopNavRef.current.classList.remove('d-block');
      desktopNavRef.current.classList.add('d-none');
    }

    if (mobileNavRef.current) {
      mobileNavRef.current.classList.remove('opacity-0');
      mobileNavRef.current.classList.add('opacity-100');
      mobileNavRef.current.style.zIndex = '1040';
      mobileNavRef.current.style.transitionDuration = '.5s';
    }
  };

  const xIconClickHandler = () => {
    if (desktopNavRef.current) {
      desktopNavRef.current.classList.remove('d-none');
      desktopNavRef.current.classList.add('d-block');
    }

    if (mobileNavRef.current) {
      mobileNavRef.current.classList.remove('opacity-100');
      mobileNavRef.current.classList.add('opacity-0');
      mobileNavRef.current.style.zIndex = '-1';
      mobileNavRef.current.style.transitionDuration = '0s';
    }
  };

  return (
    <>
      <nav className={`py-5 fixed-top position-absolute ${isShowBackgroundBlack ? 'bg-dark' : ''}`} ref={desktopNavRef}>
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <Link className="me-0 py-0 d-inline-block" to='/'>
              <img width="196" src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/logo.png" alt="" />
            </Link>
            <div className="bar_icon d-block d-md-none" onClick={barIconClickHandler}>
              <div className="bar_icon_line_1"></div>
              <div className="bar_icon_line_2"></div>
              <div className="bar_icon_line_3"></div>
            </div>
            <ul className={`mb-0 list-unstyled d-none justify-content-center align-items-center text-white ${isShowMenu ? 'd-md-flex' : 'd-md-none'}`}>
              <li className="me-3 d-flex">
                <a className="p-3 text-decoration-none text-white fw-bold" href="#">客房旅宿</a>
              </li>
              <li className="me-3 d-flex">
                <a className="p-3 text-decoration-none text-white fw-bold" href="#">會員登入</a>
              </li>
              <li className="d-flex">
                <a className="px-6 py-3 btn btn-primary text-white fw-bold" href="#">立即訂房</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <nav style={{ transition: 'all .5s linear', zIndex: -1 }} className="p-4 opacity-0 offcanvas-backdrop bg-dark" ref={mobileNavRef}>
        <ul className="mb-0 h-100 list-unstyled d-flex flex-column d-md-none justify-content-center align-items-center text-white">
          <li className="mb-3 w-100 d-flex justify-content-center align-items-center">
            <a className="p-3 w-100 d-flex justify-content-center align-items-center text-decoration-none text-white fw-bold" href="#">客房旅宿</a>
          </li>
          <li className="mb-3 w-100 d-flex justify-content-center align-items-center">
            <a className="p-3 w-100 d-flex justify-content-center align-items-center text-decoration-none text-white fw-bold" href="#">會員登入</a>
          </li>
          <li className="w-100 d-flex justify-content-center align-items-center">
            <a className="px-6 py-3 w-100 d-flex justify-content-center align-items-center btn btn-primary text-white fw-bold" href="#">立即訂房</a>
          </li>
        </ul>
        <div className="x_icon" onClick={xIconClickHandler}></div>
      </nav>
    </>
  );
};

export default Navbar;
