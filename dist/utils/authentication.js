"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRefreshToken = exports.generateAccessToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const generateAccessToken = (user) => {
    const role = user.role.name.toLowerCase();
    return jsonwebtoken_1.default.sign({ sub: user._id, role }, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: '10m',
    });
};
exports.generateAccessToken = generateAccessToken;
const generateRefreshToken = (user) => {
    const role = user.role.name.toLowerCase();
    return jsonwebtoken_1.default.sign({ sub: user._id, role }, process.env.REFRESH_TOKEN_SECRET, {
        expiresIn: '350d',
    });
};
exports.generateRefreshToken = generateRefreshToken;
//# sourceMappingURL=authentication.js.map