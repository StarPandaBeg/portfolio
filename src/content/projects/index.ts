import type { ComponentType } from "react";
import type { ProjectEntry } from "./types";

type ProjectModule = {
  default: ComponentType;
  project: Omit<ProjectEntry, "Details">;
};

const modules = import.meta.glob<ProjectModule>("./items/*.mdx", {
  eager: true,
});

export const projects = Object.values(modules)
  .map((module) => ({
    ...module.project,
    Details: module.default,
  }))
  .sort((a, b) => a.order - b.order);

export function getProject(slug?: string) {
  if (!slug) return null;

  return projects.find((project) => project.slug === slug) ?? null;
}

export type { ProjectEntry };
