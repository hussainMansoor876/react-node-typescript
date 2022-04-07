import bcrypt from 'bcryptjs'
import { Request, Response } from 'express'
import validator from 'validator'
import { convertTitle, regexCondition } from '../helper'
import { User } from '../models'

const signUp = (req: Request, res: Response) => {
    try {
        const { body } = req

        let firstName: string = body?.firstName
        const lastName: string = body?.lastName
        const email: string = body?.email
        const validEmail = validator.isEmail(email)
        let password: string = body?.password
        const phoneNumber: number = body?.phoneNumber

        if (!email || !firstName || !lastName || !password || !phoneNumber) {
            return res.send({ success: false, message: 'Please provide All fields!' })
        }

        if (!validEmail) {
            return res.send({ success: false, message: 'Invalid Email!' })
        }

        User.findOne({ email })
            .then((response) => {
                if (response) {
                    return res.send({ success: false, message: 'Email already in use!' })
                }

                if (!regexCondition.test(password)) {
                    return res.send({ success: false, message: 'password at least minimum eight characters, one uppercase letter, one lowercase letter and one number' })
                }

                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(password, salt, async (err, hash) => {
                        if (err) {
                            return res.send({ success: false })
                        }
                        password = hash
                        firstName = firstName?.split(' ')?.map(v => convertTitle(v))?.join(' ')

                        const data = { email, password, firstName, lastName, phoneNumber }
                        const user = new User(data)
                        user.save()
                            .then(() => {
                                let newUser: object = {
                                    email: user?.email,
                                    firstName: user?.firstName,
                                    lastName: user?.lastName,
                                    phoneNumber: user?.phoneNumber
                                }
                                return res.send({ success: true, message: 'Account Created successfully', user: newUser })
                            })
                            .catch(() => res.send({ success: false, message: 'Something Went Wrong!' }))
                    })
                })
            })
    }
    catch (e) {
        return res.send({ success: false, message: 'Something Went Wrong!' })
    }
}

export {
    signUp
}