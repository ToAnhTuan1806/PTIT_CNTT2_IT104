import Header from "./Bai6/Header";
import Menu from "./Bai6/Menu";
import Main from "./Bai6/Main";
import Footer from "./Bai6/Footer";

const AdminIndex = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Header />
      <div style={{ display: "flex", flex: 1 }}>
        <Menu />
        <div style={{ flex: 1, display: "flex", padding: "20px", flexDirection: "column" , background: "#f3f4f6"}}>
          <Main />
          <Footer />
        </div>
      </div>
    </div>

  );
};

export default AdminIndex;
