"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const express_1 = __importDefault(require("express"));
const config_1 = require("./server/config");
const routes_1 = __importDefault(require("./server/routes"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 4000;
const db = config_1.mongoose.connection;
db.on('error', (err) => {
    console.log('err', err);
});
db.on('open', () => {
    console.log('DB running');
});
app.use(express_1.default.urlencoded({ limit: '10000mb', extended: true }));
app.use(express_1.default.static(path_1.default.join(__dirname, './client/build')));
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.get('/*', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, './client/build/index.html'));
});
app.use('/api', routes_1.default);
app.listen(PORT, () => {
    console.log(`Server up and running on ${PORT}`);
});
