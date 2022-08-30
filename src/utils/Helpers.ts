import moment from "moment";

export const timeAgo = (dt: string): string => {
    return moment(dt).fromNow();
}

export const formatDate = (dt: string): string => {
    return moment(dt).format('MMM D YYYY');
}