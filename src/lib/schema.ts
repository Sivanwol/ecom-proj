import { serial, text, varchar, timestamp, pgTable } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 50 }),
    fullname: varchar("fullname", { length: 100 }),
    mobile: varchar("mobile", { length: 20 }),
    country: varchar("country", { length: 50 }),
    city: varchar("city", { length: 100 }),
    email: varchar("email", { length: 50 }),
    password: text("password"),
    role: text("role").$type<"admin" | "customer">(),
    createdAt: timestamp("created_at"),
    updatedAt: timestamp("updated_at"),
});