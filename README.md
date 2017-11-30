# burger

This full-stack site will take in user's burger names and add them to a MySQL database. Users will have the option to devour their burger or other burgers in the database. Devoured burgers will be displayed in the devoured section of the UI.

## Deployed Heroku link
https://tranquil-bastion-38527.herokuapp.com

## Successes
1. MySQL database created. Schema and Seed files are available

## Needs repair
1. Server connects, but does not display on localhost:3030 due to error
```TypeError: Cannot read property 'hash' of undefined
    at RowDataPacket.<anonymous> (C:\Users\mateo\Desktop\class\Homework\burger\node_modules\handlebars\dist\cjs\handlebars\helpers\if.js:16:17)
    at eval (eval at createFunctionContext (C:\Users\mateo\Desktop\class\Homework\burger\node_modules\handlebars\dist\cjs\handlebars\compiler\javascript-compiler.js:254:23), <anonymous>:12:32)
    at Object.prog [as inverse] (C:\Users\mateo\Desktop\class\Homework\burger\node_modules\handlebars\dist\cjs\handlebars\runtime.js:221:12)
    at RowDataPacket.<anonymous> (C:\Users\mateo\Desktop\class\Homework\burger\node_modules\handlebars\dist\cjs\handlebars\helpers\if.js:17:22)
    at RowDataPacket.<anonymous> (C:\Users\mateo\Desktop\class\Homework\burger\node_modules\handlebars\dist\cjs\handlebars\helpers\if.js:24:35)
    at eval (eval at createFunctionContext (C:\Users\mateo\Desktop\class\Homework\burger\node_modules\handlebars\dist\cjs\handlebars\compiler\javascript-compiler.js:254:23), <anonymous>:5:36)
    at prog (C:\Users\mateo\Desktop\class\Homework\burger\node_modules\handlebars\dist\cjs\handlebars\runtime.js:221:12)
    at execIteration (C:\Users\mateo\Desktop\class\Homework\burger\node_modules\handlebars\dist\cjs\handlebars\helpers\each.js:51:19)
    at Object.<anonymous> (C:\Users\mateo\Desktop\class\Homework\burger\node_modules\handlebars\dist\cjs\handlebars\helpers\each.js:61:13)
    at Object.eval (eval at createFunctionContext (C:\Users\mateo\Desktop\class\Homework\burger\node_modules\handlebars\dist\cjs\handlebars\compiler\javascript-compiler.js:254:23), <anonymous>:6:31)```

## Built With
Javascript, Node.js, Express, MySQL, Handlebars, HTML, CSS

## Getting Started
Before running `server.js` you must install the npm dependencies
`npm install`
