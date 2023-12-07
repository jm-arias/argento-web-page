import "./App.css";
import HeaderNav from "./components/HeaderNav";
import Hero from "./components/Hero";
import AddedValue from "./components/AddedValue";
import AboutUs from "./components/AboutUs";
import ProductsInfo from "./components/ProductsInfo";
import OurClients from "components/OurClients";

export default function App() {
  return (
    <div className="font-(500 sans) text-gray-600">
      <HeaderNav />
      <Hero />
      <AddedValue />
      <AboutUs />
      <ProductsInfo />
      <OurClients />
      <div className="color-dark color-blue-primary color-blue-secondary color-blue-accent color-orange-primary color-orange-secondary color-orange-accent color-purple-primary color-purple-secondary color-purple-accent"></div>
    </div>
  );
}
