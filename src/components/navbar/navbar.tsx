import logo from "../../assets/img/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../store/auth/AuthSlice";
import "./navbar.scss";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const dispatch = useDispatch();
  const cartItemsLength = useSelector((state) => state.cart.cartInfo.quantity);

  return (
    <nav className="navbar navbar-expand-lg blur border-radius-sm top-0 z-index-3 shadow position-sticky py-3 start-0 end-0">
      <div className="container px-1" style={{ maxHeight: "50px" }}>
        <a className="navbar-brand font-weight-bolder ms-lg-0 " href="/product">
          <img height={50} src={logo} alt="" style={{ scale: "1.5" }} />
        </a>
        <button
          className="navbar-toggler shadow-none ms-2"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navigation"
          aria-controls="navigation"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon mt-2">
            <span className="navbar-toggler-bar bar1"></span>
            <span className="navbar-toggler-bar bar2"></span>
            <span className="navbar-toggler-bar bar3"></span>
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navigation">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item dropdown">
              <a
                className="nav-link text-dark dropdown-toggle font-weight-bold d-flex align-items-center me-2 "
                aria-current="page"
                id="pagesExample"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Pages
              </a>
              <ul className="dropdown-menu" aria-labelledby="pagesExample">
                <li>
                  <a className="dropdown-item" href="/auth-page">
                    Login
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/admin">
                    Admin
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/user/me">
                    Profile
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/landing">
                    Landing Page
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/product/">
                    Product Page
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/cart">
                    Shopping Cart
                  </a>
                </li>
                <li>
                  <div
                    className="dropdown-item"
                    onClick={() => dispatch(logOut())}
                  >
                    Log out
                  </div>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-dark font-weight-bold d-flex align-items-center me-2 "
                aria-current="page"
                href="https://www.creative-tim.com/learning-lab/astro/overview/astro-ecommerce"
              >
                Documentation
              </a>
            </li>
            <li
              className="nav-item cart-icon"
            >
              <a className="dropdown-item" href="/cart">
                <FaShoppingCart
                  color="#1e293b"
                  className="font-weight-bold"
                  size="32px"
                />
                {cartItemsLength ? (
                  <div className="cart-items-length">{cartItemsLength}</div>
                ) : null}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
