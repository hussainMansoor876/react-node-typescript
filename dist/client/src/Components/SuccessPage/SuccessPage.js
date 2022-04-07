"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const Typography_1 = __importDefault(require("@mui/material/Typography"));
const paths_1 = __importDefault(require("../../Config/paths"));
const logo_png_1 = __importDefault(require("../../assets/logo.png"));
const emailLogo_png_1 = __importDefault(require("../../assets/emailLogo.png"));
const SuccessPage = () => {
    var _a;
    const history = (0, react_router_dom_1.useHistory)();
    const user = (_a = history === null || history === void 0 ? void 0 : history.location) === null || _a === void 0 ? void 0 : _a.state;
    console.log('user', user);
    if (user === undefined || user.firstName === undefined) {
        return <react_router_dom_1.Redirect to={paths_1.default.SIGNUP}/>;
    }
    return (<div className='main'>
            <div className='main1'>
                <div>
                    <img src={logo_png_1.default} alt="logo"/>
                </div>

                <div className='second'>
                    <img className='emailImg' src={emailLogo_png_1.default} alt="logo"/>
                    <Typography_1.default sx={{ mt: 3 }} display='inline' className='emailImg' variant="h5" gutterBottom component="div">
                        Thanks, {user.firstName}! <br /> We've received your application
                    </Typography_1.default>
                </div>
                <br />
                <Typography_1.default style={{ opacity: 0.5 }} variant="subtitle1" gutterBottom component="div">
                    We'll process your application as soon as possible and send you a dexision with in 30 days to ({user.phoneNumber})
                    or {user.email} we will contact you in case more information is needed.
                    <p> while we're reweing your application please don't submit another application for the uPet's breeder program. </p>
                </Typography_1.default>
            </div>
        </div>);
};
exports.default = SuccessPage;
