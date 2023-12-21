import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const RoomDetail = () => {
  return (
    <>
      <Navbar isEscapeDocumentFlow={false} />
      <section>
        <div className="container">
          <h2>房型詳細頁</h2>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default RoomDetail;
