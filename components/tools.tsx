import {
  siReact,
  siNextdotjs,
  siTypescript,
  siJavascript,
  siRuby,
  siRubyonrails,
  siTailwindcss,
  siNestjs,
  siRedux,
  siHtml5,
  siCss3,
  siJest,
  siDocker,
  siSwift,
  siIos,
} from "simple-icons";
import { Fragment } from "react";
import { Icon } from "@/components/icon";

const tools = [
  { icon: siTypescript, title: "TypeScript", color: "#3178C6" },
  { icon: siJavascript, title: "JavaScript", color: "#F7DF1E" },
  { icon: siReact, title: "React", color: "#61DAFB" },
  { icon: siNextdotjs, title: "Next.js", color: "#000000" },
  { icon: siNestjs, title: "NestJS", color: "#E0234E" },
  { icon: siRuby, title: "Ruby", color: "#CC342D" },
  { icon: siRubyonrails, title: "Ruby on Rails", color: "#D30001" },
  { icon: siTailwindcss, title: "Tailwind CSS", color: "#06B6D4" },
  { icon: siHtml5, title: "HTML5", color: "#E34F26" },
  { icon: siCss3, title: "CSS3", color: "#1572B6" },
  { icon: siJest, title: "Jest", color: "#C21325" },
  { icon: siRedux, title: "Redux", color: "#764ABC" },
  { icon: siSwift, title: "Swift", color: "#FA7343" },
  { icon: siIos, title: "iOS", color: "#000000" },
  { icon: siDocker, title: "Docker", color: "#2496ED" },
];
type ToolsProps = {
  id: string;
  className?: string;
};

export default function Tools({ id, className }: ToolsProps) {
  return (
    <div className={className}>
      <h1 id={id} className="font-montserrat text-6xl pb-6">
        Tools
      </h1>
      <p className="pb-3">
        These are the tools that I use to build this website:
      </p>
      <dl className="grid grid-cols-tools md:grid-cols-toolsMid gap-6">
        {tools.map((tool) => (
          <Fragment key={tool.title}>
            <dt>
              <Icon icon={tool.icon} color={tool.color} />
            </dt>
            <dd>{tool.title}</dd>
          </Fragment>
        ))}
      </dl>
    </div>
  );
}
