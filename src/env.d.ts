// env.d.ts
namespace NodeJS {
  interface ProcessEnv {
    PUBLIC_FIREBASE_API_KEY: string;
    PUBLIC_FIREBASE_AUTH_DOMAIN: string;
    PUBLIC_FIREBASE_PROJECT_ID: string;
    PUBLIC_FIREBASE_STORAGE_BUCKET: string;
  }
}