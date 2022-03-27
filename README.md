## A project to learn express.js with Objection.js and Know (MVC)

This project is built with express.js 4, Objection.js and Knex

### Project Installation
1. `cp .env-example .env` and then add your database credentials
2. run `npm install`
3. From the root of the project run `nodemon app.js` or `nodemon -r dotenv/config app.js`
4. go to http://localhost:5000
5. Run the migrations and seeds to populate de db
- `knex migrate:latest`
- `knex seed:run`

## IMPORTANT
### Because of the asynchronous nature of Node.js, you should learn about Async/Await functions in order to avoid creating callback hells.
- http://callbackhell.com
### Since this project is using and ORM, you should learn about what is a N+1 and how to avoid it with eagerloading
- https://vincit.github.io/objection.js/guide/query-examples.html#eager-loading

### Development Notes
always add 'use strict'; at the top of every .js files

This project use the Objection.js ORM and Knex query builder. You should familiarize yourself with the documentations here:
- https://vincit.github.io/objection.js/
- http://knexjs.org/







@todo: 
- language files
- exceptions 404, 403, 419, 422, 503

- create unit testing
- express-policies https://www.npmjs.com/package/express-policies
- Integrate webpack with browsersync
- Add axios
- create a form with csrf token
- validation from backend
- login/register page with password hash
- api token auth 0
- Docker
- AWS
- create script to first-install everything with one command
- complete Readme

