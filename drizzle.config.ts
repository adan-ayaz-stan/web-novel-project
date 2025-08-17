import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "sqlite",
  schema: "./lib/schema.ts",
  out: "./drizzle",
  dbCredentials: {
    url: `libsql://web-novel-project-spitfire.aws-eu-west-1.turso.io?authToken=${process.env.TURSO_DB_TOKEN}`,
  },
});
