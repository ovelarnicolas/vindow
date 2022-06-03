import dotenv from "dotenv";

export const envs = {
  ...process.env,
  ...dotenv.config().parsed,
};

export const isProduction = process.env.NODE_ENV === "production";

export const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;
