## TypeScript Decorators Project

This project demonstrates the implementation and usage of decorators in TypeScript to enhance and modify the behavior of classes and their members at design time.

![image](https://github.com/gitbiruk2010/Exploring-Decorators-in-TypeScript/assets/103274295/a710cfcc-ee0e-4129-ae65-ed4582a61275)

## Project Overview

The project includes a class (`MyTestClass`) that utilizes three types of decorators:
- **Class Decorator (`SimpleLogger`)**: Logs information when a class is instantiated.
- **Method Decorator (`LogMethod`)**: Logs calls to methods and their arguments.
- **Accessor Decorator (`MyReadOnly`)**: Makes a property read-only to prevent modifications.

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (Download [here](https://nodejs.org/))
- TypeScript (Install globally via npm with `npm install -g typescript`)

## Setup and Installation

1. **Clone the Repository**:
   git clone https://github.com/gitbiruk2010/Exploring-Decorators-in-TypeScript
   cd typescript-decorators
Install Dependencies:
npm install
Compile TypeScript:
npx tsc
## Running the Project
To run the test script and see the decorators in action, execute:
node dist/test.js
