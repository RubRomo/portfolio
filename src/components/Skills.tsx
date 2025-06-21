import "../styles/Skills.css";
import htmlLogo from "../assets/images/skills/html-logo.png";
import cssLogo from "../assets/images/skills/css-logo.png";
import javascriptLogo from "../assets/images/skills/javascript-logo.png";
import reactLogo from "../assets/images/skills/react-logo.png";
import bootstrapLogo from "../assets/images/skills/bootstrap-logo.png";
import gitLogo from "../assets/images/skills/git-logo.png";
import dockerLogo from "../assets/images/skills/docker-logo.png";
import awsLogo from "../assets/images/skills/aws-logo.png";
import javaLogo from "../assets/images/skills/java-logo.png";
import springbootLogo from "../assets/images/skills/springboot-logo.png";
import sqlLogo from "../assets/images/skills/sql-logo.png";
import postmanLogo from "../assets/images/skills/postman-logo.png";
import vsLogo from "../assets/images/skills/vs-logo.png";
import coldfusionLogo from "../assets/images/skills/coldfusion-logo.png";
import selleniumLogo from "../assets/images/skills/sellenium-logo.png";

const Skills = () => {
  return (
    <section id="skills" className="d-flex align-items-center py-5">
      <div className="container">
        <h2 className="text-center mb-4">Skills</h2>
        <div className="row">
          <SkillItem urlImg={htmlLogo} name="HTML" />
          <SkillItem urlImg={cssLogo} name="CSS" />
          <SkillItem urlImg={javascriptLogo} name="JavaScript" />
          <SkillItem urlImg={reactLogo} name="React" />
          <SkillItem urlImg={bootstrapLogo} name="Bootstrap" />
          <SkillItem urlImg={gitLogo} name="Git" />
          <SkillItem urlImg={dockerLogo} name="Docker" />
          <SkillItem urlImg={awsLogo} name="AWS" />
          <SkillItem urlImg={javaLogo} name="Java" />
          <SkillItem urlImg={springbootLogo} name="Spring Boot" />
          <SkillItem urlImg={sqlLogo} name="SQL" />
          <SkillItem urlImg={postmanLogo} name="Postman" />
          <SkillItem urlImg={vsLogo} name="VS Code" />
          <SkillItem urlImg={coldfusionLogo} name="ColdFusion" />
          <SkillItem urlImg={selleniumLogo} name="Selenium" />
        </div>
      </div>
    </section>
  );
};

type Props = {
  urlImg: string;
  name: string;
};

const SkillItem = ({ urlImg, name }: Props) => (
  <div className="col-6 col-lg-3 p-2">
    <div className="flex-item d-flex">
      <div className="col-4 d-flex justify-content-end">
        <div>
          <img className="flex-img p-1" src={urlImg} alt={`${name} Logo`} />
        </div>
      </div>
      <div className="col-8 ps-0 ps-md-2 d-flex align-items-center">
        <span>{name}</span>
      </div>
    </div>
  </div>
);

export default Skills;
