import React, { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  size?: "small" | "medium" | "large";
  className?: string;
  icon?: ReactNode;
};

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  disabled = false,
  size = "medium",
  className = "",
  icon,
}) => {
  const getButtonClasses = () => {
    let classes = "btn ";

    if (size === "small") classes += "btn-small ";
    if (size === "medium") classes += "btn-medium ";
    if (size === "large") classes += "btn-large ";

    if (disabled) classes += "btn-disabled ";

    if (className) classes += `${className} `;

    return classes.trim();
  };

  return (
    <button
      className={getButtonClasses()}
      onClick={onClick}
      disabled={disabled}
    >
      <div className="flex gap-2 items-center">
        {icon && <span>{icon}</span>}
        {children}
      </div>
    </button>
  );
};

export default Button;
