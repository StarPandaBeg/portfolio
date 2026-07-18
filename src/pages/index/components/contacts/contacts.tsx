import catContactImg from "@/assets/images/cat-contact.png";
import Button from "@/components/ui/button/button";
import { contacts } from "@/config";
import { cn } from "@sglara/cn";
import type { HTMLAttributes } from "react";
import { HiMiniArrowUpRight } from "react-icons/hi2";
import styles from "./contacts.module.scss";

export interface ContactEntry {
  label: string;
  value: string;
  href: string;
}

export type ContactsProps = HTMLAttributes<HTMLElement>;

export default function Contacts({ className, ...props }: ContactsProps) {
  const primaryContact = contacts[0];

  return (
    <section className={cn(styles.contacts, className)} {...props}>
      <div className={styles.content}>
        <h2>Давайте создадим что-то классное вместе!</h2>
        <p>Открыт для новых возможностей</p>
      </div>
      <img className={styles.image} src={catContactImg} alt="" />
      <ul className={styles.list}>
        {contacts.map((contact) => (
          <li key={`${contact.label}-${contact.value}`}>
            <a href={contact.href} target="_blank" rel="noreferrer">
              <strong>{contact.label}</strong>
              <span>
                {contact.value}
                <HiMiniArrowUpRight />
              </span>
            </a>
          </li>
        ))}
      </ul>
      {primaryContact && (
        <Button
          as="a"
          className={styles.button}
          href={primaryContact.href}
          target="_blank"
          rel="noreferrer"
          size="lg"
        >
          Связаться со мной
        </Button>
      )}
    </section>
  );
}
