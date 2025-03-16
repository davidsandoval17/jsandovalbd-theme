/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly BASE_PATH: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
