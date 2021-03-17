"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const greet_1 = require("../greet");
describe('My function', function () {
    it('should greet Bob', function () {
        assert_1.default.equal("Hello, Bob Crow", greet_1.greet({
            firstName: "Bob",
            lastName: "Crow",
            email: "bob@crow.com"
        }));
    });
    it('should greet Siphiwe', function () {
        assert_1.default.equal("Hello, Bob Crow", greet_1.greet({
            firstName: "Bob",
            lastName: "Crow",
        }));
    });
});
describe('GreetIn Function', function () {
    it('should greet Xhanti in English', function () {
        let greetInEnglish = new greet_1.GreetInEnglish();
        assert_1.default.equal("Hello, Xhanti", greetInEnglish.greet("Xhanti"));
    });
    it('should greet Thimna in English', function () {
        let greetInEnglish = new greet_1.GreetInEnglish();
        assert_1.default.equal("Hello, Thimna", greetInEnglish.greet("Thimna"));
    });
    it('should greet Afro in English', function () {
        let greetInEnglish = new greet_1.GreetInEnglish();
        assert_1.default.equal("Hello, Afro", greetInEnglish.greet("Afro"));
    });
});
