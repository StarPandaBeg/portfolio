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

  const MDXComponent: ComponentType;
  export default MDXComponent;
}
