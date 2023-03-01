import clsx from "clsx";
import React from "react";
import styles from "./styles.module.scss";

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  htmlType?: "submit" | "reset" | "button";
  variant?: "primary" | "secondary" | "muted";
  type?: "text" | "icon" | "default";
  buttonSize?: "small" | "default";
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  className,
  variant = "primary",
  type = "default",
  buttonSize = "default",
  htmlType = "button",
  loading = false,
  children,
  onClick,
  disabled,
  ...props
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
      type={htmlType}
      onClick={onClick}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <div className={styles.loader}>
          <span className={styles.dot} />
          <span className={styles.dot} />
          <span className={styles.dot} />
        </div>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
