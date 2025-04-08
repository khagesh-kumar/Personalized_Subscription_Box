import React from 'react';

const PersonalizedSubscriptionBox = () => {
  const styles = {
    container: {
      width: '100%',
      padding: '20px',
      boxSizing: 'border-box',
    },
    categoryHeader: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#333',
      margin: '20px 0',
      textAlign: 'center',
    },
    bookCardContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '20px',
      justifyContent: 'center',
    },
    bookCard: {
      width: '200px',
      padding: '15px',
      borderRadius: '8px',
      border: '1px solid #ddd',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      transition: 'transform 0.3s ease',
    },
    bookImage: {
      width: '100%',
      height: '250px',
      objectFit: 'cover',
      borderRadius: '8px',
    },
    bookTitle: {
      fontSize: '18px',
      fontWeight: 'bold',
      color: '#333',
      marginTop: '10px',
      textAlign: 'center',
    },
    bookDescription: {
      fontSize: '14px',
      color: '#555',
      textAlign: 'center',
      margin: '10px 0',
    },
    button: {
      backgroundColor: '#ff6b00',
      color: '#fff',
      width: '100%',
      padding: '10px',
      fontWeight: 'bold',
      borderRadius: '5px',
      border: 'none',
      cursor: 'pointer',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    buttonText: {
      fontSize: '14px',
      fontWeight: 'bold',
    },
    cartIcon: {
      fontSize: '20px',
    },
    hoverEffect: {
      '&:hover': {
        transform: 'scale(1.05)',
      },
    },
  };

  const books = [
    // Popular New Books
    {
      title: 'The Silent World',
      description: 'A gripping new release exploring the mysteries of the deep sea.',
      image: 'https://via.placeholder.com/200x250?text=The+Silent+World',
    },
    {
      title: 'Future Shock',
      description: 'A sci-fi thriller set in a dystopian future.',
      image: 'https://via.placeholder.com/200x250?text=Future+Shock',
    },
    {
      title: 'Echoes of the Past',
      description: 'A historical fiction novel that brings the past to life.',
      image: 'https://via.placeholder.com/200x250?text=Echoes+of+the+Past',
    },
    // Story Books
    {
      title: 'The Lost City',
      description: 'A heartwarming story about a treasure hunt and new beginnings.',
      image: 'https://via.placeholder.com/200x250?text=The+Lost+City',
    },
    {
      title: 'Mystery in the Woods',
      description: 'A chilling story of a mystery that unfolds in the woods.',
      image: 'https://via.placeholder.com/200x250?text=Mystery+in+the+Woods',
    },
    {
      title: 'A Twist of Fate',
      description: 'A novel about fate, love, and unexpected turns in life.',
      image: 'https://via.placeholder.com/200x250?text=A+Twist+of+Fate',
    },
    // Motivational Books
    {
      title: 'The Power of Now',
      description: 'A guide to living in the present moment and achieving inner peace.',
      image: 'https://via.placeholder.com/200x250?text=The+Power+of+Now',
    },
    {
      title: 'Start with Why',
      description: 'A book about the importance of finding your purpose and passion.',
      image: 'https://via.placeholder.com/200x250?text=Start+with+Why',
    },
    {
      title: 'Mindset: The New Psychology of Success',
      description: 'A look into how our mindset determines success in life.',
      image: 'https://via.placeholder.com/200x250?text=Mindset+Book',
    },
    // Horror Books
    {
      title: 'The Haunting of Hill House',
      description: 'A classic horror story of a haunted house and its sinister past.',
      image: 'https://via.placeholder.com/200x250?text=The+Haunting+of+Hill+House',
    },
    {
      title: 'The Shining',
      description: 'A gripping tale of terror in a remote hotel.',
      image: 'https://via.placeholder.com/200x250?text=The+Shining',
    },
    {
      title: 'The Exorcist',
      description: 'A chilling novel about possession and the battle for a soul.',
      image: 'https://via.placeholder.com/200x250?text=The+Exorcist',
    },
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.categoryHeader}>Personalized Book Subscription</h1>

      {/* Category 1 - Popular New Books */}
      <h2 style={styles.categoryHeader}>Popular New Books</h2>
      <div style={styles.bookCardContainer}>
        {books.slice(0, 3).map((book, index) => (
          <div key={index} style={styles.bookCard} className="hoverEffect">
            <img src={book.image} alt={book.title} style={styles.bookImage} />
            <h3 style={styles.bookTitle}>{book.title}</h3>
            <p style={styles.bookDescription}>{book.description}</p>
            <button style={styles.button}>
              <span style={styles.buttonText}>Subscribe</span>
              <i className="bx bx-cart" style={styles.cartIcon}></i>
            </button>
          </div>
        ))}
      </div>

      {/* Category 2 - Story Books */}
      <h2 style={styles.categoryHeader}>Story Books</h2>
      <div style={styles.bookCardContainer}>
        {books.slice(3, 6).map((book, index) => (
          <div key={index} style={styles.bookCard} className="hoverEffect">
            <img src={book.image} alt={book.title} style={styles.bookImage} />
            <h3 style={styles.bookTitle}>{book.title}</h3>
            <p style={styles.bookDescription}>{book.description}</p>
            <button style={styles.button}>
              <span style={styles.buttonText}>Subscribe</span>
              <i className="bx bx-cart" style={styles.cartIcon}></i>
            </button>
          </div>
        ))}
      </div>

      {/* Category 3 - Motivational Books */}
      <h2 style={styles.categoryHeader}>Motivational Books</h2>
      <div style={styles.bookCardContainer}>
        {books.slice(6, 9).map((book, index) => (
          <div key={index} style={styles.bookCard} className="hoverEffect">
            <img src={book.image} alt={book.title} style={styles.bookImage} />
            <h3 style={styles.bookTitle}>{book.title}</h3>
            <p style={styles.bookDescription}>{book.description}</p>
            <button style={styles.button}>
              <span style={styles.buttonText}>Subscribe</span>
              <i className="bx bx-cart" style={styles.cartIcon}></i>
            </button>
          </div>
        ))}
      </div>

      {/* Category 4 - Horror Books */}
      <h2 style={styles.categoryHeader}>Horror Books</h2>
      <div style={styles.bookCardContainer}>
        {books.slice(9, 12).map((book, index) => (
          <div key={index} style={styles.bookCard} className="hoverEffect">
            <img src={book.image} alt={book.title} style={styles.bookImage} />
            <h3 style={styles.bookTitle}>{book.title}</h3>
            <p style={styles.bookDescription}>{book.description}</p>
            <button style={styles.button}>
              <span style={styles.buttonText}>Subscribe</span>
              <i className="bx bx-cart" style={styles.cartIcon}></i>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PersonalizedSubscriptionBox;
