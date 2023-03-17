import { HeaderMegaMenu } from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HowItWorks } from "./Pages/HowItWorks/HowItWorks";
import TopProducts from "./Pages/Top Products/TopProducts";
import { Footer } from "./Components/Footer/Footer";
import ContactBox from "./Components/ContactBox/ContactBox";
import ProductDetail from "./Pages/Product Detail/ProductDetail";
import ShoppingCart from "./Pages/Shopping Cart/ShoppingCart";
import AllProducts from "./Pages/All Products/AllProducts";
import Shipping from "./Pages/Shipping/Shipping";
import Payment from "./Pages/Payment/Payment";
import Checkout from "./Pages/Checkout/CheckOut";

const App = () => {
  let footerData = {
    data: [
      {
        title: "Company",
        links: [
          {
            label: "FAQs",
            link: "#",
          },
          {
            label: "Jobs",
            link: "#",
          },
          {
            label: "Blogs",
            link: "#",
          },
          {
            label: "News",
            link: "#",
          },
        ],
      },
      {
        title: "Offerings",
        links: [
          {
            label: "Top Products",
            link: "#",
          },
          {
            label: "Deals",
            link: "#",
          },
          {
            label: "Best Selling",
            link: "#",
          },
          {
            label: "Product of the month",
            link: "#",
          },
        ],
      },
      {
        title: "Help & Solutions",
        links: [
          {
            label: "Contact us",
            link: "#",
          },
          {
            label: "System status",
            link: "#",
          },
          // {
          //   label: "Email newsletter",
          //   link: "#",
          // },
          // {
          //   label: "GitHub discussions",
          //   link: "#",
          // },
        ],
      },
    ],
  };
  return (
    <BrowserRouter>
      <HeaderMegaMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/howitworks" element={<HowItWorks />} />
        <Route path="/top-products" element={<TopProducts />} />
        <Route path="/product-detail" element={<ProductDetail />} />
        <Route path="/shopping-cart" element={<ShoppingCart />} />
        <Route path="/all-products" element={<AllProducts />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <ContactBox />
      <Footer data={footerData.data} />
    </BrowserRouter>
  );
};

export default App;
