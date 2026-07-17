import Chip from "@/components/ui/chip/chip";
import IconCard from "@/components/ui/icon-card/icon-card";
import { cn } from "@sglara/cn";
import type { HTMLAttributes, ReactNode } from "react";
import type { IconType } from "react-icons";
import styles from "./job-row.module.scss";

export interface JobRowProps extends HTMLAttributes<HTMLDivElement> {
  job: JobEntry;
}

export interface JobEntry {
  icon: IconType;
  post: string;
  time: string;
  project: string;
  responsibilities: ReactNode[];
  stack: string[];
}

export default function JobRow({ job, className, ...props }: JobRowProps) {
  return (
    <section className={cn(styles.job_row, className)} {...props}>
      <IconCard
        className={styles.job_row_iconcard}
        icon={job.icon}
        header={job.post}
        subheader={job.time}
        content={job.project}
      />
      <div className={styles.job_row_content}>
        {job.responsibilities?.length > 0 && (
          <>
            <h4>Что делаю:</h4>
            <ul className={styles.job_row_tasks}>
              {job.responsibilities.map((r, i) => (
                <li key={i}>{r}</li>
              ))}
            </ul>
          </>
        )}
        {job.stack?.length > 0 && (
          <>
            <h4>Технологии</h4>
            <ul className={styles.job_row_stack}>
              {job.stack.map((s, i) => (
                <li key={i}>
                  <Chip variant="secondary">{s}</Chip>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </section>
  );
}
