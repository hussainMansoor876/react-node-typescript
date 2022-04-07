import { Schema, model } from 'mongoose'
import schemaTypes from './schemaTypes'
const { STRING_REQUIRED, CREATED_DATE } = schemaTypes

const userSchema = new Schema({
    firstName: STRING_REQUIRED,
    lastName: STRING_REQUIRED,
    email: {
        ...STRING_REQUIRED,
        lowercase: true,
        unique: true
    },
    phoneNumber: STRING_REQUIRED,
    password: {
        ...STRING_REQUIRED,
        minlength: 8
    },
    created_at: CREATED_DATE
})

const User = model('user', userSchema)

export default User