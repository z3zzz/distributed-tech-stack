export const PORT = parseInt(process.env.PORT || "5000");
export const POSTGRES_URL =
  process.env.POSTGRES_URL ||
  "postgresql://postgres:1234@localhost:5432/portfolio";
export const DOMAIN = process.env.DOMAIN || "localhost";
export const NODE_ENV = process.env.NODE_ENV;
export const PASSWORD = process.env.MY_PASSWORD;
export const MONGODB_TS_URL = process.env.MONGODB_TS_URL;
export const MONGODB_COLLECTION = process.env.MONGODB_COLLECTION;
