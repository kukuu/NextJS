# Docs

This is a starter template to get started with Next JS and GraphQL.
We will be using Apollo Server and Apollo client libraries to handle data fetching
We will try to dockerize it

# Library Used

1. Next.js
2. React
3. ApolloGraphQL
4. TailwindCSS
5. Casual ( for fake data)
6. Docker
7. Heroku (for deployment)
8. Jest for unit testing
9. Cypress (e2e)

# Run commands to get started

- npm install (install all the dependencies)
- npm run dev (for fast refresh)
- npm run build (production build)
- npm run start ( after production build)

# Build Docker Container

- docker build -t nextjs-docker .

# Run Docker

- docker run -p 3000:3000 nextjs-docker

# Push Docker Link Image

- docker push techlever45/awesome-links-web:version1

# Docker Image link

- https://hub.docker.com/repository/docker/techlever45/awesome-links-web
- command: docker pull techlever45/awesome-links-web:version1

# e2e testing using Cypress

- npm run e2e [ this will run the test in headless mode]
- npm run cypress [ this will run the test after opening Browser]

# Deploy to Heroku

- heroku login
- heroku create
- heroku stack:set container
- git push heroku master
