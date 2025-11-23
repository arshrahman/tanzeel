import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./lib/db/schema.ts",
  dialect: "sqlite",
  driver: "d1-http",
  dbCredentials: {
    accountId: process.env.CLOUDFLARE_ACCOUNT_ID || "",
    databaseId: "2b699f1c-c3f9-4c1c-a653-baf7173a1602",
    token: process.env.CLOUDFLARE_API_TOKEN || "",
  },
});
