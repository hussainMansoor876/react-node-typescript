const schemaTypes = {
    STRING_REQUIRED: {
        type: String,
        required: true
    },
    CREATED_DATE: {
        type: Date,
        default: Date.now
    }
}

export default schemaTypes