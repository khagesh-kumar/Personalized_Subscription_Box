import React, { useState } from "react";

const Subscription = () => {
  const [duration, setDuration] = useState("Monthly");
  const [days, setDays] = useState(30);
  const [pricing, setPricing] = useState({
    Premium: 150 * 83,
    Basic: 100 * 83,
    Starter: 50 * 83,
    Small: 10 * 83,
  });

  const handleDurationChange = (event) => {
    const selectedDuration = event.target.value;
    setDuration(selectedDuration);

    let multiplier = 1;
    if (selectedDuration === "1-30 Days") {
      multiplier = days / 30;
    } else if (selectedDuration === "6 Months") {
      multiplier = 6;
    } else if (selectedDuration === "Yearly") {
      multiplier = 12;
    } else {
      multiplier = 1;
    }

    setPricing({
      Premium: 150 * 83 * multiplier,
      Basic: 100 * 83 * multiplier,
      Starter: 50 * 83 * multiplier,
      Small: 10 * 83 * multiplier,
    });
  };

  const handleDaysChange = (event) => {
    const selectedDays = parseInt(event.target.value);
    setDays(selectedDays);

    setPricing({
      Premium: (150 * 83 * selectedDays) / 30,
      Basic: (100 * 83 * selectedDays) / 30,
      Starter: (50 * 83 * selectedDays) / 30,
      Small: (10 * 83 * selectedDays) / 30,
    });
  };

  const styles = {
    container: {
      padding: "20px",
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#f9f9f9",
      borderRadius: "10px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      maxWidth: "800px",
      margin: "90px auto",  // Ensures a gap between the container and navbar
      textAlign: "center",
      backgroundImage: "url('https://png.pngtree.com/back_origin_pic/03/98/86/f6dae0469fd3398f27ea4658d9777289.jpg')",
      backgroundSize: "cover", // Ensure the image covers the full background
      backgroundPosition: "center", // Center the background image
      backgroundRepeat: "no-repeat", // Prevent image repetition
    },
    heading: {
      textAlign: "center",
      fontSize: "32px",
      fontWeight: "bold",
      fontFamily: "'Times New Roman', serif",
      color: "white", // Thick white
    },
    description: {
      fontSize: "16px",
      color: "rgba(255, 255, 255, 0.8)", // Light white
      textAlign: "center",
      margin: "10px 0 30px",
    },
    selectContainer: {
      display: "flex",
      justifyContent: "center",
      marginBottom: "30px",
    },
    select: {
      padding: "10px",
      fontSize: "16px",
      borderRadius: "8px",
      border: "1px solid #ccc",
      width: "200px",
      marginRight: "20px",
      color: "white", // White color for the text inside the select
      backgroundColor: "rgba(0, 0, 0, 0.8)", // Black background for the select box
    },
    selectRedOption: {
      color: "red", // Red color for 1-30 Days
    },
    plans: {
      display: "flex",
      justifyContent: "space-between",
      gap: "20px",
      flexWrap: "wrap",
    },
    planCard: {
      width: "23%",
      padding: "20px",
      backgroundColor: "#fff",
      borderRadius: "8px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      textAlign: "center",
      border: "1px solid #ddd",
      marginBottom: "20px",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
    },
    planTitle: {
      fontSize: "24px",
      fontWeight: "bold",
      color: "#333",
    },
    planPrice: {
      fontSize: "20px",
      fontWeight: "bold",
      color: "#007bff",
      margin: "10px 0",
    },
    planList: {
      listStyle: "none",
      padding: "0",
      marginBottom: "20px",
      fontSize: "14px",
      color: "#555",
      textAlign: "left",
    },
    planButton: {
      padding: "10px 20px",
      backgroundColor: "#ff6b00",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      fontSize: "16px",
      fontWeight: "bold",
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Subscription</h2>
      <p style={styles.description}>
        Unlock the power of personalization with our subscription plans—tailored just for you, eco-friendly, and designed to simplify your life!
      </p>
      <div style={styles.selectContainer}>
        <label htmlFor="duration" style={{ marginRight: "10px", fontSize: "16px", color: "white" }}>
          <b>Choose Plan Duration:</b>
        </label>
        <select id="duration" value={duration} onChange={handleDurationChange} style={styles.select}>
          <option value="Monthly" style={{ color: "white" }}>Monthly</option>
          <option value="1-30 Days" style={styles.selectRedOption}>1-30 Days</option>
          <option value="6 Months" style={{ color: "white" }}>6 Months</option>
          <option value="Yearly" style={{ color: "white" }}>Yearly</option>
        </select>
        {duration === "1-30 Days" && (
          <>
            <label htmlFor="days" style={{ marginRight: "10px", fontSize: "16px", color: "white" }}>
              Number of Days:
            </label>
            <select id="days" value={days} onChange={handleDaysChange} style={styles.select}>
              {[...Array(30).keys()].map((n) => (
                <option key={n + 1} value={n + 1}>
                  {n + 1} Days
                </option>
              ))}
            </select>
          </>
        )}
      </div>
      <div style={styles.plans}>
        {Object.keys(pricing).map((plan) => (
          <div key={plan} style={styles.planCard}>
            <h3 style={styles.planTitle}>{plan}</h3>
            <p style={styles.planPrice}>₹{pricing[plan].toFixed(2)}</p>
            <ul style={styles.planList}>
              <li>Customizable subscription plans</li>
              <li>Eco-friendly and sustainable choices</li>
              <li>Tailored to your unique preferences</li>
            </ul>
            <button style={styles.planButton}>Subscribe</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Subscription;
