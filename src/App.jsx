import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <div className="main">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
