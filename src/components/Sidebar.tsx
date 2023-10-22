import { useContext } from "react";
import CategoryFilter from "./CategoryFilter";
import Sorter from "./Sorter";
import Context from "../context/Context";

function Sidebar() {
  const { setSidebarOpen } = useContext(Context);
  return (
    <>
      <div className="d-flex d-sm-none justify-content-end">
        <button
          className="btn btn-outline-dark align-self-end "
          onClick={() => setSidebarOpen(false)}
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation">
          <span className="fw-bolder fs-5 ">X</span>
        </button>
      </div>
      <CategoryFilter />
      <Sorter />
    </>
  );
}

export default Sidebar;
