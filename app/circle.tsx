type Props = {
  className: string;
  width: string;
  height: string;
};

export const Circle = ({ className, width, height }: Props) => (
  <svg
    viewBox="0 0 10 10"
    height={height}
    width={width}
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="5" cy="5" r="5" className={className} />
  </svg>
);

export default Circle;
