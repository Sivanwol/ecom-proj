ALTER TABLE "users" ALTER COLUMN "username" SET DATA TYPE varchar(100);--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "mobile" varchar(20);--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "country" varchar(50);--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "city" varchar(100);