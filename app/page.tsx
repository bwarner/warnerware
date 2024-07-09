import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { siGithub, siLinkedin, siX } from "simple-icons";
import { Icon } from "@/components/icon";
import Tools from "@/components/tools";
import Databases from "@/components/databases";
import Services from "@/components/services";
import Section from "@/components/section";
import Skills from "@/components/skills";
import Circle from "./circle";
import experience from "./experience.json";

type ExperienceRowProps = {
  servicePeriod: string;
  companyName: string;
  jobTitle: string;
  companyLink: string;
};

function ExperienceRow({
  servicePeriod,
  companyName,
  jobTitle,
  companyLink,
}: ExperienceRowProps) {
  return (
    <>
      <div className="pt-[6px]">
        <Circle width="10px" height="10px" className="fill-blue-500" />
      </div>
      <div className="text-sm">{servicePeriod}</div>
      <div>
        <h2 className="font-bold text-white text-xs">
          <Link href={companyLink}>{companyName}</Link>
        </h2>
      </div>
      <div className="text-sm">{jobTitle}</div>
    </>
  );
}
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center pt-8">
      <Section className="lg:grid-cols-2">
        <div className="flex flex-col justify-center">
          <Image
            src="/images/developer.webp"
            alt="Web Developer"
            width={800}
            height={1000}
            sizes="(max-width: 600px) 100vw, 50vw"
            objectFit="contain"
            className="mx-auto"
          />
        </div>
        <div className="order flex flex-col justify-center text-4xl lg:text-lg">
          <h3 className="text-[32px] leading-9 pb-3">
            Hello, I&apos;m Byron, a software engineer and entrepreneur, based
            in San Francisco.
          </h3>
          <p className="text-[18px]">
            With over 20 years of experience as Software Engineer, I have a
            proven track record in Full Stack Development, iOS Development, and
            Relational Databases. My expertise includes leading high-performing
            engineering teams, driving data-driven decision making, and
            fostering cross-industry collaboration. I am skilled in Agile
            methodologies and have a strong focus on innovation and project
            management. I consistently strive to deliver exceptional results and
            maintain a keen attention to detail in all projects I undertake.
          </p>
          <div className="flex flex-row gap-3 pt-2">
            <a href="https://www.linkedin.com/in/byronwarner">
              <Icon icon={siLinkedin} title="LinkedIn" />
            </a>
            <a href="https://www.github.com/bwarner">
              <Icon icon={siGithub} title="GitHub" />
            </a>
            <a href="https://x.com/bewarned">
              <Icon icon={siX} title="X" />
            </a>
          </div>
        </div>
      </Section>

      <Section className="bg-gray-500 text-white md:grid-cols-sidenav grid-rows-1 ">
        <aside className="mt-12 sm:hidden md:block">
          <nav className="mx-7">
            <h2 className="font-montserrat text-2xl">Experience</h2>
            <ul className="justify-center list-inside list-disc list-image-circle">
              <li className="mb-1">My Story</li>
              <li className="mb-1">
                <a href="#tools">Tools</a>
              </li>
              <li className="mb-1">
                <a href="#databases">Databases</a>
              </li>
              <li className="mb-1">
                <a href="#services">Services</a>
              </li>
            </ul>
          </nav>
        </aside>
        <div className="my-12">
          <h1 className="font-montserrat text-6xl pb-3">My Experience</h1>
          <p className="text-lg mb-10">
            Beautiful portfolio websites for creatives, powered by clever
            technology and you. Working with Baikal is a pleasure. From now on
            updating your site is something you’ll want to do. Just started
            using awesome Baikal UI Kit. Great way to boost the designing or
            prototyping process
          </p>
          <div className="grid grid-cols-1 gap-4 md:gap-y-10 md:grid-cols-experience">
            {experience.map(
              ({ companyName, jobTitle, companyLink, servicePeriod }) => (
                <ExperienceRow
                  key={companyName + jobTitle}
                  companyName={companyName}
                  companyLink={companyLink}
                  servicePeriod={servicePeriod}
                  jobTitle={jobTitle}
                />
              )
            )}
          </div>
          <Tools id="tools" className="mt-10" />
          <Databases id="databases" className="mt-10" />
          <Services id="services" className="mt-10" />
        </div>
      </Section>
      <Skills />
    </main>
  );
}
