import React, { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  size?: "small" | "medium" | "large";
  className?: string;
  icon?: ReactNode;
  endIcon?: ReactNode;
};

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  disabled = false,
  size = "medium",
  className = "",
  icon,
  endIcon,
}) => {
  const getButtonClasses = () => {
    let classes = "btn ";

    if (size === "small") classes += "btn-small ";
    if (size === "medium") classes += "btn-medium ";
    if (size === "large") classes += "btn-large ";

    if (className) classes += `${className} `;

    return classes.trim();
  };

  return (
    <button
      className={getButtonClasses()}
      onClick={onClick}
      disabled={disabled}
    >
      <div className="flex gap-4 items-center">
        {icon && <span>{icon}</span>}
        {children}
        {endIcon && <span>{endIcon}</span>}
      </div>
    </button>
  );
};

export default Button;
