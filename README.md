# NextJS 

NextJS is a minimalistic framework for rendering REACT applications on the server - an Isomorphic framework.

## Core Features

```
1. Server rendered REACT apps

2. Automatic code splitting and lazy loading. Enhances performance

3. Simple page based routing

4. Built in CSS support

5. Provisions HOT reloading by default

```

## Technologies:

- Next.js,  
- REACT 
- Apollo GraphQL 
- Apollo Client
- Suspense 
- Tailwind CSS
- Cypress 
- Jest 
- Casual
- APIs 
- Docker 
- Heroku.

## Applications:

1. Awesome App - https://github.com/kukuu/NextJS/tree/master/final-NEXT_GRAPHQL_HEROKU-main
2. Next-rematch - https://github.com/kukuu/next-rematch
3. Working with APIs - https://github.com/kukuu/NextJS/tree/master/BitzApp

## e2e  Life Cycle Commands:

Development:

1.  npm install
2. npm run dev
3. split terminal
4. npm run e2e (or npm run cypress)

...................................

For production build
(kill all terminal first)

5. npm run build
6. npm run start
7. npm run e2e (in other terminal)

.......................................


For unit test, no need to start server manually. Simply run following command:

8. npm run test

.......................................

For Docker:
 
9. docker build -t nextjs-docker .
10. docker run -p 3000:3000 nextjs-docker

..........................................


Deploy to Heroku

- heroku login
- heroku create
- heroku stack:set container
- git push heroku master
