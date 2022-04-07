const convertTitle = (val: string) => `${val.charAt(0).toUpperCase()}${val.slice(1).toLowerCase()}`

const regexCondition = new RegExp('^(?=.{8,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).*$')

export { convertTitle, regexCondition }