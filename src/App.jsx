import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppLayout from "./layouts/AppLayout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MainLayout from "./layouts/MainLayout";
import MainPage from "./pages/MainPage";
import Store from "./pages/Store";
import ProductDetail from "./pages/ProductDetail";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppLayout/>}>
          <Route path="login" element={<Login/>} />
          <Route path="register" element={<Register/>} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
          <Route path="/" element={<MainLayout/>}>
            <Route index element={<MainPage/>}/>
            <Route path="store" element={<Store/>}/>
            <Route path="product/:id" element={<ProductDetail/>} />
            <Route path="blog" element={<Blog/>} />
            <Route path="contact" element={<Contact/>} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
