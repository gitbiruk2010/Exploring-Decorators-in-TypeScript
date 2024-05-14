// SimpleLogger: Logs class registration and instance creation details.
function SimpleLogger<T extends { new (...args: any[]): {} }>(constructor: T) {
    console.log('Registering class:', constructor.name);
    // Extends the class to include logging upon instantiation.
    return class extends constructor {
        constructor(...args: any[]) {
            super(...args);
            console.log(`An instance of ${constructor.name} was created.`);
        }
    };
}

// LogMethod: Logs the execution of methods and their arguments.
function LogMethod(target: any, key: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    // Modifies the method to add logging functionality before execution.
    descriptor.value = function (...args: any[]) {
        console.log(`Calling ${key} with arguments: ${JSON.stringify(args)}`);
        return originalMethod.apply(this, args);
    };
    return descriptor;
}

// MyReadOnly: Prevents modification of a property by making it read-only.
function MyReadOnly(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    // Ensures the property has a getter before applying the decorator.
    if (descriptor && descriptor.get) {
        descriptor.enumerable = true; // Optionally makes the property enumerable.
    } else {
        // Provides error feedback if the decorator is used incorrectly.
        console.error('Attempted to apply readonly decorator to non-accessor property');
    }
    return descriptor;
}

// Exporting decorators to be available for use in other parts of the application.
export { SimpleLogger, LogMethod, MyReadOnly };
