import { defineConfig } from "drizzle-kit";
 
export default defineConfig({
  schema: "./configs/schema.js",
  out: "./drizzle",
  dialect: 'postgresql',
  dbCredentials: {
    // url: process.env.NEXT_PUBLIC_DATABASE_URL_CONFIG,
    url: 'postgresql://neondb_owner:DseoEFMt04RQ@ep-little-math-a5wytwod.us-east-2.aws.neon.tech/ai-form-builder?sslmode=require',
  }
});