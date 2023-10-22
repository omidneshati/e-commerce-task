import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import ProductType from "./interfaces/Product/Product";
import Context from "./context/Context";
import Navbar from "./components/Navbar";

function App() {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <Context.Provider
      value={{
        selectedCategories,
        setSelectedCategories,
        products,
        setProducts,
        sidebarOpen,
        setSidebarOpen,
      }}>
      <div className="">
        <Navbar />
        <div className="d-flex">
          <aside
            className={`${
              sidebarOpen
                ? "d-block position-fixed w-100 z-2 bg-white"
                : "d-none"
            } d-sm-block min-vh-100 w-25 p-3`}>
            <Sidebar />
          </aside>
          <main className="container d-flex d-sm-block justify-content-center ">
            <Home />
          </main>
        </div>
      </div>
    </Context.Provider>
  );
}

export default App;
