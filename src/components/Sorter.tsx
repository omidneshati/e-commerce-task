import { useContext, useEffect, useState } from "react";
import Context from "../context/Context";
import { HighToLow, LowToHigh } from "../utils/sortPrice";

function Sorter() {
  const [selectValue, setSelectValue] = useState("normal");
  const { products, setProducts } = useContext(Context);

  useEffect(() => {
    console.log(products);
    if (selectValue === "to_expensive") {
      setProducts([...LowToHigh(products)]);
    }
    if (selectValue === "to_cheap") {
      setProducts([...HighToLow(products)]);
    }
  }, [products, selectValue, setProducts]);

  return (
    <>
      <select
        className="form-select"
        aria-label="Default select example"
        value={selectValue}
        onChange={(e) => {
          setSelectValue(e.target.value);
        }}>
        <option value="normal">Normal</option>
        <option value="to_expensive">To Most Expensive</option>
        <option value="to_cheap">To Cheapest</option>
      </select>
    </>
  );
}

export default Sorter;
