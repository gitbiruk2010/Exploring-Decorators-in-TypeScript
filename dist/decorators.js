"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyReadOnly = exports.LogMethod = exports.SimpleLogger = void 0;
// SimpleLogger: Logs class registration and instance creation details.
function SimpleLogger(constructor) {
    console.log('Registering class:', constructor.name);
    // Extends the class to include logging upon instantiation.
    return class extends constructor {
        constructor(...args) {
            super(...args);
            console.log(`An instance of ${constructor.name} was created.`);
        }
    };
}
exports.SimpleLogger = SimpleLogger;
// LogMethod: Logs the execution of methods and their arguments.
function LogMethod(target, key, descriptor) {
    const originalMethod = descriptor.value;
    // Modifies the method to add logging functionality before execution.
    descriptor.value = function (...args) {
        console.log(`Calling ${key} with arguments: ${JSON.stringify(args)}`);
        return originalMethod.apply(this, args);
    };
    return descriptor;
}
exports.LogMethod = LogMethod;
// MyReadOnly: Prevents modification of a property by making it read-only.
function MyReadOnly(target, propertyKey, descriptor) {
    // Ensures the property has a getter before applying the decorator.
    if (descriptor && descriptor.get) {
        descriptor.enumerable = true; // Optionally makes the property enumerable.
    }
    else {
        // Provides error feedback if the decorator is used incorrectly.
        console.error('Attempted to apply readonly decorator to non-accessor property');
    }
    return descriptor;
}
exports.MyReadOnly = MyReadOnly;
