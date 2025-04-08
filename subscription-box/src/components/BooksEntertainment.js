import React from "react";
import { useNavigate } from "react-router-dom";

const BooksEntertainment = ({ addToCart }) => {
  const navigate = useNavigate();

  const styles = {
    container: {
      width: "100%",
      padding: "20px",
      boxSizing: "border-box",
    },
    header: {
      fontSize: "28px",
      fontWeight: "bold",
      color: "#333",
      margin: "60px 0 30px", // Added margin-top to create space between navbar and header
      textAlign: "center",
      fontFamily: "Times New Roman, serif", // Set font to Times New Roman
    },
    descriptionText: {
      textAlign: "center",
      margin: "10px 0 30px",
      fontSize: "18px", // Adjusted to make it visually lighter than the heading
      fontWeight: "500", // Lighter bold weight
      color: "#555",
      maxWidth: "80%", // Limit the width to ensure text breaks into two lines
      marginLeft: "auto",
      marginRight: "auto",
      lineHeight: "1.5em", // Control the line height for readability
    },
    bookCardContainer: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)", // 4 cards per row
      gap: "20px",
    },
    bookCard: {
      padding: "20px",
      borderRadius: "10px",
      border: "1px solid #ddd",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      backgroundColor: "#fff",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-between",
      height: "400px",
      overflow: "hidden",
      position: "relative",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
    },
    bookCardHover: {
      transform: "scale(1.05)",
      boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2)",
    },
    bookImage: {
      width: "100%",
      height: "200px",
      objectFit: "cover",
      borderRadius: "10px",
    },
    bookTitle: {
      fontSize: "18px",
      fontWeight: "bold",
      color: "#333",
      textAlign: "center",
      margin: "10px 0",
    },
    bookDescription: {
      fontSize: "14px",
      color: "#555",
      textAlign: "center",
      lineHeight: "1.5em",
      maxHeight: "3em", // Show only 2 lines (default)
      overflow: "hidden",
      textOverflow: "ellipsis",
      transition: "max-height 0.3s ease",
    },
    bookDescriptionHover: {
      maxHeight: "none", // Show full description on hover
    },
    buttonContainer: {
      display: "flex",
      justifyContent: "space-between",
      width: "100%",
      marginTop: "10px",
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

  const generateOrderID = (title) => {
    const date = new Date().getTime();
    return `${title.replace(/\s+/g, "_")}_${date}`;
  };

  const books = [
    {
      title: "Les Miserables",
      description:
        "Les Misérables is the fifth longest-running broadway musical of all time. Les Misérables was written by Victor Hugo, first published in 1862 and is a French historical novel.",
      image:
        "https://cdn.shopify.com/s/files/1/0070/1884/0133/t/8/assets/pf-6e27315a--Books25.jpg?v=1620061517",
      orderID: generateOrderID("Les Miserables"),
    },
    {
      title: "On the Origin of Species",
      description:
        "There’s been a handful of controversial books that have shaken up the very ground in which we build our beliefs on…. and Charles Darwin’s famous ‘On the origin of species’ has been like no other.",
      image:
        "https://cdn.shopify.com/s/files/1/0070/1884/0133/t/8/assets/pf-71b40b91--Books_1200x.jpg?v=1620061288",
      orderID: generateOrderID("On the Origin of Species"),
    },
    {
      title: "The Great Gatsby",
      description:
        "The Great Gatsby was written in 1925 by an American writer F. Scott Fitzgerald and set in the Jazz Age on Long Island.",
      image:
        "https://cdn.shopify.com/s/files/1/0070/1884/0133/t/8/assets/pf-b40b918a--Books2.jpg?v=1620061349",
      orderID: generateOrderID("The Great Gatsby"),
    },
    {
      title: "1984",
      description:
        "1984 is a dystopian social science fiction novel and is written by English novelist George Orwell.",
      image:
        "https://cdn.shopify.com/s/files/1/0070/1884/0133/t/8/assets/pf-918a8430--Books4.jpg?v=1620061368",
      orderID: generateOrderID("1984"),
    },
    {
      title: "War And Peace",
      description:
        "War and Peace is a novel by the Russian author Leo Tolstoy and published in its entirety in 1869. Often called the greatest novel ever written.",
      image:
        "https://cdn.shopify.com/s/files/1/0070/1884/0133/t/8/assets/pf-30b57dac--Books7.jpg?v=1620061394",
      orderID: generateOrderID("War And Peace"),
    },
    {
      title: "Harry Potter Series",
      description:
        "The series tells the story of a young wizard, Harry Potter who struggles against Lord Voldemort, a dark wizard who intends to become immortal.",
      image:
        "https://cdn.shopify.com/s/files/1/0070/1884/0133/t/8/assets/pf-b57dac15--Books8.jpg?v=1620061403",
      orderID: generateOrderID("Harry Potter Series"),
    },
    {
      title: "Hamlet",
      description:
        "The play is set in Denmark and depicts Prince Hamlet, his revenge against his uncle, Claudius, who has murdered Hamlet's father in order to seize his throne and marry Hamlet's mother.",
      image:
        "https://cdn.shopify.com/s/files/1/0070/1884/0133/t/8/assets/pf-ac157924--Books10.jpg?v=1620061418",
      orderID: generateOrderID("Hamlet"),
    },
    {
      title: "To Kill A Mockingbird",
      description:
        "A thrilling journey through time as characters navigate love, loss, and second chances.",
      image:
        "https://cdn.shopify.com/s/files/1/0070/1884/0133/t/8/assets/pf-157924db--Books11.jpg?v=1620061425",
      orderID: generateOrderID("To Kill A Mockingbird"),
    },
    {
      title: "The Alchemist",
      description:
        "The Alchemist was written by brazilian author Paulo Coelho and was published in 1988.",
      image:
        "https://cdn.shopify.com/s/files/1/0070/1884/0133/t/8/assets/pf-24db0028--Books13.jpg?v=1620061439",
      orderID: generateOrderID("The Alchemist"),
    },
    {
      title: "Don Quixote",
      description:
        "Don Quixote was written by Miguel de Cervantes Don Quixote in the 16th century.",
      image:
        "https://cdn.shopify.com/s/files/1/0070/1884/0133/t/8/assets/pf-28941f65--Books16.jpg?v=1620061460",
      orderID: generateOrderID("Don Quixote"),
    },
    {
      title: "Crime and Punishment",
      description:
        "Crime and Punishment is commonly seen as one of the greatest novels ever written and is a powerful psychological thriller.",
      image:
        "https://cdn.shopify.com/s/files/1/0070/1884/0133/t/8/assets/pf-941f65b8--Books17.jpg?v=1620061466",
      orderID: generateOrderID("Crime and Punishment"),
    },
    {
      title: "The Adventures of Huckleberry Finn",
      description:
        "Adventures of Huckleberry Finn explores themes of race and identity.",
      image:
        "https://cdn.shopify.com/s/files/1/0070/1884/0133/t/8/assets/pf-1f65b801--Books18.jpg?v=1620061473",
      orderID: generateOrderID("The Adventures of Huckleberry Finn"),
    },
  ];

  const handleAddToCart = (book) => {
    addToCart(book);
    alert(`${book.title} has been added to your cart.`);
  };

  const handleSubscriptionRedirect = () => {
    navigate("/subscription");
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>
        📚 Books & Entertainment
      </h1>
      <p style={styles.descriptionText}>
        Whether you’re a full-blown book nerd, or prefer the modern way of
        audio-reading, there are a number of famous printed works that are
        absolute classics, and must be read at least once in your lifetime.
      </p>
      <div style={styles.bookCardContainer}>
        {books.map((book, index) => (
          <div
            key={index}
            style={styles.bookCard}
            onMouseEnter={(e) => {
              Object.assign(e.currentTarget.style, styles.bookCardHover);
              e.currentTarget.querySelector(
                ".description"
              ).style.maxHeight = "none";
            }}
            onMouseLeave={(e) => {
              Object.assign(e.currentTarget.style, {
                transform: "scale(1)",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              });
              e.currentTarget.querySelector(
                ".description"
              ).style.maxHeight = "3em";
            }}
          >
            <img src={book.image} alt={book.title} style={styles.bookImage} />
            <h3 style={styles.bookTitle}>{book.title}</h3>
            <p className="description" style={styles.bookDescription}>
              {book.description}
            </p>
            <div style={styles.buttonContainer}>
              <button
                style={styles.button}
                onClick={() => handleAddToCart(book)}
              >
                Add to Cart
              </button>
              <button
                style={styles.button}
                onClick={handleSubscriptionRedirect}
              >
                Subscription
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BooksEntertainment;
