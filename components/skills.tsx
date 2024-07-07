import Section from "./section";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faMobileAlt,
  faDatabase,
  faUsers,
  faChartLine,
  faIndustry,
  faLightbulb,
  faProjectDiagram,
  faTasks,
  faHandshake,
} from "@fortawesome/free-solid-svg-icons";

const skills = [
  {
    icon: faCode,
    name: "Full Stack Development",
    description:
      "20+ years of experience in both front-end and back-end technologies",
  },
  {
    icon: faMobileAlt,
    name: "iOS Development",
    description:
      "Extensive experience in developing and guiding iOS applications",
  },
  {
    icon: faDatabase,
    name: "Relational Databases",
    description: "Proficient in designing and managing SQL and NoSQL databases",
  },
  {
    icon: faUsers,
    name: "Team Leadership",
    description:
      "Proven track record of establishing and leading high-performing engineering teams",
  },
  {
    icon: faChartLine,
    name: "Data-driven Decision Making",
    description:
      "Expert in using data to drive strategic decisions and process improvements",
  },
  {
    icon: faIndustry,
    name: "Cross-Industry Collaboration",
    description:
      "Experience in fostering innovation and collaboration across various industries",
  },
  {
    icon: faLightbulb,
    name: "Innovation",
    description: "Successful in pioneering and launching new product lines",
  },
  {
    icon: faTasks,
    name: "Agile Software Development",
    description:
      "Skilled in Agile methodologies and practices for software development",
  },
  {
    icon: faProjectDiagram,
    name: "Project Management",
    description:
      "Experienced in overseeing projects from ideation to final delivery",
  },
  {
    icon: faHandshake,
    name: "Vendor Management",
    description:
      "Established strong vendor relationships and managed vendor performance",
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen xl:max-w-[1280px] flex flex-col justify-center mx-auto p-6"
    >
      <h1 className="text-2xl font-bold font-montserrat text-6xl text-center mb-4">
        My Skills
      </h1>
      <p className="mb-6 text-xl text-center">
        These are the skills that I have:
      </p>
      <dl className="grid grid-cols-1 md:grid-cols-2 gap-4 text-2xl">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="grid grid-cols-2 grid-rows-2 gap-y-2 gap-x-4 grid-cols-skills"
          >
            <div className="row-span-2">
              <FontAwesomeIcon
                icon={skill.icon}
                className="text-blue-500 text-lg"
              />
            </div>
            <dt>
              <span>{skill.name}</span>
            </dt>
            <dd className="text-base">{skill.description}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
