"use client";

import { tv } from "tailwind-variants";
import "./button.css";
import { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** El texto que se mostrará dentro del botón */
  isLoading?: boolean;
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
}

const buttonClasses = tv({
  base: "btn",
  variants: {
    variant: {
      primary: "btn-primary",
      secondary: "btn-secondary",
    },
    size: {
      sm: "btn-sm",
      md: "btn-md",
      lg: "btn-lg",
    },
  },
});

function Button({ children, className, variant = "primary", size = "md", ...props }: ButtonProps) {
  return (
    <button className={[buttonClasses({ variant, size }), className].join(" ")} {...props}>
      {children}
    </button>
  );
}

export default Button;
