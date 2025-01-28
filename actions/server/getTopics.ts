'use server'

export type TopicOptions = Array<{
    topicSection: string,
    topics: Array<string>
}>



export async function getTopicOptions(): Promise<TopicOptions> {
    return [
        {
            topicSection: "Anime & Cosplay",
            topics: [
                "Anime & Manga",
                "Cosplay",
            ],
        },
        {
            topicSection: "Art",
            topics: [
                "Performming Arts",
                "Architecture",
                "Design",
                'Art',
                'Filmmaking',
                "Digital Art",
                'Photography',
            ],
        }, {
            topicSection: " Food & Drinks",
            topics: [
                "Food & Recipes",
                "Non-Alcoholic Drinks",
                "Baking & Desserts",
                "Barbecuing & Grilling",
                "Food industry & Restaurants",
                "Vegetarian & Vegan Food",
                "Alcoholic Beverages",
            ],
        }, {
            topicSection: "Games",
            topics: [
                "Other Games",
                "Esports",
                "Adventure Games",
                "Gaming News & Discussion",
                "Action Games",
                "Strategy Games",
                "Simulation Games",
                "Role-Playing Games",
                "Gaming Consoles & Gear",
                "Sports & Racing Games",
                'Tabletop Games',
                'Mobile Games',
            ],
        }
    ]
}

// const topicOptions = getTopicOptions()

// const res = (() => {
//     const res = topicOptions.flatMap(({ topics }) => topics);
//     return res as ReadonlyArray<string>;
// })()

// const res = topicOptions.flatMap(topicOption => topicOption.topics)