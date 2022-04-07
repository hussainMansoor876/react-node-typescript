"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styles_1 = require("@mui/material/styles");
const routes_1 = __importDefault(require("./Config/routes"));
require("react-phone-input-2/lib/style.css");
require("./App.css");
require("react-phone-input-2/lib/style.css");
const theme = (0, styles_1.createTheme)({
    palette: {
        primary: {
            main: `#67ECD0`
        }
    }
});
const App = () => {
    return (<styles_1.ThemeProvider theme={theme}>
      <routes_1.default />
    </styles_1.ThemeProvider>);
};
exports.default = App;
