import fullstackLogo from "../assets/images/fullstack-logo.png";
import SocialIcon from "./SocialIcon";

const Hero = () => {
  return (
    <section
      id="hero"
      className="d-flex align-items-center bg-colorful-gradient"
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-6">
            <h1 className="">Hello ! I am Rubén</h1>
            <h2 className="">Web Developer</h2>
            <p className="">
              I am an appasionate full-stack web developer, always looking for
              new challenges.
            </p>
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
          </div>
          <div className="col-md-6 text-center d-none d-md-block">
            <img
              className="hero-logo"
              src={fullstackLogo}
              alt="Fullstack Logo"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
