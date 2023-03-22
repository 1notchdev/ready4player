import moment from "moment";

export const timeAgo = (dt: string): string => {
    return moment(dt).fromNow();
}

export const formatDate = (dt: string): string => {
    return moment(dt).format('MMM D YYYY');
}

export const isFunction = (obj: any): boolean => {
    return !!(Object.prototype.toString.call(obj) === "[object AsyncFunction]" || Object.prototype.toString.call(obj) === "[object Function]");
}