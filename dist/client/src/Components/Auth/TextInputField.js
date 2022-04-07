"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const TextField_1 = __importDefault(require("@mui/material/TextField"));
const styles_1 = require("@mui/material/styles");
const FancyButton = react_1.default.forwardRef((props, ref) => (<button type="button" ref={ref} className="FancyButton">
        {props.children}
    </button>));
const TextInputField = (0, styles_1.styled)((props) => (<TextField_1.default InputProps={{ disableUnderline: true }} {...props}/>))(({ theme }) => ({
    '& .MuiFilledInput-root': {
        border: '1px solid #e2e2e1',
        overflow: 'hidden',
        borderRadius: 2,
        // backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
        backgroundColor: 'white',
        transition: theme.transitions.create([
            'border-color',
            'background-color',
            'box-shadow',
        ]),
        '&:hover': {
            backgroundColor: 'transparent',
        },
        '&.Mui-focused': {
            backgroundColor: 'transparent',
            boxShadow: `${(0, styles_1.alpha)(theme.palette.primary.main, 0.25)} 0 0 0 1px`,
            border: '1px solid rgba(0, 0, 0, 0.3)'
        },
        '&.Mui-error': {
            backgroundColor: 'transparent',
            boxShadow: `${(0, styles_1.alpha)(theme.palette.primary.main, 0.25)} 0 0 0 1px`,
            border: '1px solid #FF2400'
        }
    }
}));
exports.default = TextInputField;
