import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const navbarStyles = {
  nav: {
    padding: "10px 20px",
    background: "#FFD700", // Light yellow background
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "fixed",
    width: "100%",
    top: 0,
    zIndex: 1000,
  },
  logo: {
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    color: "blue", // Blue color for SUBBOX
    fontSize: "20px",
    fontWeight: "bold",
  },
  logoIcon: {
    fontSize: "24px",
    marginRight: "10px",
    color: "blue", // Blue color for logo icon
  },
  centerLinksContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexGrow: 1,
  },
  link: {
    margin: "0 15px",
    textDecoration: "none",
    color: "#333",
    padding: "8px 12px", // Add padding for hover box
    position: "relative",
    transition: "all 0.3s", // Smooth transition for hover effect
  },
  linkHoverBox: {
    backgroundColor: "blue", // Blue background for hover
    borderRadius: "12px", // Curved edges
    color: "white", // White text color
  },
  dropdown: {
    margin: "0 15px",
  },
  iconContainer: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
  },
  cartIconContainer: {
    position: "relative",
    cursor: "pointer",
  },
  cartIcon: {
    fontSize: "24px",
    color: "blue", // Blue color for cart icon
  },
  notificationDot: {
    position: "absolute",
    top: "-5px",
    right: "-5px",
    width: "10px",
    height: "10px",
    backgroundColor: "red",
    borderRadius: "50%",
  },
  profileAvatar: {
    fontSize: "24px",
    color: "blue", // Blue color for profile icon
    cursor: "pointer",
  },
};

const Navbar = ({ cartItems }) => {
  const [hoveredLink, setHoveredLink] = React.useState(null);

  const handleMouseEnter = (linkName) => {
    setHoveredLink(linkName);
  };

  const handleMouseLeave = () => {
    setHoveredLink(null);
  };

  return (
    <nav style={navbarStyles.nav}>
      <Link to="/" style={navbarStyles.logo}>
        <i className="bx bx-box" style={navbarStyles.logoIcon}></i>
        SUBBOX
      </Link>

      <div style={navbarStyles.centerLinksContainer}>
        {["Dashboard", "About Us", "How It Works", "Contact Us"].map((item, index) => (
          <Link
            to={`/${item.toLowerCase().replace(/\s/g, "-")}`}
            key={index}
            style={{
              ...navbarStyles.link,
              ...(hoveredLink === item ? navbarStyles.linkHoverBox : {}),
            }}
            onMouseEnter={() => handleMouseEnter(item)}
            onMouseLeave={handleMouseLeave}
          >
            {item}
          </Link>
        ))}

        <div className="dropdown" style={navbarStyles.dropdown}>
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="categoriesDropdown"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Categories
          </button>
          <ul className="dropdown-menu" aria-labelledby="categoriesDropdown">
            <li>
              <Link className="dropdown-item" to="/books-entertainment">
                Books & Entertainment
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/beauty-skin-products">
                Beauty & Skin Products
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div style={navbarStyles.iconContainer}>
        {/* Cart Icon with Notification Dot */}
        <div style={navbarStyles.cartIconContainer}>
          <Link to="/cart">
            <i className="bx bx-cart" style={navbarStyles.cartIcon}></i>
          </Link>
          {cartItems.length > 0 && <span style={navbarStyles.notificationDot}></span>}
        </div>

        {/* Profile Icon */}
        <Link to="/login">
          <i className="bx bx-user-circle" style={navbarStyles.profileAvatar}></i>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
