import { cn } from "@sglara/cn";
import type { HTMLAttributes } from "react";
import styles from "./chip.module.scss";

export type ChipProps = HTMLAttributes<HTMLSpanElement>;

export default function Chip({ className, ...props }: ChipProps) {
  return <span className={cn(styles.chip, className)} {...props} />;
}
