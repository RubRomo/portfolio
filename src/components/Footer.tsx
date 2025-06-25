import SocialIcon from "./SocialIcon";

const Footer = () => {
  return (
    <footer className="bg-dark bg-gradient text-white text-center py-3">
      <div className="container-fluid">
        <div className="row">
          <div>
            <SocialIcon
              url="https://www.linkedin.com/in/ruben-romo-ponce/"
              title="Visit Rubén Romo's LinkedIn Profile"
              iconClass="fa-brands fa-linkedin"
            />
            <SocialIcon
              url="https://github.com/RubRomo"
              title="Visit Rubén Romo's GitHub Profile"
              iconClass="fa-brands fa-github"
            />
            <SocialIcon
              url="https://www.instagram.com/rubenromolive/"
              title="Visit Rubén Romo's Instagram Profile"
              iconClass="fa-brands fa-instagram"
            />
          </div>
          <p className="lead">
            <small>© 2025 Rubén Romo. All Rights Reserved.</small>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
