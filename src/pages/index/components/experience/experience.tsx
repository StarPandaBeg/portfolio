import { achievements, jobs } from "@/config";
import { cn } from "@sglara/cn";
import type { HTMLAttributes } from "react";
import styles from "./experience.module.scss";
import AchievementCard from "./achievement-card";
import JobRow from "./job-row";

export type ExperienceProps = HTMLAttributes<HTMLDivElement>;

export default function Experience({ className, ...props }: ExperienceProps) {
  return (
    <section className={cn(styles.experience, className)} {...props}>
      <h2>Опыт работы и достижения</h2>
      <main>
        <div>
          {jobs.map((job, i) => (
            <JobRow job={job} key={i} />
          ))}
        </div>
        {achievements.length > 0 && (
          <div className={styles.experience_achievements}>
            {achievements.map((achievement, index) => (
              <AchievementCard
                achievement={achievement}
                key={`${achievement.date}-${achievement.title}-${index}`}
              />
            ))}
          </div>
        )}
      </main>
    </section>
  );
}
