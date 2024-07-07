import React from "react";
import type { SimpleIcon } from "simple-icons";

// Define the props interface
interface IconProps {
  icon: SimpleIcon;
  size?: number;
  title?: string;
  color?: string;
  className?: string; // New prop for additional classes
}

const Icon: React.FC<IconProps> = ({
  icon,
  size = 24,
  title,
  color,
  className, // Destructure className
}) => {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill={color || icon.hex}
      dangerouslySetInnerHTML={{ __html: icon.svg }}
      aria-label={title || icon.title}
      className={className} // Apply className
    />
  );
};

export { Icon };
