import type { ComponentType } from "react";

export interface ProjectEntry {
  slug: string;
  order: number;
  title: string;
  description: string;
  stack: string[];
  image?: string;
  detailsVisible?: boolean;
  article?: {
    label?: string;
    href: string;
    description?: string;
  };
  Details?: ComponentType;
}
