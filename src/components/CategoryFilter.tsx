import { useContext, useEffect, useState } from "react";
import getProduct from "../utils/getProduct";
import Context from "../context/Context";

function CategoryFilter() {
  // const checkboxArray = useRef<HTMLInputElement[]>([]);
  const [productCategories, setProductsCategories] = useState<string[]>([]);
  const { setSelectedCategories } = useContext(Context);

  console.log(productCategories);

  useEffect(() => {
    getProduct({ categories: true })
      .then((data) => {
        setProductsCategories(data);
      })
      .catch((err) => console.log(err));
  }, [setSelectedCategories]);

  return (
    <ul
      className="d-flex flex-column gap-2 p-0"
      role="group"
      aria-label="Basic checkbox toggle button group">
      <p className="fw-bold fs-4">Category Filter</p>
      {productCategories.map((category) => {
        return (
          <li className="d-flex align-items-center gap-2 w-100" key={category}>
            <label
              className="flex-grow-1 "
              htmlFor={category}
              style={{ cursor: "pointer" }}>
              {category}
            </label>
            <input
              // ref={(e) => checkboxArray.current.push(e as HTMLInputElement)}
              type="checkbox"
              className="form-check-input"
              id={category}
              value={category}
              autoComplete="off"
              onChange={(e) => {
                if (e.target.checked) {
                  setSelectedCategories((prev) => [...prev, e.target.value]);
                } else {
                  setSelectedCategories((prev) =>
                    prev.filter((item) => item !== e.target.value)
                  );
                }
              }}
            />
          </li>
        );
      })}
    </ul>
  );
}

export default CategoryFilter;
