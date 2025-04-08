const HowItWorks = () => {
  return (
    <div
      style={{
        fontFamily: "'Arial', sans-serif",
        backgroundColor: "#4A148C",
        color: "black", // Default text color set to black
        padding: "20px",
        backgroundImage: 'url("https://img.freepik.com/premium-vector/vector-abstract-stylish-orange-yellow-waves-background_746838-248.jpg?semt=ais_hybrid")',
        backgroundSize: "cover", // Ensures the background image covers the entire area
        backgroundPosition: "center", // Centers the background image
        backgroundRepeat: "no-repeat", // Prevents the image from repeating
        height: "100vh", // Makes the background image cover the full height of the viewport
        margin: "0", // Removes default margin
        display: "flex", // Enables centering the content
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <h2>Three steps to smarter spending</h2>
      </div>
      <div style={{ display: "flex", justifyContent: "center", gap: "40px" }}>
        <div style={{ textAlign: "center", maxWidth: "300px" }}>
          <h3 style={{ fontSize: "36px", margin: "0", color: "#FFD54F" }}>1</h3>
          <p>
            <strong>Sign up & load funds</strong>
            <br />
            Verify your company and load funds to your Spendesk wallet from your existing bank account.
          </p>
        </div>
        <div style={{ textAlign: "center", maxWidth: "300px" }}>
          <h3 style={{ fontSize: "36px", margin: "0", color: "#FFD54F" }}>2</h3>
          <p>
            <strong>Set your spending rules</strong>
            <br />
            Define teams, approval workflows, spending policies, and card limits that work for you.
          </p>
        </div>
        <div style={{ textAlign: "center", maxWidth: "300px" }}>
          <h3 style={{ fontSize: "36px", margin: "0", color: "#FFD54F" }}>3</h3>
          <p>
            <strong>Invite your team</strong>
            <br />
            Employees can request funds, pay securely, and submit receipts in a snap with the Spendesk app.
          </p>
        </div>
      </div>
      <div style={{ textAlign: "center", marginTop: "60px" }}>
        <h3>A simple and effective spending process that works for everyone at your company</h3>
        <p>Control &bull; Pay &bull; Track &bull; Collect &bull; Bookkeep &bull; Export</p>
      </div>
    </div>
  );
};

export default HowItWorks;
