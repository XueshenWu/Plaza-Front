
type FeedFilterConfig = {
    trendings: {
        options: string[],
        default: string
    },
    regions: {
        options: string[],
        default: string
    }
}




const feedFilterConfig: FeedFilterConfig = {
    trendings: {
        options: ['Best', 'New', 'Hot', 'Top', 'Rising'],
        default: 'Best'
    },
    regions: {
        options: ['Everywhere', 'Local', 'US', 'CA', 'CN'],
        default: 'Everywhere'
    }
}

export default feedFilterConfig