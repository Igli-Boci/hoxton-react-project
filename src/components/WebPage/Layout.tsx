import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Routes from "../../routes/Routes";

function Layout() {
  return (
    <>
      <Header />
      <div>
        <Routes />
      </div>
      <Footer />
    </>
  );
}
export default Layout;
