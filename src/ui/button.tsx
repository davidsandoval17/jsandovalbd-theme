import { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
}

function Button({ children }: ButtonProps) {
  return <button className="btn btn-blue">{children}</button>;
}

export default Button;
