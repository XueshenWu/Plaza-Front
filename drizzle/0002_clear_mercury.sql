ALTER TABLE "community_user" DROP CONSTRAINT "community_user_community_id_communities_id_fk";
--> statement-breakpoint
ALTER TABLE "community_user" DROP CONSTRAINT "community_user_user_id_profiles_id_fk";
--> statement-breakpoint
ALTER TABLE "community_user" DROP CONSTRAINT "community_user_community_id_user_id_pk";--> statement-breakpoint
ALTER TABLE "community_user" ADD COLUMN "id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL;