# Webpage-Template

This project is a web application with a Svelte 5 frontend,
designed to run in a Dockerized environment with Nginx as the web server in the production environment.
The setup includes a dev-container to develop quickly without rebuilding the code.

## Table of Contents
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Included Packages](#included-packages)
- [Code Quality](#code-quality)


## Project Structure
Most important files
```
.
├── docker-compose.yml
├── frontend
│   ├── src/
│   │   ├── App.svelte
│   │   ├── assets/
│   │   │   └── svelte.svg
│   │   ├── lib
│   │   │   └── Counter.svelte
│   │   └─── pages/
│   └─── tests
│       └── demo.test.js
└── Readme.md
```

- `App.svelte` is the entry point
- `assets/` is for static files, eg images
- `lib/` is for the components
- `pages/` contains sub pages / stand-alone pages - only if needed


## Getting Started
### Prerequisites
- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/)

### Running the Application
1. Clone the repository:
  ```shell
    git clone
    cd webpage_template
  ```
2. Build and run the application:
  ```shell
    docker compose up -d --build
  ```
3. Access the webpage
  - for development: [http://0.0.0.0:10001](http://0.0.0.0:10001)
    - this server uses hot reloading, when a file is changed, the webpage gets the change automatically
  - for production: [http://0.0.0.0:10000](http://0.0.0.0:10000)
    - Rebuild the container for changes: `docker compose up -d --build frontend_dev`


## Included Packages
### Frontend
- Svelte 5
- vitest
- eslint + prettier
- dayjs
- random


## Code Quality
- the current code uses `lower_snake_case` for basically everything,
  exceptions and details are on [https://pep8.org/](pep8.org)

Helpful commands for the frontend-code:
```shell
  # format the code
  docker compose run frontend_dev npm run format

  # lint the code
  docker compose run frontend_dev npm run lint

  # run tests
  docker compose run frontend_dev npm run test
```
