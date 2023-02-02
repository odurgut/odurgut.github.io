// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Oğuzhan Durgut";
export const SITE_DESCRIPTION =
  "Welcome to my blog! I write about software and stuff.";
export const TWITTER_HANDLE = "@0x091_";
export const MY_NAME = "Oğuzhan Durgut";

// setup in astro.config.mjs
const BASE_URL = new URL(import.meta.env.SITE);
export const SITE_URL = BASE_URL.origin;
