import { HeaderResponsive } from "./Components/Header/Header";
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
import Categories from "./Pages/Categories/Categories";

const App = () => {
  let navData = {
    links: [
      {
        link: "/",
        label: "Home",
      },
      {
        link: "/howitworks",
        label: "How It Works",
      },
      {
        link: "/categories",
        label: "Categories",
        links: [
          {
            link: "/categories",
            label: "Computers",
          },
          {
            link: "/categories",
            label: "Phones & Tablets",
          },
          {
            link: "/categories",
            label: "Gaming & VR",
          },
          {
            link: "/categories",
            label: "Wearable",
          },
          {
            link: "/categories",
            label: "Cameras",
          },
          {
            link: "/categories",
            label: "TV & Projectors",
          },
        ],
      },

      {
        link: "/top-products",
        label: "Top Products",
      },
      {
        link: "/about-us",
        label: "About Us",
      },
    ],
  };
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
      <HeaderResponsive links={navData.links} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/howitworks" element={<HowItWorks />} />
        <Route path="/top-products" element={<TopProducts />} />
        <Route path="/product-detail" element={<ProductDetail />} />
        <Route path="/categories" element={<Categories />} />
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
