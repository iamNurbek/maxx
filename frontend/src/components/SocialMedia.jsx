import '@fortawesome/fontawesome-free/css/all.min.css';
import '../styles/SocialMedia.css';

const SocialMedia = () => {
  return (
    <div className="social-media">
      <h2>Follow Us</h2>
      <ul>
        <li>
          <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
            <i className="fab fa-facebook-f"></i> Facebook
          </a>
        </li>
        <li>
          <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
            <i className="fab fa-twitter"></i> Twitter
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin-in"></i> LinkedIn
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialMedia;
