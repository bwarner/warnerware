type SectionProps = {
  id?: string;
  className?: string;
  children: React.ReactNode;
};

export default function Section({ id, className, children }: SectionProps) {
  return (
    <section
      id={id ? id : ""}
      className={`grid gap-8 px-6 py-6 mx-auto min-h-screen xl:max-w-[1280px] ${
        className ? className : ""
      }`}
    >
      {children}
    </section>
  );
}
