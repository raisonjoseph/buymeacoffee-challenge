import clsx from "clsx";
import React from "react";
import styles from "./styles.module.scss";

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  type?: "text" | "default";
  buttonSize?: "small" | "default";
}

const Button: React.FC<ButtonProps> = ({
  className,
  variant = "primary",
  type = "default",
  buttonSize = "default",
  children,
  onClick,
}) => {
  return (
    <button
      className={clsx(
        styles.button,
        className,
        styles[variant],
        styles[type],
        styles[buttonSize]
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
