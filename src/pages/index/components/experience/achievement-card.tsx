import Modal from "@/components/ui/modal/modal";
import type { HTMLAttributes } from "react";
import { useCallback, useState } from "react";
import styles from "./achievement-card.module.scss";

export type AchievementResultColor = "bronze" | "silver" | "gold";

export interface AchievementEntry {
  icon: string;
  date: string;
  title: string;
  description: string;
  link?: {
    label: string;
    href: string;
  };
  modal?: {
    label: string;
    title: string;
    description?: string;
    items: {
      name: string;
      result?: string;
      resultColor?: AchievementResultColor;
      href?: string;
    }[];
  };
}

export interface AchievementCardProps extends HTMLAttributes<HTMLElement> {
  achievement: AchievementEntry;
}

export default function AchievementCard({
  achievement,
  ...props
}: AchievementCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeModal = useCallback(() => setIsModalOpen(false), []);

  return (
    <>
      <article className={styles.card} {...props}>
        <span className={styles.card_icon} aria-hidden="true">
          {achievement.icon}
        </span>
        <div className={styles.card_content}>
          <div className={styles.card_meta}>
            <span>{achievement.date}</span>
            {achievement.link && (
              <a
                href={achievement.link.href}
                target="_blank"
                rel="noreferrer"
              >
                {achievement.link.label} →
              </a>
            )}
            {achievement.modal && (
              <button type="button" onClick={() => setIsModalOpen(true)}>
                {achievement.modal.label} →
              </button>
            )}
          </div>
          <h3>{achievement.title}</h3>
          <p>{achievement.description}</p>
        </div>
      </article>
      {achievement.modal && (
        <Modal
          open={isModalOpen}
          title={achievement.modal.title}
          onClose={closeModal}
        >
          {achievement.modal.description && (
            <p className={styles.achievement_intro}>
              {achievement.modal.description}
            </p>
          )}
          <ul className={styles.achievement_list}>
            {achievement.modal.items.map((item, index) => (
              <li key={`${item.name}-${index}`}>
                <span className={styles.achievement_marker} aria-hidden="true" />
                <div>
                  {item.href ? (
                    <a href={item.href} target="_blank" rel="noreferrer">
                      {item.name} ↗
                    </a>
                  ) : (
                    <strong>{item.name}</strong>
                  )}
                  {item.result && (
                    <span
                      className={
                        item.resultColor
                          ? styles[`result_${item.resultColor}`]
                          : undefined
                      }
                    >
                      {item.result}
                    </span>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </Modal>
      )}
    </>
  );
}
