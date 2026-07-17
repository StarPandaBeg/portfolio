import { cn } from "@sglara/cn";
import {
  type HTMLAttributes,
  type ReactNode,
  useEffect,
  useId,
  useRef,
} from "react";
import { createPortal } from "react-dom";
import styles from "./modal.module.scss";

export interface ModalProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  children: ReactNode;
  open: boolean;
  title: ReactNode;
  onClose: () => void;
}

export default function Modal({
  children,
  className,
  open,
  title,
  onClose,
  ...props
}: ModalProps) {
  const titleId = useId();
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const previousActiveElement = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      previousActiveElement?.focus();
    };
  }, [onClose, open]);

  if (!open) return null;

  return createPortal(
    <div
      className={styles.backdrop}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        className={cn(styles.modal, className)}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        {...props}
      >
        <header className={styles.modal_header}>
          <h2 id={titleId}>{title}</h2>
          <button
            ref={closeButtonRef}
            type="button"
            className={styles.modal_close}
            onClick={onClose}
            aria-label="Закрыть окно"
          >
            ×
          </button>
        </header>
        <div className={styles.modal_content}>{children}</div>
      </div>
    </div>,
    document.body,
  );
}
