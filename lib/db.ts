import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";

// Create the client for SQLite database
const client = createClient({
  url: "libsql://web-novel-project-spitfire.aws-eu-west-1.turso.io", // Local SQLite file
  authToken: process.env.TURSO_DB_TOKEN,
});

export const db = drizzle(client);
