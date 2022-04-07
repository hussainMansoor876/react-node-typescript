"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default.connect(`mongodb+srv://upwork:upwork@cluster0.ljfbr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`);
exports.default = mongoose_1.default;
