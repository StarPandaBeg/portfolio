/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_URL_GITHUB: string;
  readonly VITE_URL_HH: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare module "*.mdx" {
  import type { ComponentType } from "react";
  import type { ProjectEntry } from "@/content/projects";

  export const frontmatter: {
    title: string;
    description?: string;
    date?: string;
    cover?: {
      src: string;
      alt: string;
      caption?: string;
    };
  };
  export const project: Omit<ProjectEntry, "Details">;

  const MDXComponent: ComponentType;
  export default MDXComponent;
}
