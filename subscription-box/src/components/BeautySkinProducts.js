import React from "react";
import { useNavigate } from "react-router-dom";

const BeautySkinProducts = ({ addToCart }) => {
  const navigate = useNavigate();

  const products = [
    {
      title: "Glowing Serum",
      
      image: "https://orchidlifesciences.com/wp-content/uploads/2024/06/01-14-01-1024x704.jpg",
    },
    {
      title: "Anti-Aging Cream",
      
      image: "https://5.imimg.com/data5/SELLER/Default/2022/5/AM/FJ/JJ/111129386/facial-skin-care.jpg",
    },
    {
      title: "Hydrating Face Mask",
    
      image: "https://image.made-in-china.com/202f0j00VmnbRzEIbYcj/Daqan-Cleansing-Black-Mask-24K-Gold-Whitening-Beauty-Facial-Peel-off-Mask.webp",
    },
    {
      title: "Exfoliating Scrub",
      description: "Removes dead skin cells.",
      image: "https://images-cdn.ubuy.qa/651a7d9a2337232d0b4d6a05-exfoliating-face-scrub-exfoliating.jpg",
    },
    {
      title: "Vitamin C Serum",
      description: "Brightens your complexion.",
      image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/shopsy-body-skin-treatment/p/m/d/30-vitamin-c-witch-hazel-hyaluronic-acid-oil-free-face-serum-dot-original-imagmdfazwezw57p.jpeg?q=90&crop=false",
    },
    {
      title: "Soothing Toner",
      description: "Balances and refreshes skin.",
      image: "https://m.media-amazon.com/images/I/718T0OZ-wvL.jpg",
    },
    {
      title: "Moisturizing Lotion",
      description: "Hydrates and softens skin.",
      image: "https://image.made-in-china.com/226f3j00pThbJIAgLncM/Private-Label-Beauty-Skin-Care-Black-Skin-Whitening-Tumeric-Lotion-Moisturizing-Not-Greasy-Turmeric-Body-Lotion.webp",
    },
    {
      title: "Facial Oil",
      description: "Rejuvenates dry skin.",
      image: "https://via.placeholder.com/400?text=Facial+Oil",
    },
    {
      title: "Luxury Face Cream",
      description: "Deeply nourishes and restores skin.",
      image: "https://via.placeholder.com/400?text=Luxury+Face+Cream",
    },
  ];

  const handleAddToCart = (product) => {
    addToCart(product);
    alert(`💄 ${product.title} has been added to your cart.`);
  };

  const handleSubscriptionRedirect = () => {
    alert("💄 Redirecting you to the Subscription page!");
    navigate("/subscription");
  };

  const styles = {
    container: {
      width: "100%",
      padding: "20px",
      boxSizing: "border-box",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      marginTop: "20px",
    },
    header: {
      fontSize: "32px",
      fontWeight: "bold",
      color: "#333",
      margin: "30px 0 10px",
      textAlign: "center",
      fontFamily: "'Playfair Display', serif",
    },
    productCardContainer: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "20px",
    },
    productCard: {
      padding: "20px",
      borderRadius: "10px",
      border: "1px solid #ddd",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      backgroundColor: "#ffe4e1",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-between",
      height: "450px", // Increased card height
      position: "relative",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
    },
    productCardHover: {
      transform: "scale(1.05)",
      boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2)",
    },
    productImage: {
      width: "100%",
      height: "200px",
      objectFit: "cover",
      borderRadius: "10px",
      transition: "height 0.3s ease",
    },
    productImageHover: {
      height: "250px",
    },
    productTitle: {
      fontSize: "20px",
      fontWeight: "bold",
      color: "#333",
      textAlign: "center",
      margin: "10px 0 5px", // Reduced space below title
    },
    productDescription: {
      fontSize: "14px",
      color: "#555",
      textAlign: "center",
      lineHeight: "1.5em",
      maxHeight: "3em",
      overflow: "hidden",
      textOverflow: "ellipsis",
      transition: "max-height 0.3s ease",
      marginTop: "0", // Reduced space above description
    },
    buttonContainer: {
      display: "flex",
      justifyContent: "space-between",
      width: "100%",
      marginTop: "10px",
      position: "absolute",
      bottom: "20px",
    },
    button: {
      backgroundColor: "#ff6b00",
      color: "#fff",
      padding: "10px",
      fontWeight: "bold",
      borderRadius: "8px",
      border: "none",
      cursor: "pointer",
      width: "48%",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>💄 Beauty & Skin Products</h1>
      <p style={{ textAlign: "center", margin: "10px 0 30px", fontSize: "16px", color: "#555" }}>
        Discover a range of luxurious beauty and skincare products designed to enhance your natural glow.
      </p>
      <div style={styles.productCardContainer}>
        {products.map((product, index) => (
          <div
            key={index}
            style={styles.productCard}
            onMouseEnter={(e) => {
              Object.assign(e.currentTarget.style, styles.productCardHover);
              e.currentTarget.querySelector(".product-image").style.height = styles.productImageHover.height;
              e.currentTarget.querySelector(".description").style.maxHeight = "100px";
            }}
            onMouseLeave={(e) => {
              Object.assign(e.currentTarget.style, {
                transform: "scale(1)",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              });
              e.currentTarget.querySelector(".product-image").style.height = styles.productImage.height;
              e.currentTarget.querySelector(".description").style.maxHeight = "3em";
            }}
          >
            <img
              src={product.image}
              alt={product.title}
              style={styles.productImage}
              className="product-image"
            />
            <h3 style={styles.productTitle}>{product.title}</h3>
            <p className="description" style={styles.productDescription}>
              {product.description}
            </p>
            <div style={styles.buttonContainer}>
              <button style={styles.button} onClick={() => handleAddToCart(product)}>
                Add to Cart
              </button>
              <button style={styles.button} onClick={handleSubscriptionRedirect}>
                Subscription
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BeautySkinProducts;
