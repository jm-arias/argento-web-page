import "./App.css";
import HeaderNav from "./components/HeaderNav";
import Hero from "./components/Hero";
import AddedValue from "./components/AddedValue";
import AboutUs from "./components/AboutUs";
import ProductsInfo from "./components/ProductsInfo";
import OurClients from "components/OurClients";

export default function App() {
  return (
    <div className="font-(500 sans) text-dark">
      <HeaderNav />
      <Hero />
      <AddedValue />
      <AboutUs />
      <ProductsInfo />
      <OurClients />
      <div className="mapouter w-full">
        <div className="gmap_canvas w-full">
          <iframe
            width="100%"
            height="600"
            src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=Av.%20Gustavo%20Mej%C3%ADa%20Ricart%2069,%20Santo%20Domingo+(Argento)&t=p&z=15&ie=UTF8&iwloc=B&output=embed"
          >
            <a href="https://www.maps.ie/population/">
              Population calculator map
            </a>
          </iframe>
        </div>
      </div>
    </div>
  );
}
