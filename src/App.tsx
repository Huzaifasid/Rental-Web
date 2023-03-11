import { HeaderMegaMenu } from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HowItWorks } from "./Pages/HowItWorks/HowItWorks";
const App = () => {
  return (
    <BrowserRouter>
      <HeaderMegaMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/howitworks" element={<HowItWorks />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
