export const getDomain = (url: string) => url.replace('https://', '').replace('http://', '').split('/')[0];

export const getFavIconUrl = (url: string) => `http://www.google.com/s2/favicons?sz=64&domain=${getDomain(url)}`;
