/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./utils/schema.js",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://neondb_owner:npg_xkHu4OFb7MYU@ep-purple-fire-a53t1pbs-pooler.us-east-2.aws.neon.tech/neondb?sslmode=require",
  },
};
