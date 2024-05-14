"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyTestClass = void 0;
// Importing decorator functions from decorators module.
const decorators_1 = require("./decorators");
// SimpleLogger: Applies logging to class instantiation.
let MyTestClass = class MyTestClass {
    // Constructor initializes the class with a name and an ID while logging instantiation.
    constructor(name, id) {
        this.name = name;
        this._id = id;
    }
    // LogMethod: Logs each call to the greet method along with its arguments.
    greet() {
        console.log(`Hello, ${this.name}`);
    }
    // MyReadOnly: Makes the 'id' property read-only externally.
    get id() {
        return this._id;
    }
    // Simple method to display the ID of the instance; uses LogMethod decorator if needed.
    getInfo() {
        console.log(`ID: ${this.id}`);
    }
};
exports.MyTestClass = MyTestClass;
__decorate([
    decorators_1.LogMethod
], MyTestClass.prototype, "greet", null);
__decorate([
    decorators_1.MyReadOnly
], MyTestClass.prototype, "id", null);
exports.MyTestClass = MyTestClass = __decorate([
    decorators_1.SimpleLogger
], MyTestClass);
