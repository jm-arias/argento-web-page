import "./App.css";
import HeaderNav from "components/HeaderNav";
import Hero from "components/Hero";
import AddedValue from "components/AddedValue";
import AboutUs from "components/AboutUs";
import ProductsInfo from "components/ProductsInfo";
import OurClients from "components/OurClients";
import Contact from "components/Contact";
import Promise from "components/Promise";
import Footer from "components/Footer";
import Loader from "components/Loader"; 

export default function App() {

  return (
    <div className="font-(500 sans) text-dark">
      <Loader/>
      <HeaderNav />
      <Hero />
      <AddedValue />
      <AboutUs />
      <ProductsInfo />
      <OurClients />
      <Contact/>
      <Promise/>
      <Footer/>
    </div>
  );
}
