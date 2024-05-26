import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./Components/Header/Header";
import { Home } from "./Pages/Home/Home";
import { Footer } from "./Components/Footer/Footer";
import { Women } from "./Pages/Women/Women";
import { Men } from "./Pages/Men/Men";
import { ProductPage } from "./Pages/ProductPage/ProductPage";
import { Fenty } from "./Pages/Fenty/Fenty";
import { Cart } from "./Pages/Cart/Cart";
import { WishList } from "./Pages/WishList/WishList";
import { CartProductList } from "./Contexts/CartContext";
import { NotFound } from "./Pages/NotFound/NotFound";
import { UserImage } from "./Components/UserImage/UserImage";
import { UserPage } from "./Pages/UserPage/UserPage";
import { Data } from "./Pages/Data/Data";
import { AuthProvider } from "./Contexts/AuthContext";
function App() {
  return (
    <>
      <AuthProvider>
        <CartProductList>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/women" element={<Women />} />
            <Route path="/men" element={<Men />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/fenty-puma" element={<Fenty />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/wishlist" element={<WishList />} />
            <Route path="/userpage" element={<UserPage />} />
            <Route path="/data" element={<Data />} />
          </Routes>
          <Footer />
        </CartProductList>
      </AuthProvider>
    </>
  );
}

export default App;
