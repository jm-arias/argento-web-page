import "./App.css";
import HeaderNav from "./components/HeaderNav";
import Hero from "./components/Hero";
import AddedValueComponent from "./components/AddedValue";
import AboutUs from "./components/AboutUs";

export default function App() {
  return (
    <div className="font-(500 sans) text-gray-600">
      <HeaderNav />
      <Hero />
      <AddedValueComponent />
      <AboutUs />
    </div>
  );
}
