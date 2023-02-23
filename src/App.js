/** @format */
import FormLogin from "./Components/FormLogin";
import DetailProduk from "./Components/DetailProduk";
import Slider from "./Components/Slider";
import Navbar from "./Components/Navbar";
import HeroContent from "./Components/heroContent";
import logo from "./logo.svg";

import "./styles/base.css";

function App() {
  const sliders = [
    {
      image: "./asset/about1.png",
      title: "About Us 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt lacinia, nisl nisl aliquam massa, nec ultricies nisl nunc eget nisl. Sed euismod, nisl vel tincidunt lacinia, nisl nisl aliquam massa, nec ultricies nisl nunc eget nisl.",
      link: "https://www.google.com",
    },
    {
      image: "./asset/about2.png",
      title: "About Us 2 Broo",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt lacinia, nisl nisl aliquam massa, nec ultricies nisl nunc eget nisl. Sed euismod, nisl vel tincidunt lacinia, nisl nisl aliquam massa, nec ultricies nisl nunc eget nisl.",
      link: "https://www.google.com",
    },
  ];

  return (
    <div>
      <Navbar />
      <Route path ="Login" element ={ <HeroContent/> } />
      <Route path ="Login" element ={ <FormLogin/> } />
      <div className="min-h-screen bg-alles-200">
        <Slider images={sliders} />
      </div>
      <DetailProduk />
    </div>
  );
}

export default App;
