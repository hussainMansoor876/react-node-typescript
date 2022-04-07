"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.regexCondition = exports.convertTitle = void 0;
const convertTitle = (val) => `${val.charAt(0).toUpperCase()}${val.slice(1).toLowerCase()}`;
exports.convertTitle = convertTitle;
const regexCondition = new RegExp('^(?=.{8,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).*$');
exports.regexCondition = regexCondition;
