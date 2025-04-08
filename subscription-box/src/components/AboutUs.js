import React from 'react';

const AboutUs = () => {
  const styles = {
    // Container style for content, centered on the page with space above
    container: {
      maxWidth: '1200px',
      margin: '150px auto', // Adds space at the top and centers the container horizontally
      padding: '20px',
      backgroundColor: 'white',
      borderRadius: '10px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      position: 'relative', // Ensure the content is above the background
      zIndex: 1, // Ensure the container appears above the background
    },
    content: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '20px',
      flexWrap: 'wrap',
    },
    textContainer: {
      flex: '1',
      textAlign: 'left',
    },
    header: {
      fontSize: '36px',
      fontWeight: 'bold',
      color: '#2c2c54',
      marginBottom: '20px', // Reduced gap below the heading
    },
    text: {
      fontSize: '16px',
      color: '#555',
      marginBottom: '20px',
      lineHeight: '1.6',
    },
    image: {
      flex: '1',
      maxWidth: '100%',
      height: 'auto',
      borderRadius: '8px',
    },
    button: {
      backgroundColor: '#4078c0',
      color: 'white',
      border: 'none',
      padding: '10px 20px',
      fontSize: '16px',
      fontWeight: 'bold',
      borderRadius: '5px',
      cursor: 'pointer',
      textDecoration: 'none',
    },
    buttonHover: {
      backgroundColor: '#305a91',
    },
    // Background style
    background: {
      position: 'fixed', // Fixed background to ensure it stays in place
      top: 0,
      left: 0,
      width: '100%',
      height: '100vh', // Full viewport height
      backgroundImage: 'url("https://static.vecteezy.com/system/resources/previews/053/886/592/non_2x/yellow-ball-with-a-hole-in-the-middle-the-yellow-color-of-the-ball-and-the-yellow-background-create-a-warm-and-inviting-mood-the-ball-s-shape-and-the-hole-in-the-middle-give-it-a-unique-free-photo.jpg")',
      backgroundSize: 'cover', // Ensure the image covers the entire screen
      backgroundPosition: 'top center', // Position the background to show the top part
      backgroundRepeat: 'no-repeat', // Prevent the image from repeating
      zIndex: -1, // Ensure the background stays behind content
    },
  };

  return (
    <div style={styles.background}>
      <div style={styles.container}>
        <div style={styles.content}>
          <div style={styles.textContainer}>
            <h1 style={styles.header}>ABOUT US</h1>
            <p style={styles.text}>
              At <b>PERSONALISED SUBSCRIPTION BOX GENERATOR</b>, we redefine the subscription box experience by putting personalization and sustainability at the forefront. Our innovative platform allows you to tailor subscription plans to suit your unique preferences and lifestyle, ensuring you get exactly what you need—nothing more, nothing less. By optimizing your subscription, we help you save money, reduce waste, and enjoy a seamless, user-friendly experience. Whether monthly or yearly, our flexible plans are designed to deliver value, convenience, and satisfaction every time. Join us in creating smarter, more sustainable subscriptions!
            </p>
            <button
              style={styles.button}
              onMouseEnter={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
              onMouseLeave={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
            >
              LEARN MORE
            </button>
          </div>
          <img
            src="https://www.mastroservices.com/assets/img/mastro-about/about-mastro.jpg"
            alt="About Us"
            style={styles.image}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
