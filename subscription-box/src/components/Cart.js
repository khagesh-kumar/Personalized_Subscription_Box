import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // For navigation to Subscription.js

const Cart = ({ cartItems, setCartItems }) => {
  const navigate = useNavigate(); // Hook for navigation

  // Handle removing a product from the cart
  const handleRemoveFromCart = (index) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems); // Update cart state
  };

  // Handle changing the quantity of a product
  const handleQuantityChange = (product, action) => {
    const newCartItems = [...cartItems];
    const index = newCartItems.findIndex((item) => item.title === product.title);
    if (index !== -1) {
      if (action === "increase") {
        newCartItems[index].quantity += 1;
      } else if (action === "decrease" && newCartItems[index].quantity > 1) {
        newCartItems[index].quantity -= 1;
      }
      setCartItems(newCartItems); // Update cart state after quantity change
    }
  };

  // Redirect to Subscription page based on the product type
  const handleSubscriptionRedirect = (product) => {
    // Assuming product has a property 'subscriptionType' that determines the redirection
    if (product.subscriptionType === 'premium') {
      navigate("/subscription1");
    } else {
      navigate("/subscription");
    }
  };

  // Get unique products and their counts
  const uniqueProducts = [];
  const productCount = {};

  cartItems.forEach((item) => {
    if (!productCount[item.title]) {
      item.quantity = item.quantity || 1; // Initialize quantity if not set
      productCount[item.title] = item.quantity;
      uniqueProducts.push(item);
    } else {
      productCount[item.title] += 1;
    }
  });

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Your Cart</h2>
      {uniqueProducts.length === 0 ? (
        <p style={styles.emptyMessage}>Your cart is empty.</p>
      ) : (
        <div style={styles.cardsContainer}>
          {uniqueProducts.map((product, index) => (
            <div key={index} style={styles.card}>
              <h4 style={styles.productTitle}>{product.title}</h4>
              <div style={styles.cardImageContainer}>
                <img src={product.image} alt={product.title} style={styles.cardImage} />
              </div>
              <div style={styles.cardContent}>
                <p style={styles.productCount}>Quantity: {productCount[product.title]}</p>
                <div style={styles.buttonContainer}>
                  {/* Quantity Controls */}
                  <div style={styles.quantityContainer}>
                    <button
                      style={styles.quantityButton}
                      onClick={() => handleQuantityChange(product, "decrease")}
                    >
                      -
                    </button>
                    <span style={styles.quantityText}>{productCount[product.title]}</span>
                    <button
                      style={styles.quantityButton}
                      onClick={() => handleQuantityChange(product, "increase")}
                    >
                      +
                    </button>
                  </div>

                  {/* Subscription and Remove Buttons */}
                  <div style={styles.buttonsSideBySide}>
                    <button
                      style={styles.subscriptionButton}
                      onClick={() => handleSubscriptionRedirect(product)}
                    >
                      Subscription
                    </button>
                    <button
                      style={styles.removeButton}
                      onClick={() => handleRemoveFromCart(index)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
  },
  header: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "20px",
  },
  emptyMessage: {
    fontSize: "18px",
    color: "#555",
    textAlign: "center",
  },
  cardsContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px", // Reduced gap between cards
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    padding: "10px", // Reduced padding for smaller cards
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    width: "calc(33% - 10px)", // Adjust width to reduce card size
    boxSizing: "border-box",
    height: "280px", // Reduced height of card
  },
  productTitle: {
    fontSize: "16px", // Smaller title
    fontWeight: "bold",
    color: "#333",
    marginBottom: "10px",
    textAlign: "center",
  },
  cardImageContainer: {
    flex: "0 0 120px", // Increased size of the image container
    marginBottom: "10px",
  },
  cardImage: {
    width: "120px", // Increased image size
    height: "auto",
    borderRadius: "8px",
  },
  cardContent: {
    textAlign: "center",
    width: "100%",
  },
  productCount: {
    fontSize: "14px", // Smaller font for count
    color: "#555",
    marginBottom: "10px",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "column", // Stack the buttons vertically
    alignItems: "center",
  },
  quantityContainer: {
    display: "flex",
    alignItems: "center",
    marginBottom: "10px",
  },
  quantityButton: {
    backgroundColor: "#ff6b00",
    color: "#fff",
    border: "none",
    padding: "8px", // Reduced padding
    fontSize: "18px",
    cursor: "pointer",
    borderRadius: "50%",
    margin: "0 5px", // Reduced margin
    width: "30px", // Adjust button size
    height: "30px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  quantityText: {
    fontSize: "16px", // Adjusted font size
    color: "#333",
    margin: "0 5px", // Reduced margin
  },
  subscriptionButton: {
    backgroundColor: "#ff6b00",
    color: "#fff",
    padding: "8px", // Reduced padding
    fontWeight: "bold",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    width: "48%", // Reduced width for side-by-side buttons
    marginRight: "4%", // Space between buttons
  },
  removeButton: {
    backgroundColor: "#e74c3c",
    color: "#fff",
    padding: "8px", // Reduced padding
    fontWeight: "bold",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    width: "48%", // Reduced width for side-by-side buttons
  },
  buttonsSideBySide: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%", // Ensure both buttons fit on the same line
    marginTop: "10px", // Added margin for spacing
  },
};

export default Cart;
