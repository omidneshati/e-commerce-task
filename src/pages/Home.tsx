import { useContext, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import Context from "../context/Context";
import getProduct from "../utils/getProduct";

function Home() {
  const { products, setProducts, selectedCategories } = useContext(Context);

  useEffect(() => {
    getProduct({})
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, [setProducts]);

  console.log(products);
  const filteredProducts = () => {
    if (selectedCategories.length !== 0) {
      return products.filter((product) => {
        return selectedCategories.includes(product.category);
      });
    }
    return products;
  };

  console.log("HOOOMI");
  return (
    <>
      <div className="row row-cols-1 row-cols-sm-4 gap-2 justify-content-center ">
        {filteredProducts().map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </>
  );
}

export default Home;
