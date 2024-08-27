import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home">
      {}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Solar Data Viewer</h1>
          <p>Your gateway to real-time solar energy generation insights.</p>
          <Link to="/sign-up">
            <button>Get Started</button>
          </Link>
        </div>
      </section>

      {}
      <section className="features">
        <h2>Features</h2>
        <div className="feature-cards">
          <div className="feature-card">
            <img src="https://via.placeholder.com/150" alt="Feature 1" />
            <h3>Real-time Data</h3>
            <p>Get up-to-date information on solar energy generation.</p>
          </div>
          <div className="feature-card">
            <img src="https://via.placeholder.com/150" alt="Feature 2" />
            <h3>Analytics</h3>
            <p>Analyze trends with our built-in analytics tools.</p>
          </div>
          <div className="feature-card">
            <img src="https://via.placeholder.com/150" alt="Feature 3" />
            <h3>Custom Reports</h3>
            <p>Create custom reports based on your needs.</p>
          </div>
        </div>
      </section>

      {}
      <section className="cta">
        <h2>Ready to start?</h2>
        <p>Join us today and take control of your solar data.</p>
        <Link to="/sign-up">
          <button>Sign Up Now</button>
        </Link>
      </section>
    </div>
  );
};

export default Home;
