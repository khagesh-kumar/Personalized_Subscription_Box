import React from 'react';

const Dashboard = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundImage: 'url("https://t4.ftcdn.net/jpg/01/90/51/83/360_F_190518339_hKoobCcAYeiwi9DsOPZzKbKBo4ZLrrUP.jpg")',
        backgroundSize: 'cover', // Ensure the image covers the entire screen
        backgroundPosition: 'center', // Center the background image
        backgroundRepeat: 'no-repeat', // Prevent the image from repeating
        fontFamily: "'Arial', sans-serif",
        position: 'relative', // To position elements absolutely
        padding: '20px',
        flexDirection: 'column', // Align elements vertically
        textAlign: 'center',
      }}
    >
      {/* Top-right image */}
      <img
        src="https://cdn3d.iconscout.com/3d/premium/thumb/boy-doing-video-call-with-smartphone-on-bean-bag-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--online-conversation-office-meeting-business-conference-work-pack-illustrations-4688330.png"
        alt="Boy Doing Video Call"
        style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          width: '300px', // Adjusted size
          height: '300px', // Adjusted size
          objectFit: 'contain',
        }}
      />

      {/* Bottom-left mirrored image */}
      <img
        src="https://www.codermine.com/boy.png"
        alt="Boy Mirrored"
        style={{
          position: 'absolute',
          bottom: '20px',
          left: '20px',
          width: '250px', // Adjusted size
          height: '300px', // Adjusted size
          objectFit: 'contain',
          transform: 'scaleX(-1)', // Mirrors the image horizontally
        }}
      />

      {/* Styled heading */}
      <h1
        style={{
          fontSize: '35px', // Smaller font size for "Welcome to"
          fontWeight: 'bold', // Bold text
          color: 'red', // Thick black text color
          textAlign: 'center',
          textShadow: `2px 2px 4px #B0B0B0,  /* Ash shadow */`,
        }}
      >
        Welcome to
      </h1>
      
      <h2
        style={{
          fontSize: '60px', // Larger font size for the main text
          fontWeight: 'bold',
          color: '6657DF', // Thick black text color
          textAlign: 'center',
          textShadow: `2px 2px 4px #B0B0B0,  /* Ash shadow */`,
        }}
      >
        PERSONALISED SUBSCRIPTION BOX GENERATOR
      </h2>

      {/* Subheading */}
      <p
        style={{
          fontSize: '18px',
          color: 'blue', // Thick black text color
          marginTop: '10px',
          marginBottom: '30px',
          textShadow: `2px 2px 4px #B0B0B0,  /* Ash shadow */`,
        }}
      >
        <b><i>Explore and manage your subscription options</i></b>
      </p>

      {/* Buttons */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
        <button
          onClick={() => alert('Sign Up button clicked')}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            border: 'none',
            backgroundColor: '#007bff', // Blue color
            color: '#fff',
            borderRadius: '30px', // Rounded shape for bubbly look
            cursor: 'pointer',
            transition: 'all 0.3s ease',
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = '#0056b3')}
          onMouseOut={(e) => (e.target.style.backgroundColor = '#007bff')}
        >
          Sign Up →
        </button>

        <button
          onClick={() => alert('Get Started button clicked')}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: '#333',
            color: '#fff',
            border: 'none',
            borderRadius: '30px', // Rounded shape for bubbly look
            cursor: 'pointer',
            transition: 'all 0.3s ease',
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = '#555')}
          onMouseOut={(e) => (e.target.style.backgroundColor = '#333')}
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
