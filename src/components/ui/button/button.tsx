import { cn } from "@sglara/cn";
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";
import styles from "./button.module.scss";

export type ButtonVariant = "primary" | "secondary" | "muted";
export type ButtonSize = "sm" | "md" | "lg";

type CommonProps = {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
};

type NativeButtonProps = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    as?: "button";
  };

type AnchorButtonProps = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    as: "a";
  };

export type ButtonProps = NativeButtonProps | AnchorButtonProps;

export default function Button({
  as = "button",
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  const buttonClassName = cn(
    styles.button,
    styles[variant],
    styles[size],
    className,
  );

  if (as === "a") {
    return (
      <a
        className={buttonClassName}
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={buttonClassName}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}
