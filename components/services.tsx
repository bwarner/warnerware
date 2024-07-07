import {
  siStripe,
  siTwilio,
  siGoogletagmanager,
  siStatuspage,
  siAtlassian,
  siJira,
  siDropbox,
  siMixpanel,
  siHeroku,
  siVercel,
  siAmazonecs,
  siAmazonrds,
  siAmazonroute53,
  siAmazonwebservices,
  siCloudinary,
  siFigma,
} from "simple-icons";
import { Fragment } from "react";
import { Icon } from "@/components/icon";

const tools = [
  { icon: siStripe, title: "Stripe", color: "#008CDD" },
  { icon: siTwilio, title: "MySQL", color: "#4479A1" },
  { icon: siDropbox, title: "MongoDB", color: "#47A248" },
  { icon: siHeroku, title: "Heroku", color: "#430098" },
  { icon: siVercel, title: "Vercel", color: "#000000" },
  { icon: siAmazonwebservices, title: "Amazon Web Services", color: "#232F3E" },
  { icon: siAmazonrds, title: "Amazon RDS", color: "#232F3E" },
  { icon: siAmazonroute53, title: "Amazon Route 53", color: "#232F3E" },
  { icon: siAmazonecs, title: "Amazon ECS", color: "#232F3E" },
  { icon: siCloudinary, title: "Cloudinary", color: "#F68712" },
  { icon: siFigma, title: "Figma", color: "#F24E1E" },
];
type Props = {
  id: string;
  className?: string;
};

export default function Services({ id, className }: Props) {
  return (
    <div className={className}>
      <h1 id={id} className="font-montserrat text-6xl pb-6">
        Services
      </h1>
      <p className="pb-3">
        3rd party services that I use to build this website:
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
