import React from 'react';

const Homepage = () => {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.logo}>DREAM NEST</h1>
        <nav style={styles.nav}>
          <a href="#menu">Menu</a>
          <a href="#about">About Us</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      <section id="hero" style={styles.hero}>
        <h2>Welcome to DREAM NEST</h2>
        <p>Discover our delicious menu and enjoy a great dining experience.</p>
        <a href="#menu" style={styles.button}>View Menu</a>
      </section>
      <section id="menu" style={styles.section}>
        <h2>Our Menu</h2>
        <p>Check out our mouth-watering dishes.</p>
        <div style={styles.menuItems}>
          
        </div>
      </section>
      <section id="about" style={styles.section}>
        <h2>About Us</h2>
        <p>Learn about our history and commitment to quality.</p>
      </section>
      <section id="contact" style={styles.section}>
        <h2>Contact Us</h2>
        <p>Reach out to us for reservations and inquiries.</p>
      </section>
      <footer style={styles.footer}>
        <p>&copy; 2024 Restaurant Name. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    maxWidth: '1600px',
    margin: '0 auto',
    padding: '20px',
    minHeight: '100vh',
    backgroundColor: 'bisque', // Light gray background color
    color: '#333',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
  },
  logo: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
  nav: {
    display: 'flex',
    gap: '20px',
  },
  hero: {
    textAlign: 'center',
    marginBottom: '40px',
    padding: '20px',
    backgroundColor: 'bisque',
    borderRadius: '5px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  button: {
    display: 'inline-block',
    padding: '10px 20px',
    backgroundColor: '#ff6347',
    color: 'bisque',
    textDecoration: 'none',
    borderRadius: '5px',
    transition: 'background-color 0.3s',
  },
  section: {
    marginBottom: '40px',
    padding: '20px',
    backgroundColor: 'bisque',
    borderRadius: '5px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  menuItems: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: '20px',
  },
  menuItem: {
    border: '1px solid #ddd',
    borderRadius: '5px',
    padding: '10px',
    textAlign: 'center',
  },
  footer: {
    textAlign: 'center',
    marginTop: '40px',
    padding: '20px',
    borderTop: '1px solid #ddd',
  },
};

export default Homepage;
