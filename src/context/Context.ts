import { createContext } from "react";
import ProductType from "../interfaces/Product/Product";

const Context = createContext<{
  selectedCategories: string[];
  setSelectedCategories: React.Dispatch<React.SetStateAction<string[]>>;
  products: ProductType[];
  setProducts: React.Dispatch<React.SetStateAction<ProductType[]>>;
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}>({
  selectedCategories: [],
  setSelectedCategories: () => {},
  products: [],
  setProducts: () => {},
  sidebarOpen: false,
  setSidebarOpen: () => false,
});

export default Context;
