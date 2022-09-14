"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const moment_1 = __importDefault(require("moment"));
const app = (0, express_1.default)();
dotenv_1.default.config();
const PORT = process.env.PORT;
app.get("/", (req, res) => {
    const today = new Date();
    return res.send(today);
});
app.get("/date/:sentDate", (req, res) => {
    const { sentDate } = req.params;
    const hiringDate = (0, moment_1.default)(new Date(sentDate));
    const today = (0, moment_1.default)(new Date().toISOString().split("T")[0]);
    if (hiringDate.isValid() && today.diff(hiringDate, "years", true) === 1) {
        return res.status(200).send("Email was sent succesfully!");
    }
    else {
        return res.status(404).send("Error!");
    }
});
app.listen(PORT, () => {
    console.log(`Server running at port: ${PORT}`);
});
