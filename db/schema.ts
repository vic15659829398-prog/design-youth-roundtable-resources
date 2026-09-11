import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const submissions = sqliteTable("submissions", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  submissionToken: text("submission_token").notNull().unique(),
  kind: text("kind", { enum: ["designer", "supplier"] }).notNull(),
  companyName: text("company_name").notNull(),
  brandName: text("brand_name"),
  contactName: text("contact_name").notNull(),
  phone: text("phone").notNull(),
  wechat: text("wechat"),
  province: text("province"),
  city: text("city").notNull(),
  payload: text("payload").notNull(),
  consentVersion: text("consent_version").notNull().default("1.0"),
  consentAt: text("consent_at").notNull(),
  createdAt: text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`),
});
