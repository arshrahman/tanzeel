import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./lib/db/schema.ts",
  dialect: "sqlite",
  driver: "d1-http",
  dbCredentials: {
    accountId: process.env.CLOUDFLARE_ACCOUNT_ID || "",
    databaseId: "ede586ef-31d0-4f9a-aad4-72424f65c3e7",
    token: process.env.CLOUDFLARE_API_TOKEN || "",
  },
});
