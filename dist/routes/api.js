"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_router_1 = __importDefault(require("./auth.router"));
const user_router_1 = __importDefault(require("./user.router"));
const role_router_1 = __importDefault(require("./role.router"));
const post_router_1 = __importDefault(require("./post.router"));
const apiRouter = (0, express_1.Router)();
apiRouter.use('/auth', auth_router_1.default);
apiRouter.use('/users', user_router_1.default);
apiRouter.use('/roles', role_router_1.default);
apiRouter.use('/post', post_router_1.default);
exports.default = apiRouter;
//# sourceMappingURL=api.js.map