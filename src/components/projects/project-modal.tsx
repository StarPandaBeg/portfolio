import Modal from "@/components/ui/modal/modal";
import type { ProjectEntry } from "@/content/projects";
import styles from "./project-modal.module.scss";

export interface ProjectModalProps {
  onClose: () => void;
  open: boolean;
  project: ProjectEntry;
}

export default function ProjectModal({
  onClose,
  open,
  project,
}: ProjectModalProps) {
  const Details = project.Details;

  return (
    <Modal open={open} size="wide" title={project.title} onClose={onClose}>
      <article className={styles.project}>
        {Details && <Details />}
      </article>
    </Modal>
  );
}
