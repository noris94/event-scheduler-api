# Event Scheduler API

This project contains the implementation of an Event Scheduler API developed in Nest.js framework using Prisma as ORM. It's a RESTful API that handles simple CRUD operations for a Event model.
It implements Sqlite database with migrations through Prisma ORM

## Table of Contents

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [License](#license)

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (>=14.x)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) (for package management)
- [SQLite](https://www.sqlite.org/) (a self-contained, serverless, zero-configuration, transactional SQL database engine)

## Getting Started

1. Clone this repository to your local machine:

```bash
git clone https://github.com/noris94/event-scheduler-api.git
cd event-scheduler-api
```

2. Install dependencies using npm or yarn:

```bash

npm install

# or

yarn install
```

3. Set up your .env file in the project root with your database connection URL. You can use .env.example as a template.

4. Generate Prisma Client and apply migrations:

```bash
npx prisma migrate dev --name "init"
```

## Project Structure

The project is structured as follows:

```
src/
├── main.ts # Application entry point
├── modules/
│ ├── events/
│ │ ├── dto/ # Data transfer objects
│ │ ├── entities/ # Prisma data models
│ │ ├── events.controller.ts # Event controller
│ │ ├── event.service.ts # Business logic
│ │ └── events.module.ts # Module definition
├── prisma/
│ ├── schema.prisma # Prisma schema definition
└── app.module.ts # Root module
```

## Usage

Start the NestJS application:

```
npm run start:dev

# or

yarn start:dev
```

This project implements swagger UI to see definitions of endpoints, so you can visit http://localhost:3000/swagger in your browser or use tools like Postman to interact with the API.

## License

This project is licensed under the MIT License.
