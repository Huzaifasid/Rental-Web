import { MantineProvider, Text } from "@mantine/core";
import { HeaderMegaMenu } from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About } from "./Pages/About/About";
const App = () => {
  return (
    <BrowserRouter>
      <HeaderMegaMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
