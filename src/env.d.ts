/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly ENROLLMENT_FORM_WEBHOOK_URL: string;
  readonly CONTACT_US_FORM_WEBHOOK_URL: string;
  readonly QUIZ_FORM_WEBHOOK_URL: string;
  readonly RECAPTCHA_SECRET_KEY: string;
  readonly JOB_APPLICATION_FORM_WEBHOOK_URL: string;
  readonly EBOOK_FORM_WEBHOOK_URL: string;
  readonly REQUEST_SERVICES_WEBHOOK_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
