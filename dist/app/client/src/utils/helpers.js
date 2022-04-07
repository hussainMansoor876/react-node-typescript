"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.regexCondition = exports.validateEmail = exports.capitalizeLetter = void 0;
const capitalizeLetter = (e) => {
    var _a, _b;
    return `${(_a = e === null || e === void 0 ? void 0 : e.charAt(0)) === null || _a === void 0 ? void 0 : _a.toLocaleUpperCase()}${(_b = e === null || e === void 0 ? void 0 : e.slice(1)) === null || _b === void 0 ? void 0 : _b.toLocaleLowerCase()}`;
};
exports.capitalizeLetter = capitalizeLetter;
const validateEmail = (e) => {
    return String(e).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
};
exports.validateEmail = validateEmail;
const regexCondition = new RegExp('^(?=.{8,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).*$');
exports.regexCondition = regexCondition;
