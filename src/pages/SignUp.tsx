import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  const onClickHandler = () => {
    navigate('fill_info');
  };

  return (
    <div className="mx-auto pt-5 pt-xxl-8 login_signUp_form_wrap">
      <div className="d-flex flex-column">
        <p className="mb-2 text-primary">享樂酒店，誠摯歡迎</p>
        <h1 className="mb-3">立即註冊</h1>
        <div className="mb-7 py-3 d-flex justify-content-between align-items-center">
          <div>
            <div style={{ width: '32px', height: '32px' }} className="mx-auto mb-1 d-flex justify-content-center align-items-center bg-primary rounded-circle fw-bold">1</div>
            <p className="mb-0">輸入信箱及密碼</p>
          </div>
          <div style={{ width: '188px', height: '2px' }} className="bg_neutral_60 d-none d-sm-block"></div>
          <div style={{ width: '55px', height: '2px' }} className="bg_neutral_60 d-block d-sm-none"></div>
          <div>
            <div style={{ width: '32px', height: '32px' }} className="mx-auto mb-1 d-flex justify-content-center align-items-center text_neutral_60 border_neutral_60 rounded-circle fw-bold">2</div>
            <p className="mb-0 text_neutral_60">填寫基本資料</p>
          </div>
        </div>
        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">電子信箱</label>
            <input type="email" className="form-control" id="email" placeholder="hello@example.com" />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">密碼</label>
            <input type="password" className="form-control" id="password" placeholder="請輸入密碼" />
          </div>
          <div className="mb-7">
            <label htmlFor="confirmPassword" className="form-label">確認密碼</label>
            <input type="password" className="form-control" id="confirmPassword" placeholder="請再輸入一次密碼" />
          </div>
          <div className="mb-3">
            <button type="button" className="py-3 btn btn-light btn-lg w-100 fw-bold" onClick={onClickHandler}>下一步</button>
          </div>
        </form>
        <div className="d-flex align-items-center">
          <p className="mb-0">已經有會員了嗎？</p>
          <Link className="ms-2" to="/login">立即登入</Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
