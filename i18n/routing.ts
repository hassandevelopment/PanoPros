import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "ar"],
  defaultLocale: "en",
  localePrefix: "as-needed",
  // /ar currently serves the English copy verbatim — no component calls
  // useTranslations yet. Until real Arabic copy exists, do not advertise it
  // as an alternate: that would claim a translation that does not exist.
  alternateLinks: false,
});
