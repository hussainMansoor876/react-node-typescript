"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const schemaTypes_1 = __importDefault(require("./schemaTypes"));
const { STRING_REQUIRED, CREATED_DATE } = schemaTypes_1.default;
const userSchema = new mongoose_1.Schema({
    firstName: STRING_REQUIRED,
    lastName: STRING_REQUIRED,
    email: Object.assign(Object.assign({}, STRING_REQUIRED), { lowercase: true, unique: true }),
    phoneNumber: STRING_REQUIRED,
    password: Object.assign(Object.assign({}, STRING_REQUIRED), { minlength: 8 }),
    created_at: CREATED_DATE
});
const User = (0, mongoose_1.model)('user', userSchema);
exports.default = User;
