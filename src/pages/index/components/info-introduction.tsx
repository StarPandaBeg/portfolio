import { cn } from "@sglara/cn";
import type { HTMLAttributes } from "react";
import styles from "./info-introduction.module.scss";

export type InfoIntroductionProps = HTMLAttributes<HTMLDivElement>;

export default function InfoIntroduction({
  className,
  ...props
}: InfoIntroductionProps) {
  return (
    <section className={cn(styles.info_introduction, className)} {...props}>
      123
    </section>
  );
}
