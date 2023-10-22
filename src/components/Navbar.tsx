import { useContext } from "react";
import Context from "../context/Context";

function Navbar() {
  const { setSidebarOpen } = useContext(Context);
  return (
    <nav className="navbar bg-body-tertiary" style={{ height: "60px" }}>
      <div className="container-fluid d-sm-none">
        <button
          onClick={() => setSidebarOpen(true)}
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
