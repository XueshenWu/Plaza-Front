ALTER TABLE "posts" ADD COLUMN "comments_count" integer DEFAULT 0;--> statement-breakpoint
ALTER TABLE "comments" DROP COLUMN "comments_count";