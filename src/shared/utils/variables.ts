/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_BEARER_TOKEN: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}

export function get_bearer_token(): string {
    if (!import.meta.env.VITE_BEARER_TOKEN as unknown as ImportMeta) {
        throw new Error('From .env VITE_BEARER_TOKEN is not an existing variable');
    }

    return import.meta.env.VITE_BEARER_TOKEN;
}
