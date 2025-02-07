export const fromNow = (date:Date|string) => {


    if(!date){
        return 'time unknown';
    }

    if(typeof date === 'string') {
        date = new Date(date);
    }

    const secondsAgo = Math.floor(Date.now() / 1000) - Math.floor(date.getTime() / 1000);
    if (secondsAgo < 180) {
        return "just now";
    } else if (secondsAgo < 3600) {
        return `${Math.floor(secondsAgo / 60)} minutes ago`;
    } else if (secondsAgo < 86400) {
        return `${Math.floor(secondsAgo / 3600)} hours ago`;
    } else if(secondsAgo < 604800) {
        return `${Math.floor(secondsAgo / 86400)} days ago`;
    }else if(secondsAgo < 2592000) {
        return `${Math.floor(secondsAgo / 604800)} weeks ago`;
    }else if(secondsAgo < 31536000) {
        return `${Math.floor(secondsAgo / 2592000)} months ago`;
    }else {
        return `${Math.floor(secondsAgo / 31536000)} years ago`;
    }
}