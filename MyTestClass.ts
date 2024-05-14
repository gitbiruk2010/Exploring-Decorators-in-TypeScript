// Importing decorator functions from decorators module.
import { SimpleLogger, LogMethod, MyReadOnly } from './decorators';

// SimpleLogger: Applies logging to class instantiation.
@SimpleLogger
class MyTestClass {
    private _id: number; // Private property to hold the ID value.

    // Constructor initializes the class with a name and an ID while logging instantiation.
    constructor(public name: string, id: number) {
        this._id = id;
    }

    // LogMethod: Logs each call to the greet method along with its arguments.
    @LogMethod
    greet() {
        console.log(`Hello, ${this.name}`);
    }

    // MyReadOnly: Makes the 'id' property read-only externally.
    @MyReadOnly
    get id() {
        return this._id;
    }

    // Simple method to display the ID of the instance; uses LogMethod decorator if needed.
    getInfo() {
        console.log(`ID: ${this.id}`);
    }
}

// Exporting MyTestClass to be available for use in other parts of the application.
export { MyTestClass };
