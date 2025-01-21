export const primaryFilterOptions:PrimaryFilterOption[] = ['Best', 'Hot', 'New', 'Top', 'Rising']


export const secondaryFilterOptions = new Map<string, string[]>()
export type PrimaryFilterOption = 'Best'|'Hot'|'New'|'Top'|'Rising'

secondaryFilterOptions.set('Best', ["Everywhere", "US", "CA", "CN", "Local"])

secondaryFilterOptions.set('Hot', ["Today", "This-Week", "This-Month", "This-Year", "All-Time"])

const objectify = (arr: Array<string>) => {
    let obj: {
        [key: string]: string[]
    } = {}
    arr.forEach((el) => {
        obj[el] = secondaryFilterOptions.get(el) ?? []
    })
    return obj
}


const feedFilterConfig:{
    default: PrimaryFilterOption,
    options: {
        [key: string]: string[]
    }
} = {
    default: primaryFilterOptions[0],
    options: objectify(primaryFilterOptions),
}

export default feedFilterConfig

