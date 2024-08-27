import '../styles/AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us-page">
      <section className="company-overview">
        <h1>About Us</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </section>

      <section className="mission">
        <h2>Our Mission</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in
          metus sed ipsum efficitur tincidunt. In convallis, nisi at pharetra
          hendrerit, nunc lacus ultricies nulla, eget fermentum lacus nunc ac
          lacus.
        </p>
      </section>

      <section className="vision">
        <h2>Our Vision</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          euismod, lectus et cursus efficitur, erat urna pretium neque, ac
          bibendum velit arcu non nisi. Nam ut lorem ut justo ullamcorper
          tempus.
        </p>
      </section>

      <section className="team">
        <h2>Meet Our Team</h2>
        <div className="team-members">
          <div className="team-member">
            <img src="https://via.placeholder.com/150" alt="Team Member 1" />
            <h3>John Doe</h3>
            <p>CEO</p>
          </div>
          <div className="team-member">
            <img src="https://via.placeholder.com/150" alt="Team Member 2" />
            <h3>Jane Smith</h3>
            <p>CTO</p>
          </div>
          <div className="team-member">
            <img src="https://via.placeholder.com/150" alt="Team Member 3" />
            <h3>Michael Brown</h3>
            <p>COO</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
