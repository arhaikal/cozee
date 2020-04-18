export const setLocalStorage = (key, data) => {
  if (typeof window !== "undefined") {
    return localStorage.setItem(key, JSON.stringify(data))
  }
}

export const getLocalStorage = key => {
  if (typeof window !== "undefined") {
    return JSON.parse(localStorage.getItem(key))
  }
}
