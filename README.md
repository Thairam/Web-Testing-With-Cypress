# WEB Testing With [Cypress](https://docs.cypress.io/guides/overview/why-cypress.html)

[![Node][node-image]][node-url] [![Dependencies][dependencies-image]][dependencies-url] [![DependenciesDev][dependencies-dev-image]][dependencies-dev-url] [![Commit][last-commit-image]][last-commit-url] [![Contributors][contributors-image]][contributors-url]

Didactic example of how to implement and organize automated Web tests using Cypress.

This repository contains:
- Tests applied to WebSystem [Github](https://github.com/);
- Tests that access to a MySQL database;

## Prerequisites
- [Node 12.16.1+](https://nodejs.org/en/download/)

## Set the environment variables
Some settings related to the project are defined by environment variables. To configure the settings, make a copy of the `cypress.env.example.json` file, naming it` cypress.env.json`. After that, open and edit the settings as needed. The following environment variables are available:

| VARIABLE | DESCRIPTION  | DEFAULT |
|-----|-----|-----|
| `username` | User with valid and verified profile on Github. | `yourgithubusername` |
| `password` | Valid and verified user profile password on Github. | `yourgithubpassword` |

## Observation
The purpose of this repository is just to show a way on how to use Cypress to automate Web tests and how to structure your project in a simple and organized way.

Testing real websites requires knowledge of different testing strategies.

## Installation and Execution
#### 1. Install dependencies
```sh  
$ npm install    
```
 
#### 2. Opens the Cypress Test Runner
```sh  
$ npm run cypress:open
```

#### 3. Run Cypress tests
```sh  
$ npm run cypress:run
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

#### Step 1

- **Option 1**
    - :fork_and_knife: Fork this repo!

- **Option 2**
    - :dancers: Clone this repo to your local machine!

#### Step 2
- **HACK AWAY!** :hammer:

#### Step 3
- :arrows_clockwise: Create a new pull request!

[//]: # (These are reference links used in the body of this note.)
[node-image]: https://img.shields.io/badge/node-%3E%3D%2012.16.1-brightgreen.svg
[node-url]: https://nodejs.org
[dependencies-image]: https://david-dm.org/Thairam/Web-Testing-With-Cypress.svg
[dependencies-url]: https://david-dm.org/Thairam/Web-Testing-With-Cypress
[dependencies-dev-image]: https://david-dm.org/Thairam/Web-Testing-With-Cypress/dev-status.svg
[dependencies-dev-url]: https://david-dm.org/Thairam/Web-Testing-With-Cypress?type=dev
[contributors-image]: https://img.shields.io/github/contributors/Thairam/Web-Testing-With-Cypress.svg
[contributors-url]: https://github.com/Thairam/Web-Testing-With-Cypress/graphs/contributors
[last-commit-image]: https://img.shields.io/github/last-commit/Thairam/Web-Testing-With-Cypress.svg
[last-commit-url]: https://github.com/Thairam/Web-Testing-With-Cypress/commits
