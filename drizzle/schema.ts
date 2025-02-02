import { relations } from 'drizzle-orm';
import { boolean, index, integer, jsonb, pgEnum, pgTable, primaryKey, serial, text, timestamp, uuid, varchar } from 'drizzle-orm/pg-core';


export const Enum_Permission = pgEnum("Permission", ["DEFAULT", "READONLY", "SUSPENDED"])
export const Enum_MediaType = pgEnum("MediaType", ["IMAGE", "VIDEO", "EXTERNAL_LINK"])
export const Enum_Visiblity = pgEnum("Visiblity", ["PUBLIC", "RESTRICTED", "PRIVATE", "CACHED"])
export const Enum_Role = pgEnum("Role", ["OWNER", "MODERATOR", "MEMBER"])
export const Enum_NotificationPreference = pgEnum("NotificationPreference", ["OFF", "LOW", "FREQUENT"])


export const profiles = pgTable('profiles', {
    id: uuid().primaryKey(),
    blocked_users: uuid().array().default([]),
    blocked_communities: uuid().array().default([]),
    avatar: text(),
    bio: text(),
    display_name: text(),
    gender: text(),
    location: text(),
    permission: Enum_Permission().default("DEFAULT"),
    saved_posts: uuid().array().default([]),
    upvoted_posts: uuid().array().default([]),
    downvoted_posts: uuid().array().default([]),
}).enableRLS()

export const posts = pgTable('posts', {
    id: uuid().primaryKey().defaultRandom(),
    author_id: uuid().notNull(),
    community_id: uuid().notNull(),
    hashtags: text().array().default([]),
    title: text().notNull(),
    content: text().array().default([]),
    // media_type: Enum_MediaType(),
    // media_urls: text().array().default([]),
    // media_perview: text(),
    // media_preview_meta:text(),
    media: jsonb(),
    upvotes: integer().notNull().default(0),
    downvotes: integer().notNull().default(0),
    createdAt: timestamp().notNull().defaultNow(),
    updatedAt: timestamp().notNull(),
    children_comments: uuid().array().default([]),
    comments_count: integer().notNull().default(0),
}, table=>({
    timeIndex:index('timeIndex').on(table.createdAt),
})).enableRLS()

export const communities = pgTable('communities', {
    id: uuid().primaryKey().defaultRandom(),
    name: text().notNull().unique(),
    description: text().notNull(),
    icon: text(),
    banner: text(),
    visibility: Enum_Visiblity().default("PUBLIC"),
    rules: jsonb().default({}),
    pinned_posts: uuid().array().default([]),
    topics: text().array().default([]),
}).enableRLS()

export const comments = pgTable('comments', {
    id: uuid().primaryKey().defaultRandom(),
    author_id: uuid().notNull(),
    parent_id: uuid().notNull(),
    root_id: uuid().notNull(),
    content: text(),
    upvotes: integer().default(0),
    downvotes: integer().default(0),
    createdAt: timestamp().defaultNow(),
    updatedAt: timestamp(),
    children_comments: uuid().array().default([]),
   
}).enableRLS()



export const community_user = pgTable('community_user', {
    id: uuid().primaryKey().defaultRandom(),
    community_id: uuid().notNull(),
    user_id: uuid().notNull(),
    role: Enum_Role().default("MEMBER"),
    notification_preference: Enum_NotificationPreference().default("OFF"),
    credit: integer().default(0),
    favorite: boolean().default(false),
}).enableRLS();

export const communityRelations = relations(community_user, ({ one }) => ({
    communities: one(communities, {
        fields: [community_user.community_id],
        references: [communities.id]
    })
}))

export const postRelations = relations(posts, ({ one }) => ({
    profiles: one(profiles, {
        fields: [posts.author_id],
        references: [profiles.id]
    }),
    communities: one(communities, {
        fields: [posts.community_id],
        references: [communities.id]
    })
}))

