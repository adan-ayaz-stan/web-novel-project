import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";

// Create the client for SQLite database
const client = createClient({
  url: "file:./sqlite.db", // Local SQLite file
});

export const db = drizzle(client);
