"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schemaTypes = {
    STRING_REQUIRED: {
        type: String,
        required: true
    },
    CREATED_DATE: {
        type: Date,
        default: Date.now
    }
};
exports.default = schemaTypes;
