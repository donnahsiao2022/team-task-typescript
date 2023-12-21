import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="position-relative">
        <img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/banner.png" className="img-fluid" alt="" />
        <h2 className="mb-0 position-absolute top-50 start-50 translate-middle bg-dark rounded-1">客房旅宿頁</h2>
      </div>
      <Footer />
    </>
  );
};

export default Home;
