import "../styles/Projects.css";
import mealFinderImg from "../assets/images/projects/meal-finder.png";
import portfolioImg from "../assets/images/projects/portfolio.png";
import usersAPIImg from "../assets/images/projects/springboot-api.png";
import crudAIImg from "../assets/images/projects/crud-ai.png";

const techIcons = {
  react:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  js: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  ts: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  css: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  bs: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  java: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
  spring:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg",
  mysql:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
  json: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/json/json-original.svg",
  openai: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/openai.svg",
  aws: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
  supabase:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg",
  postgresql:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg",
  chakraui:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/chakraui/chakraui-original.svg",
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="d-flex align-items-center bg-dark bg-gradient text-white py-5"
    >
      <div className="container" id="projects-container">
        <h2 className="text-center pb-4">Projects</h2>
        <div className="row align-items-stretch g-4">
          <ProjectCard
            urlImg={crudAIImg}
            title="CRUD AI"
            description="AI-powered CRUD application where can adds products using natural language and manage the actions easily."
            technologies={["react", "ts", "openai", "aws"]}
            gitHubUrl="https://github.com/RubRomo/crud-ai"
            liveDemoUrl="http://react-crud-ai.s3-website-us-east-1.amazonaws.com/"
          />
          <ProjectCard
            urlImg={mealFinderImg}
            title="Meal Finder"
            description="Demo React application - allow users search for meal recipes, view detailed ingredients, and discover new dishes."
            technologies={["react", "ts", "chakraui", "aws"]}
            gitHubUrl="https://github.com/RubRomo/react-meal-finder"
            liveDemoUrl="http://react-meal-finder.s3-website.us-east-2.amazonaws.com/"
          />
          <ProjectCard
            urlImg={portfolioImg}
            title="Portfolio"
            description="Web developer portfolio using minimal 3d design and smooth animations."
            technologies={["react", "ts", "bs", "css", "aws"]}
            gitHubUrl="https://github.com/RubRomo/portfolio"
            liveDemoUrl="http://react-ruben-portfolio.s3-website.us-east-2.amazonaws.com/"
          />
          <ProjectCard
            urlImg={usersAPIImg}
            title="REST API"
            description="API Restful for user management it also provides JWT authentication based on role access control."
            technologies={["java", "spring", "mysql", "json"]}
            gitHubUrl="https://github.com/RubRomo/springboot-users-api"
          />
        </div>
      </div>
    </section>
  );
};

type TechName =
  | "react"
  | "js"
  | "ts"
  | "css"
  | "bs"
  | "java"
  | "spring"
  | "mysql"
  | "json"
  | "openai"
  | "aws"
  | "supabase"
  | "postgresql"
  | "chakraui";

type Props = {
  urlImg: string;
  title: string;
  description: string;
  technologies: TechName[];
  gitHubUrl: string;
  liveDemoUrl?: string;
};

const ProjectCard = ({
  urlImg,
  title,
  description,
  technologies,
  gitHubUrl,
  liveDemoUrl,
}: Props) => {
  const techsToCheck: TechName[] = ["java", "mysql", "openai"];

  return (
    <div className="col-md-4 d-flex">
      <div
        className="card cursor-pointer rounded p-2 p-md-3"
        style={{ fontSize: "16px" }}
      >
        <img src={urlImg} className="w-100 rounded" alt={`${title} preview`} />
        <div className="text-white pt-2">
          <h4>{title}</h4>

          <p className="">{description}</p>
          <div className="d-flex flex-wrap gap-2">
            {technologies.map(function (tech) {
              const iconClass = techsToCheck.includes(tech)
                ? "bg-light rounded p-1"
                : "";
              return (
                <img
                  className={iconClass}
                  key={tech}
                  src={techIcons[tech]}
                  alt={tech}
                  style={{ height: "6vh" }}
                />
              );
            })}
          </div>
        </div>
        <div className="d-flex flex-column justify-content-end mt-auto text-white">
          <hr className="text-white my-2" />
          <div className="d-flex justify-content-end gap-3">
            <a
              className="text-decoration-none"
              href={gitHubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            {liveDemoUrl && (
              <>
                <div className="vr"></div>
                <a
                  className="text-decoration-none"
                  href={liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
