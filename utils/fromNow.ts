export const fromNow = (timestampBySecs: string) => {
    const secondsAgo = Math.floor(Date.now() / 1000) - parseInt(timestampBySecs, 10);
    if (secondsAgo < 180) {
        return "just now";
    } else if (secondsAgo < 3600) {
        return `${Math.floor(secondsAgo / 60)} minutes ago`;
    } else if (secondsAgo < 86400) {
        return `${Math.floor(secondsAgo / 3600)} hours ago`;
    } else {
        return `${Math.floor(secondsAgo / 86400)} days ago`;
    }
}