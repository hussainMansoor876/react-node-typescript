"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signUp = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const validator_1 = __importDefault(require("validator"));
const helper_1 = require("../helper");
const models_1 = require("../models");
const signUp = (req, res) => {
    try {
        const { body } = req;
        let firstName = body === null || body === void 0 ? void 0 : body.firstName;
        const lastName = body === null || body === void 0 ? void 0 : body.lastName;
        const email = body === null || body === void 0 ? void 0 : body.email;
        const validEmail = validator_1.default.isEmail(email);
        let password = body === null || body === void 0 ? void 0 : body.password;
        const phoneNumber = body === null || body === void 0 ? void 0 : body.phoneNumber;
        if (!email || !firstName || !lastName || !password || !phoneNumber) {
            return res.send({ success: false, message: 'Please provide All fields!' });
        }
        if (!validEmail) {
            return res.send({ success: false, message: 'Invalid Email!' });
        }
        models_1.User.findOne({ email })
            .then((response) => {
            if (response) {
                return res.send({ success: false, message: 'Email already in use!' });
            }
            if (!helper_1.regexCondition.test(password)) {
                return res.send({ success: false, message: 'password at least minimum eight characters, one uppercase letter, one lowercase letter and one number' });
            }
            bcryptjs_1.default.genSalt(10, (err, salt) => {
                bcryptjs_1.default.hash(password, salt, (err, hash) => __awaiter(void 0, void 0, void 0, function* () {
                    var _a, _b;
                    if (err) {
                        return res.send({ success: false });
                    }
                    password = hash;
                    firstName = (_b = (_a = firstName === null || firstName === void 0 ? void 0 : firstName.split(' ')) === null || _a === void 0 ? void 0 : _a.map(v => (0, helper_1.convertTitle)(v))) === null || _b === void 0 ? void 0 : _b.join(' ');
                    const data = { email, password, firstName, lastName, phoneNumber };
                    const user = new models_1.User(data);
                    user.save()
                        .then(() => {
                        let newUser = {
                            email: user === null || user === void 0 ? void 0 : user.email,
                            firstName: user === null || user === void 0 ? void 0 : user.firstName,
                            lastName: user === null || user === void 0 ? void 0 : user.lastName,
                            phoneNumber: user === null || user === void 0 ? void 0 : user.phoneNumber
                        };
                        return res.send({ success: true, message: 'Account Created successfully', user: newUser });
                    })
                        .catch(() => res.send({ success: false, message: 'Something Went Wrong!' }));
                }));
            });
        });
    }
    catch (e) {
        return res.send({ success: false, message: 'Something Went Wrong!' });
    }
};
exports.signUp = signUp;
