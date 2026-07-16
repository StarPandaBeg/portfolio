/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_URL_GITHUB: string;
  readonly VITE_URL_HH: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
