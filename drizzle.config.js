import { defineConfig } from "drizzle-kit";
import dotenv from 'dotenv';

dotenv.config(); 

export default defineConfig({
  schema: "./configs/schema.js",
  out: "./drizzle",
  dialect: 'postgresql',
  dbCredentials: {
    url: "postgresql://neondb_owner:Dp6AlGUF5fJR@ep-sweet-sunset-a17bg1as.ap-southeast-1.aws.neon.tech/AI-Form-Builder?sslmode=require",
  }
});