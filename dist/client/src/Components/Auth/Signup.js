"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const Stack_1 = __importDefault(require("@mui/material/Stack"));
const Button_1 = __importDefault(require("@mui/material/Button"));
const Snackbar_1 = __importDefault(require("@mui/material/Snackbar"));
const Alert_1 = __importDefault(require("@mui/material/Alert"));
const CircularProgress_1 = __importDefault(require("@mui/material/CircularProgress"));
const react_phone_input_2_1 = __importDefault(require("react-phone-input-2"));
const axios_1 = __importDefault(require("axios"));
const react_router_dom_1 = require("react-router-dom");
const TextInputField_1 = __importDefault(require("./TextInputField"));
const helpers_1 = require("../../utils/helpers");
const paths_1 = __importDefault(require("../../Config/paths"));
const Signup = () => {
    var _a, _b;
    const [firstName, setFirstName] = (0, react_1.useState)('');
    const [lastName, setlastName] = (0, react_1.useState)('');
    const [phoneNumber, setPhoneNumber] = (0, react_1.useState)('');
    const [email, setEmail] = (0, react_1.useState)('');
    const [password, setPassword] = (0, react_1.useState)('');
    const [isClicked, setIsClicked] = (0, react_1.useState)(false);
    const [loading, setLoading] = (0, react_1.useState)(false);
    const [open, setOpen] = (0, react_1.useState)(false);
    const [success, setSuccess] = (0, react_1.useState)(false);
    const [message, setMessage] = (0, react_1.useState)('Oops, Something went Wrong!');
    const history = (0, react_router_dom_1.useHistory)();
    const handleClick = () => {
        if (firstName === '' || lastName === '' || password === '' || phoneNumber === '' || email === '') {
            setIsClicked(true);
            return setTimeout(() => {
                setIsClicked(false);
            }, 500);
        }
        if (!helpers_1.regexCondition.test(password)) {
            return;
        }
        const obj = {
            firstName,
            lastName,
            phoneNumber,
            email,
            password
        };
        setLoading(true);
        axios_1.default.post(`/api/auth/signup`, obj)
            .then((res) => {
            var _a, _b;
            const { data } = res;
            if ((data === null || data === void 0 ? void 0 : data.success) === true) {
                setSuccess(true);
                setOpen(true);
                setMessage((_a = data === null || data === void 0 ? void 0 : data.message) !== null && _a !== void 0 ? _a : 'Succcessfully Registered!');
                setTimeout(() => {
                    console.log('data', data);
                    setFirstName('');
                    setlastName('');
                    setEmail('');
                    setPassword('');
                    setPhoneNumber('');
                    history.push(paths_1.default === null || paths_1.default === void 0 ? void 0 : paths_1.default.SUCCESS, data === null || data === void 0 ? void 0 : data.user);
                }, 500);
            }
            else {
                setOpen(true);
                setMessage((_b = data === null || data === void 0 ? void 0 : data.message) !== null && _b !== void 0 ? _b : message);
            }
            setTimeout(() => {
                setOpen(false);
            }, 2000);
            setLoading(false);
        })
            .catch((e) => {
            console.log('e', e);
            setSuccess(true);
            setOpen(true);
            setLoading(false);
            setTimeout(() => {
                setOpen(false);
            }, 2000);
        });
    };
    const validatePhoneCode = (e) => (e === null || e === void 0 ? void 0 : e.startsWith('1')) === false ? setPhoneNumber(`1${e}`) : setPhoneNumber(e);
    return (<div className='main'>
      <div className='firstRow'>
        <Stack_1.default sx={{ display: 'flex', justifyContent: 'center' }} spacing={2} direction='row'>
          <TextInputField_1.default label='First Name' id='reddit-input' variant='filled' style={{ marginTop: 11 }} inputProps={{
            className: `${isClicked && firstName === '' ? 'validate-input input-transition' : 'input-transition'}`
        }} value={firstName} onChange={(e) => setFirstName((0, helpers_1.capitalizeLetter)(e.target.value))}/>

          <TextInputField_1.default label='Last Name' id='reddit-input' variant='filled' style={{ marginTop: 11, marginBottom: 11 }} value={lastName} inputProps={{
            className: `${isClicked && firstName !== '' && lastName === '' ? 'validate-input' : 'input-transition'}`
        }} onChange={(e) => setlastName((0, helpers_1.capitalizeLetter)(e.target.value))}/>

        </Stack_1.default>
        <react_phone_input_2_1.default inputClass={`phoneInput ${isClicked && firstName !== '' && lastName !== '' && phoneNumber === '' ? 'validate-input' : 'input-transition'}`} country={'us'} disableCountryCode={true} 
    // countryCodeEditable={false}
    placeholder='Phone number' disableDropdown={true} buttonClass={isClicked && firstName !== '' && lastName !== '' && phoneNumber === '' ? 'validate-input' : 'input-transition'} value={phoneNumber} onChange={validatePhoneCode}/>

        <TextInputField_1.default label='Email' type='email' id='reddit-input' variant='filled' fullWidth error={email === '' ? false : ((0, helpers_1.validateEmail)(email) === null || ((_a = (0, helpers_1.validateEmail)(email)) === null || _a === void 0 ? void 0 : _a.length) === 0) ? true : false} helperText={email !== '' && ((0, helpers_1.validateEmail)(email) === null || ((_b = (0, helpers_1.validateEmail)(email)) === null || _b === void 0 ? void 0 : _b.length) === 0) ? 'Invalid Email address' : null} value={email} inputProps={{
            className: `${isClicked && firstName !== '' && lastName !== '' && phoneNumber !== '' && email === '' && 'validate-input'}`
        }} onChange={(e) => { var _a; return setEmail((_a = e.target.value) === null || _a === void 0 ? void 0 : _a.toLocaleLowerCase()); }} style={{ marginTop: 11 }}/>
        <TextInputField_1.default label='Password' type='password' id='reddit-input' variant='filled' fullWidth value={password} inputProps={{
            className: `${isClicked && firstName !== '' && lastName !== '' && phoneNumber !== '' && email !== '' && password === '' && 'validate-input'}`
        }} helperText={!helpers_1.regexCondition.test(password) ? 'Oops You need a password longer than 8 characters with numbers and letters' : null} error={!helpers_1.regexCondition.test(password) ? true : false} onChange={(e) => setPassword(e.target.value)} style={{ marginTop: 11 }}/>
        <Button_1.default variant='contained' className='form-btn' onClick={handleClick}>{loading ? <CircularProgress_1.default style={{ color: '#ffffff' }} size={24}/> : 'Next'}</Button_1.default>
      </div>
      <Snackbar_1.default anchorOrigin={{ vertical: 'top', horizontal: 'center' }} open={open} autoHideDuration={3000}>
        <Alert_1.default elevation={6} variant='filled' severity={success ? 'success' : 'error'} sx={{ width: '100%' }}>
          {message}
        </Alert_1.default>
      </Snackbar_1.default>
    </div>);
};
exports.default = Signup;
