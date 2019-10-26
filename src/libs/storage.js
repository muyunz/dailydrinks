export const get = (key, defaultValue) => localStorage.getItem(key) || defaultValue;
export const set = (key, value) => localStorage.setItem(key, value);