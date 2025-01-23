
// type FilterOption = {
//     options: string[],
//     default: string
// }


// type PrimaryFilterOption = 'Best' | 'Hot' | 'New' | 'Top' | 'Rising';

// type FeedFilterConfig<T extends string> = {
//     trendings:
//     {
//         [K in T]: {
//             option: string,
//             secondaryOptions?: FilterOption
//         }
//     },
//     default: string
// }







// const feedFilterConfig: PrimaryFilterOption = {
//     trendings: [
//         {
//             option: "Best",
//         }, {
//             option: "Hot",
//             secondaryOptions: {
//                 options: ['US', 'Everywhere', 'CA', 'CN', 'Local'],
//                 default: 'Everywhere'
//             }
//         }, {
//             option: "New"
//         }, {
//             option: "Top",
//             secondaryOptions: {
//                 options: ['Now', 'Today', 'This Week', 'This Month', 'This Year', 'All Time'],
//                 default: 'Today'
//             }
//         }, {
//             option: "Rising"
//         }
//     ],
//     default: 'Best'
// }

// export default feedFilterConfig