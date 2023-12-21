import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ReserveRoom = () => {
  return (
    <>
      <Navbar isEscapeDocumentFlow={false} />
      <section>
        <div className="container">
          <h2>預約房型頁</h2>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ReserveRoom;
