import { cn } from "@sglara/cn";
import type { HTMLAttributes } from "react";
import type { IconType } from "react-icons";
import styles from "./icon-card.module.scss";

export interface IconCardProps extends HTMLAttributes<HTMLDivElement> {
  icon: IconType;
  header: string;
  content: string;
}

export default function IconCard({
  icon: Icon,
  header,
  content,
  className,
  ...props
}: IconCardProps) {
  return (
    <div className={cn(styles.icon_card, className)} {...props}>
      <div className={styles.icon_card_icon}>
        <Icon />
      </div>
      <div className={styles.icon_card_content}>
        <h3>{header}</h3>
        <p>{content}</p>
      </div>
    </div>
  );
}
