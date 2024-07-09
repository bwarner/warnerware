import {
  siPostgresql,
  siMysql,
  siMongodb,
  siCouchbase,
  siMicrosoftsqlserver,
} from "simple-icons";
import { Fragment } from "react";
import { Icon } from "@/components/icon";

const tools = [
  { icon: siPostgresql, title: "Postgres", color: "#61DAFB" },
  { icon: siMysql, title: "MySQL", color: "#4479A1" },
  { icon: siMongodb, title: "MongoDB", color: "#47A248" },
  { icon: siCouchbase, title: "Couchbase", color: "#EA2328" },
  {
    icon: siMicrosoftsqlserver,
    title: "Microsoft SQL Server",
    color: "#CC2927",
  },
];
type ToolsProps = {
  id: string;
  className?: string;
};

export default function Databases({ id, className }: ToolsProps) {
  return (
    <div className={className}>
      <h1 id={id} className="font-montserrat text-6xl pb-6">
        Databases
      </h1>
      <p className="pb-3">
        These are the database that I&apos;m proficient with:
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
