import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Products from "./pages/home/Products";
import ProductDetails from "./pages/details/ProductDetails";
import Profile from "./pages/profile/Profile";
import ProtectedRoute from "./pages/auth/ProtectedRoute";
import Basket from "./pages/basket/Basket";
import Admin from "./pages/admin/Admin";
import ProtectedAdmin from "./pages/auth/ProtectedAdmin";
import Home from "./pages/admin/Home";
import Orders from "./pages/admin/Orders";
import Productss from "./pages/admin/Products";
import ProductEdit from './pages/admin/ProductEdit'
import AddProduct from "./pages/admin/AddProduct";
function App() {
  return (
    <div className="App">
      <nav>
        <Navbar />
      </nav>
      <main id="content">
        <Routes>
          <Route path="/" exact Component={Products} />
          <Route path="/product/:productId" Component={ProductDetails} />

          <Route path="/signin" Component={Login} />
          <Route path="/signup" Component={Register} />
          <Route path="/signup" Component={Register} />
          <Route Component={ProtectedRoute}>
            <Route path="/profile" Component={Profile} />
            <Route path="/basket" Component={Basket} />
          </Route>
          <Route Component={ProtectedAdmin}>
            <Route  path="/admin/" Component={Admin}>
              <Route  path="home" Component={Home} />
              <Route path="orders" Component={Orders} />
              <Route path="products" Component={Productss} />
              <Route path="products/:product_id" Component={ProductEdit} />
              <Route path="products/addproduct" Component={AddProduct} />


            </Route>
          </Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
