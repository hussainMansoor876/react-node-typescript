const capitalizeLetter = (e: string): string => {
    return `${e?.charAt(0)?.toLocaleUpperCase()}${e?.slice(1)?.toLocaleLowerCase()}`
}

const validateEmail = (e: string) => {
    return String(e).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
  }

const regexCondition = new RegExp('^(?=.{8,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).*$')

export {
    capitalizeLetter,
    validateEmail,
    regexCondition
}