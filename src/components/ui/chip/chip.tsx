import { cn } from "@sglara/cn";
import type { HTMLAttributes } from "react";
import styles from "./chip.module.scss";

export type ChipVariant = "success" | "primary" | "secondary";

export type ChipProps = HTMLAttributes<HTMLSpanElement> & {
  dot?: boolean;
  variant?: ChipVariant;
};

export default function Chip({
  dot = false,
  variant = "primary",
  className,
  ...props
}: ChipProps) {
  return (
    <span
      className={cn(
        styles.chip,
        styles[variant],
        dot && styles.withDot,
        className,
      )}
      {...props}
    />
  );
}
