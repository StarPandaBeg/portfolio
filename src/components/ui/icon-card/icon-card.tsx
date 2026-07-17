import { cn } from "@sglara/cn";
import type { HTMLAttributes } from "react";
import type { IconType } from "react-icons";
import styles from "./icon-card.module.scss";

export interface IconCardProps extends HTMLAttributes<HTMLDivElement> {
  icon: IconType;
  header: string;
  content: string;
  subheader?: string;

  slim?: boolean;
}

export default function IconCard({
  icon: Icon,
  header,
  content,
  subheader,
  className,
  slim,
  ...props
}: IconCardProps) {
  return (
    <div
      className={cn(styles.icon_card, slim && styles.icon_card_slim, className)}
      {...props}
    >
      <div className={styles.icon_card_icon}>
        <Icon />
      </div>
      <div className={styles.icon_card_content}>
        {subheader && <h4>{subheader}</h4>}
        <h3>{header}</h3>
        <p>{content}</p>
      </div>
    </div>
  );
}
