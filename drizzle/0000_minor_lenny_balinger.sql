CREATE TYPE "public"."MediaType" AS ENUM('IMAGE', 'VIDEO', 'EXTERNAL_LINK');--> statement-breakpoint
CREATE TYPE "public"."NotificationPreference" AS ENUM('OFF', 'LOW', 'FREQUENT');--> statement-breakpoint
CREATE TYPE "public"."Permission" AS ENUM('DEFAULT', 'READONLY', 'SUSPENDED');--> statement-breakpoint
CREATE TYPE "public"."Role" AS ENUM('OWNER', 'MODERATOR', 'MEMBER');--> statement-breakpoint
CREATE TYPE "public"."Visiblity" AS ENUM('PUBLIC', 'RESTRICTED', 'PRIVATE', 'CACHED');--> statement-breakpoint
CREATE TABLE "comments" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"author_id" uuid NOT NULL,
	"parent_id" uuid NOT NULL,
	"root_id" uuid NOT NULL,
	"content" text,
	"upvotes" integer DEFAULT 0,
	"downvotes" integer DEFAULT 0,
	"createdAt" timestamp DEFAULT now(),
	"updatedAt" timestamp,
	"children_comments" uuid[] DEFAULT '{}'
);
--> statement-breakpoint
CREATE TABLE "communities" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"description" text NOT NULL,
	"icon" text,
	"banner" text,
	"visibility" "Visiblity" DEFAULT 'PUBLIC',
	"rules" jsonb DEFAULT '{}'::jsonb,
	"pinned_posts" uuid[] DEFAULT '{}',
	"topics" text[] DEFAULT '{}',
	CONSTRAINT "communities_name_unique" UNIQUE("name")
);
--> statement-breakpoint
CREATE TABLE "community_user" (
	"community_id" uuid NOT NULL,
	"user_id" uuid NOT NULL,
	"role" "Role" DEFAULT 'MEMBER',
	"notification_preference" "NotificationPreference" DEFAULT 'OFF',
	"credit" integer DEFAULT 0,
	"favorite" boolean DEFAULT false
);
--> statement-breakpoint
CREATE TABLE "posts" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"author_id" uuid NOT NULL,
	"community_id" uuid NOT NULL,
	"hashtags" text[] DEFAULT '{}',
	"title" text NOT NULL,
	"content" text[] DEFAULT '{}',
	"media_type" "MediaType",
	"media_urls" text[] DEFAULT '{}',
	"media_perview" text,
	"upvotes" integer DEFAULT 0,
	"downvotes" integer DEFAULT 0,
	"createdAt" timestamp DEFAULT now(),
	"updatedAt" timestamp NOT NULL,
	"children_comments" uuid[] DEFAULT '{}'
);
--> statement-breakpoint
CREATE TABLE "profiles" (
	"id" uuid PRIMARY KEY NOT NULL,
	"blocked_users" uuid[] DEFAULT '{}',
	"blocked_communities" uuid[] DEFAULT '{}',
	"avatar" text,
	"bio" text,
	"display_name" text,
	"gender" text,
	"location" text,
	"permission" "Permission" DEFAULT 'DEFAULT',
	"saved_posts" uuid[] DEFAULT '{}',
	"upvoted_posts" uuid[] DEFAULT '{}',
	"downvoted_posts" uuid[] DEFAULT '{}'
);
--> statement-breakpoint
ALTER TABLE "community_user" ADD CONSTRAINT "community_user_community_id_communities_id_fk" FOREIGN KEY ("community_id") REFERENCES "public"."communities"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "community_user" ADD CONSTRAINT "community_user_user_id_profiles_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."profiles"("id") ON DELETE no action ON UPDATE no action;